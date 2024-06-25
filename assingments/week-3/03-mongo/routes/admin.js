const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const ZOD = require("zod");
const router = Router();
const userNameSchema = ZOD.string();
const passwordSchema = ZOD.string();
const courseSchema=ZOD.object({
    title: ZOD.string(),
    description: ZOD.string(),
    imageLink: ZOD.string(),
    price: ZOD.number()
})
const checkUserExists=async(username, password)=>{
    const check = await Admin.findOne({
        username: username,
    })
    console.log(ans)
    let ans= check==null?false:true
    return ans
}
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    const usernamresult = userNameSchema.safeParse(username);
    const passwordresult = passwordSchema.safeParse(password);
    if(usernamresult.success && passwordresult.success){
       if(await checkUserExists(username, password)){
        return res.json({"message":"User already exists"})
       };
       await Admin.create({
        username: username,
        password: password
    })

   return res.json({
        message: 'Admin created successfully'
    })
    }
    else{
        res.json({"message":"Invalid username or password"})
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })

});

module.exports = router;