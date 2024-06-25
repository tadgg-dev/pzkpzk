
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verUser=require("../Middleware/comprobarUser");
const env=require('dotenv').config().parsed;
const COOKIESKEYS=JSON.parse(env.COOKIESKEYS)

const {access_key,refresh_key}=COOKIESKEYS



const loginUser = async (req, res) => {
 
  const user = req.body;//explicados en controlRegistro.js
const users =  await verUser.user(user.user)

  if (user === null) {
    return res.status(400).send('No se puede encontrar al usuario');
  }


 
    try {
      if (user.user === undefined) {
        return res.sendStatus(400)
      }

      bcrypt.compare(user.password, users.password, function (err, result) {
        if (err) {
          console.error(err,"pass");
          return res.sendStatus(400);
        }


        if (result === true) {

          const accessToken = jwt.sign({ username: user.user, id: users.id,testeo:"asd"  },access_key , { expiresIn: '120m' });
          const refreshToken = jwt.sign({ username: user.user, id: users.id,testeo:"asd"  },refresh_key , { expiresIn: '7d' });

          res.cookie('access-token', accessToken, { maxAge: 2 * 60 * 1000, secure: true, httpOnly: true,sameSite: 'none'   });
            res.cookie('refresh-token', refreshToken, { maxAge: 60 * 60 * 24 * 7 * 1000, secure: true, httpOnly: true,sameSite: 'none' });

          

          console.log("fin login")
          return res.json({
            user:user.user,
            email: users.id,
          });;
        } else {
          return res.sendStatus(404);
        }
      });



    } catch {//try captura error
      res.sendStatus(500)
    }



 


}

const listaNegra={};

const logoutUser=async (req,res)=>{
const tokenRefresh=req.cookies["refresh-token"]
  listaNegra[tokenRefresh]="ban";
  
try{
  const {username,id} = jwt.verify(tokenRefresh, refresh_key)
  res.cookie('access-token', "", { maxAge: 1, secure: false, httpOnly: false });
  res.cookie('refresh-token', "", { maxAge: 1, secure: false, httpOnly: false });
  res.sendStatus(200)
}catch(e){
console.log('error logout')
}

 
}

const checkToken=async(req,res)=>{
  const tokenRefresh=req.cookies["refresh-token"]
  
  try{
   if(listaNegra[tokenRefresh]===undefined){
   
    const {username,id} = jwt.verify(tokenRefresh,refresh_key)
    console.log(req.client)
    /* if(){

    } */
          const accessToken = jwt.sign({ username: username, id: id,testeo:"asd"  }, access_key, { expiresIn: '120m' });
          const refreshToken = jwt.sign({ username: username, id: id,testeo:"asd" },refresh_key, { expiresIn: '7d' });

          res.cookie('access-token', accessToken, { maxAge: 2 * 60 * 1000, secure: true, httpOnly: true,sameSite: 'none'  });
            res.cookie('refresh-token', refreshToken, { maxAge: 60 * 60 * 24 * 7 * 1000, secure: true, httpOnly: true,sameSite: 'none'  });
    
            res.json(user={
              user:username,
              email:id,
            }
          )
          
}else{
 
  res.cookie('access-token', "", { maxAge: 1, secure: false, httpOnly: false });
  res.cookie('refresh-token', "", { maxAge: 1, secure: false, httpOnly: false });
   res.sendStatus(400)
  
}
  }catch(e){ 
   
    res.cookie('access-token', "", { maxAge: 1, secure: false, httpOnly: false });
  res.cookie('refresh-token', "", { maxAge: 1, secure: false, httpOnly: false });
   res.sendStatus(400)
  }
  
}
module.exports = {
  loginUser,
  logoutUser,
  checkToken,
}


