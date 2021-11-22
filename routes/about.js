const { Router } = require('express');
const { route } = require('./home');
const router = Router();

//Render about page
app.get("/about", (req,res) =>{
    res.render("about");
});


module.exports = router;