// SignUp and Login APIs would belong to auhentication not the APIs ofmessage and profile

const express = require('express');

const route = express.Router();

// Signup API 
route.post("/signup", (req,res) => {
    res.send("SignUp successfull!!!");
});

//Login API
route.post("/login", (req,res) => {
    res.send("User logged in successfully!!!");
});

module.exports = route;