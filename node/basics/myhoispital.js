// http server
// get user can check how mankindey he has
// post user can add kidney
// PUT user can replace kindey bad with good
// user can remove a kidney 
const express=require("express")
const {users} = require('./mock-data')
const bodyParser=require("body-parser")
const app=express()
const port=3000
app.use(bodyParser.json())

// get user's kidney
app.get(("/kidneys"),(req,res)=>{
    let name= req.query.name;
    let user = users.find((user)=>user.name===name);
    console.log(user)
    if(user){
        res.json({"total kindeys":user.kidneys.length})
    }
    else{
        res.status(403).json({ message: "User not found" }); // Respond with 403 status and error message
    }
    
})

// add user's kidney
app.post(("/kidneys-add"),(req,res)=>{
    let name= req.query.name;
    let user = users.find((user)=>user.name===name);
    console.log(user)
    if(user){
        let total_kidney=user.kidneys.length;
        if(total_kidney<2){
            user.kidneys.push({healthy:true})
            res.json(user)
        }
        else{
            res.status(201).json({ message: "User can only have 2 kidneys" }); 
        }
        
    }
    else{
        res.status(403).json({ message: "User not found" }); // Respond with 403 status and error message
    }
})

// replace bad kindey if any 
app.put(("/kidneys-replace"),(req,res)=>{
    let name= req.query.name;
    let user = users.find((user)=>user.name===name);
    console.log(user)
    if(user){
        let kidney1=user?.kidneys?.[0]?.healthy 
        let kidney2=user?.kidneys?.[1]?.healthy 
        console.log(kidney1,kidney2)
        if(kidney1 && kidney2){
            return res.status(201).json({ message: "User has already 2 good kindeys" }); 
        }
        for (let kindey in user.kidneys){
            if(user.kidneys[kindey].healthy===false){
                user.kidneys[kindey].healthy=true
                res.json(user)
            }
        }
        if(kidney1 && kidney2){
            res.status(201).json({ message: "User has already 2 good kindeys" });
        }
        else{
            res.status(201).json({ message: "User has 1 good kindey, but need to add 1 more kidney" });
        }
    
}
    else{
        res.status(403).json({ message: "User not found" }); // Respond with 403 status and error message
    }
})

// delete user's kidney
app.delete(("/kidneys-delete"),(req,res)=>{
    let name= req.query.name;
    let user = users.find((user)=>user.name===name);
    console.log(user)
    if(user){
        let total_kidney=user.kidneys.length;
        let kidney1=user?.kidneys?.[0]?.healthy 
        let kidney2=user?.kidneys?.[1]?.healthy 
        console.log(kidney1,kidney2)
        if((kidney1 && kidney2)){
            return res.status(411).json({ message: "User has already 2 good kindeys" }); 
        }
        if(total_kidney>1){
            if(kidney1){
                user.kidneys.pop()
            }
            else if (kidney2){
                user.kidneys.shift()
            }
            res.json(user)
        }
        else{
            res.status(201).json({ message: "User has only 1 kindey" }); 
        }
        
    }
    else{
        res.status(403).json({ message: "User not found" }); // Respond with 403 status and error message
    }
})
app.listen(port,()=>console.log(`Server is running at http://localhost:${port}`))