const express = require('express');

const route = express.Router();

route.get('/profile', (req, res) => {
    res.json({
        name: "Naman Mehrotra",
        email: "namanmehrotra718@gmail.com"
    });
});

module.exports = route;