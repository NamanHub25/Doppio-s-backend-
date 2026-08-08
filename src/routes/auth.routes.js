// SignUp and Login APIs would belong to auhentication not the APIs ofmessage and profile

const express = require('express')

const route = express.Router();
const {signup, login} = require('../controllers/auth.controllers');
const { refreshAccessToken } = require('../controllers/refreshToken.controllers');
const { logout } = require('../controllers/logout.controllers');


route.post('/signup', signup)
route.post('/login', login)
route.post('/refresh', refreshAccessToken)
route.post('/logout', authMiddleware, logout)

module.exports = route;
