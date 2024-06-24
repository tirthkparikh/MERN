const express = require("express");
const app = express();
const port = 3000;

const userValMiddlevar=(req,res,next)=>{
    const name = req.headers.username;
   const password =req.headers.password;

   if(name=="Tirth" && password=="tirth123"){
    next()
   }
   else{
    res.status(403).json({message:"invalid credentials"})
   }
}
const kidneyMiddleware=(req,res,next)=>{
    const kidney = req.query.n;
    console.log(kidney)
    if(kidney>0 && kidney<3){
        next()
    }
    else{
        res.status(403).json({message:"Are you alien?"})
    }
}
app.get("/health-checkup",userValMiddlevar,kidneyMiddleware,(req,res)=>{
        res.send("success") 

})
app.listen(port,()=>console.log(`Server is running at http://localhost:${port}`))