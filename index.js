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

//Registration Page

app.get("/register", (req,res)=>{
    res.render("register")
});

app.post("/register", (req, res)=>{
    res.render("/login")
});

//Login page

app.get("/login", (req,res)=>{
    res.render("login")
});

app.post("/login", (req, res)=>{
    res.render("/dashboard")
});


app.listen(port, ()=>{
    console.log(`CryptoInvest is listening on port http://localhost:${port}`)
})