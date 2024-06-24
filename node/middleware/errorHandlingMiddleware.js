const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())
app.post("/health-checup",(req,res,next)=>{
   
//   even if we dont do validation our sever will not break 
    const kidneys=req.body.kidneys
    const kidneyslength=kidneys.length
    res.send("Total number of kidneys is "+kidneyslength)
})
app.listen(port,()=>console.log(`Server is running at http://localhost:${port}`))

// global catch
app.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).json({message:"something went wrong"})
})