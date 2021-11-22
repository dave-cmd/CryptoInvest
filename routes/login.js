const { Router } = require('express');
const { route } = require('./register');
const router = Router();

//Login page

app.get("/login", (req,res)=>{
    res.render("login")
});

app.post("/login", (req, res)=>{
    res.render("/dashboard")
});


module.exports = router;