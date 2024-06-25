import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { connApi } from './variables';
// Crear un Contexto de Sesión
export const SessionContext = createContext();
// Crear un Proveedor de Sesión para envolver tu aplicación
export const SessionProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    useEffect(() => {
        const checkToken = async () => {
            try {
                const response = await axios.get(`${connApi.WEB}/api/checkToken`, { withCredentials: true });
                if (response.status === 200) {
                    setIsLoggedIn(true);
                    setUser(response.data);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                setIsLoggedIn(false);
            }
        };
        checkToken();
    }, []);
    return (
        <SessionContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
            {children}
        </SessionContext.Provider>
    );
};



export const useSession = () => {
    const context = useContext(SessionContext);
    if (context === undefined) {
        throw new Error('useSession debe ser usado dentro de un SessionProvider');
    }
    return context;
};