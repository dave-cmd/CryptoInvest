const { Router } = require('express');
const router = Router();


//Render home page
app.get("/", (req,res) =>{
    res.render("index");
});

module.exports = router;

