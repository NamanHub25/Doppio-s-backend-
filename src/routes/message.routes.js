const express = require('express');
const messages = require('../controllers/message.controllers');
const sendmessages = require('../controllers/message.controllers');

const route = express.Router();

route.post("/send", sendmessages)

module.exports = route;