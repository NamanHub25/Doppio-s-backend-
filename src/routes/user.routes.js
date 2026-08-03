const express = require("express");
const authMiddleware = require('../middleware/auth.middleware');
const {getProfile} = require("../controllers/users.controllers");

const route = express.Router();

route.get("/profile", authMiddleware, getProfile);

module.exports = route;
