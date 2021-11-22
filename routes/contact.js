const { Router } = require('express');
const router = Router();

//Render contact page
app.get("/contact", (req,res) =>{
    res.render("contact");
});


module.exports = router;