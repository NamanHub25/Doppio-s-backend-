// Think of app.js as building the car where we are assembling the engine, steering wheel,seats, brakes etc.

const express = require('express'); // Importing the Express library beacuse without it node won't know what is Express

const app = express(); // Here, we are creating an express application 
const authRoute = require('./routes/auth.routes')

app.use(express.json()); 

app.get("/", (req, res) => {
    res.send("Welcome to Doppio!!!");
});

// Signup API 
app.post("/signup", (req,res) => {
    console.log(req.body);

    res.send("SignUp successfull!!!");
});

//Login API
app.post("/login", (req,res) => {
    console.log(req.body);


    res.send("User logged in successfully!!!");
});

//Profile API

app.get("/profile",(req,res)=>{

    res.json({
        name:"Naman Mehrotra",
        email:"naman@gmail.com"
    });

});

// Message API
app.post("/message", (req, res) => {
    console.log(req.body);

    res.send("Message sent successfully!!!");
});


module.exports = app; // This ensures that we are making app.js available for other files 
