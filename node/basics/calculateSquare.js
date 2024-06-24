const express= require("express");
const app=express();
const port=3000;

app.get("/",(req,res)=>{
    // from query param
    const n = req.query.n
    console.log(n)
    ans=n**2
    // alwyas send as string as int will be interpreted as status code
    res.send(ans.toString())

    // res.json({square:n*n})
})

app.listen(port,()=>console.log(`Server is running at http://localhost:${port}`))