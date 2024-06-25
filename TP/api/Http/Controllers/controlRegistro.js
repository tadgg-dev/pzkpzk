

const bcrypt = require('bcrypt');

const verUser=require("../Middleware/comprobarUser")

 
const controlUsuario = async (req, res) => {
console.log('inicio')
    const newData = req.body;
    const { user, nombre, email, password } = newData

    const userIf = await verUser.usersExisit(user)

    if (!userIf) {
        console.log('if user')
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        verUser.crearUser(user, nombre, email, hashedPassword, req.headers['user-agent'])




        return res.send("registrado")
    } else if (userIf) {
        console.log('else if user')
        return    res.sendStatus(404)
    }
    

}//fin de la funcion

module.exports = {
    controlUsuario,

}