const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())
// what if user enters invalid data or no data? we can control frontend but what about postman or curl or etc fetch 
app.post("/health-checup",(req,res,next)=>{
    //  we will have to validate the data like this which becomes very ugly and we will have to use it multiple places for multiple validations
    // so we can use libraries like joi,yup,zod etc
    if(!kidneys){
        return res.status(403).json({message:"kidneys not found"})
    }
    const kidneys=req.body.kidneys
    const kidneyslength=kidneys.length
    res.send("Total number of kidneys is "+kidneyslength)
})
app.listen(port,()=>console.log(`Server is running at http://localhost:${port}`))