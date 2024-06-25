const path=require("../../src/pathBase")
const express=require('express');
const app =express()

// Define custom MIME types
express.static.mime.define({
  'application/javascript': ['js'],
  'application/json': ['json']
});

app.use("/",express.static(path.app("/public")))
app.get("/*",(req,res)=>{
  res.sendFile(path.app("/public/index.html"))
})
app.post('/.postConctact', (req, res) => {
  res.redirect(307, 'http://localhost:3069/api/consultas');
})
app.post("/*",(req,res)=>{
  res.sendFile(path.app("/public/index.html"))
})
 

const listenAPP=(port=4069,host="localhost")=>{
 app.listen(port,host,()=>{
  console.log(`app server on http://${host}:${port}`)


})
}


if(require.main===module){
 
  listenAPP()
}

module.exports={listenAPP};//se exporta