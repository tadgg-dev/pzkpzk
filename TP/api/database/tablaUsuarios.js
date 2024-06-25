const {existTable}=require("./conn")

const tablaUsers =()=>{
  const users = `
CREATE TABLE IF NOT EXISTS Usuarios (
  id INT PRIMARY KEY,
  user VARCHAR(255),
  nombre VARCHAR(255),
  correo VARCHAR(255),
  password VARCHAR(255),
  versionNav VARCHAR(255),
  accessToken VARCHAR(255),
  nivelAcceso VARCHAR(255)
)
`;
  
  try{

existTable("Usuarios",users)





}catch(e){
    console.log(e)
};
}
module.exports={tablaUsers}