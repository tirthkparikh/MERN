const express=require("express")
const app=express()
const CORS = require('cors')
const port=3000
app.use(CORS())
app.get("/sum",(req,res)=>{
    const a=req.query.a;
    const b= req.query.b;
    const sum= Number(a)+Number(b);
    res.send(sum.toString())
})
app.listen(port,()=>console.log(`Server is running at http://localhost:${port}`))