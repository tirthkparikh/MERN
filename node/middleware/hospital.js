const express = require("express");
const app = express();
const port = 3000;

// without middleware we need to check it multipkle times for all the routes, also it is not cleaner and single threaded
app.get("/health-checkup",(req,res)=>{
   const name = req.headers.username;
   const password =req.headers.password;
   const kidney = req.query.n;
   
   if(name=="Tirth" && password=="tirth123"){
    if(kidney>0 && kidney<3){

        res.send("success")
    }
    else{
        res.status(403).json({message:"Are you alien?"})
    }
   }
   else{
    res.status(403).json({message:"invalid credentials"})
   }

})
app.listen(port,()=>console.log(`Server is running at http://localhost:${port}`))