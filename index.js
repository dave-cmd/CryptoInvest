const express = require("express");
const bodyParser = require('body-parser');


app = express();
let PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

var cons = require('consolidate');

// view engine setup
app.set('view engine', 'ejs')


//Routes middleware
//app.use(json());
app.use(bodyParser.urlencoded({
    extended:false
}));


//Routes
const homeRoute = require("./routes/home");
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const contactRoute = require("./routes/contact");
const aboutRoute = require("./routes/about");





app.listen(PORT, ()=>{
    console.log(`CryptoInvest is listening on port http://localhost:${PORT}`)
})