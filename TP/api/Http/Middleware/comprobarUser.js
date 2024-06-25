const path= require("../../../src/pathBase")
const conn = require(path.database("/conn"));

const crearUser = async (user, nombre, correo, password,versionNav) => {

    conn.query('INSERT INTO Usuarios (user, nombre, correo, password, versionNav, accessToken, nivelAcceso) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [user, nombre, correo, password,versionNav, "", "registrado"],
        function (error, results) {
            if (error) throw error;
            callback(results);
        })
        ;

   

};
const usersExisit = async (user) => {
    const [row, fields] = await conn.query(`SELECT * FROM Usuarios WHERE user = ?`, [user])
    return row.length > 0;

};
const user= async (user) => {
    const [row, fields] = await conn.query(`SELECT * FROM Usuarios WHERE user = ?`, [user])
    
    return row[0];

};
module.exports={
    crearUser,
    usersExisit,
    user
}