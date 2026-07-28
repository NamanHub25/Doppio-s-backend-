const express = require('express');
const getProfile = require('../controllers/users.controllers');

const route = express.Router();

route.get('/profile', getProfile)

module.exports = route;