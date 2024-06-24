const express = require("express");
const zod = require("zod");
const app = express();
const port = 3000;

// zod validation
const schema=zod.array(zod.number(),zod.string())
app.use(express.json())

/*
{
email:string,=>email should be valid
password:string, atleast 8 letters
country:"IN","US"
}
*/
const check=zod.object({
    email:zod.string().email(),
    password:zod.string().min(6),
    country:zod.literal("IN").or(zod.literal("US"))
})

app.post("/health-checkup",(req,res,next)=>{

    const kidneys=req.body.kidneys
    const response = schema.safeParse(kidneys);
    res.json(response)
})
app.listen(port,()=>console.log(`Server is running at http://localhost:${port}`))

