const { Router } = require('express');
const router = Router();

//Login page

app.get("/login", (req,res)=>{
    res.render("login")
});

app.post("/login", (req, res)=>{
    console.log(req.body)
    res.send(req.body)
    //res.render("/dashboard")
});


module.exports = router;