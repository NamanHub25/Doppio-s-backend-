// SignUp and Login APIs would belong to auhentication not the APIs ofmessage and profile

const express = require('express')

const route = express.Router();
const {signup, login} = require('../controllers/auth.controllers');

route.post('/signup', signup)
route.post('/login', login)

module.exports = route;
