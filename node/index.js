const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.send("Hello Worl")
})
app.get("/hello",(req,res)=>{
    res.json({message:"Hello World"})
})
app.post("/show-name",(req,res)=>{
    console.log(req.body)
    res.json({name:req.body.name})
})
app.listen(port,()=>console.log(`Server is running at http://localhost:${port}`))