const express=require("express")
const app=express()
const port=3000
const cors = require('cors');
app.use(cors());
app.get("/",(req,res)=>{
    res.json({
       data:[ "tirth",
        "liza",
        "keyur","sonali","keyur"]
    })
})
app.listen(port,()=>console.log(`Server is running at http://localhost:${port}`))