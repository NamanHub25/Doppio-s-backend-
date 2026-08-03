const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");

const {
  sendMessage,
  getMessages,
} = require("../controllers/message.controllers");

const route = express.Router();

route.post("/send", authMiddleware, sendMessage);

route.get("/", authMiddleware, getMessages);

module.exports = route;
