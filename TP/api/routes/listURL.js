
const db=require("../database/conn")

const login=require("../Http/Controllers/controlInicio")

const register=require("../Http/Controllers/controlRegistro")


const {productosList}=require("../Http/Controllers/productos")
 






const urls = {
    "GET": {
        "/api/productos/": productosList, 
        "/api/checkToken":login.checkToken,
        "/api/logout":login.logoutUser, 
       
    },
    "POST": {
        "/api/register":register.controlUsuario,
        "/api/login":login.loginUser,
   
    
    },
    "OPTIONS": {
        "/api/login": login.loginUser,
    },
    "DELETE": {
        "/": []
    },

}

module.exports={urls}