const { Router } = require('express');
const router = Router();


//Registration Page
app.get("/register", (req,res)=>{
    res.render("register")
});

app.post("/register", (req, res)=>{
    console.log(req.body);
    res.render("./login")
});


module.exports = router;