const express = require("express");
app = express();
let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

var cons = require('consolidate');

// view engine setup
app.set('view engine', 'ejs')




//Render home page
app.get("/", (req,res) =>{
    res.render("index");
})

//Render about page
app.get("/about", (req,res) =>{
    res.render("about");
})

//Render contact page
app.get("/contact", (req,res) =>{
    res.render("contact");
})


//Render services page
app.get("/services", (req,res) =>{
    res.render("services");
})


app.listen(port, ()=>{
    console.log(`CryptoInvest is listening on port http://localhost:${port}`)
})