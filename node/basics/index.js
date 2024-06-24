const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// need to use bodyparser as express need to know what kind of data are we parsing here json() 
app.use(bodyParser.json())

// normal get route
app.get("/",(req,res)=>{
    res.send("Hello Worl")
})
// get route with json res
app.get("/hello",(req,res)=>{
    res.json({message:"Hello World"})
})
// post request with name in body
app.post("/show-name",(req,res)=>{
    console.log(req.body)
    res.json({name:req.body.name})
})
app.listen(port,()=>console.log(`Server is running at http://localhost:${port}`))