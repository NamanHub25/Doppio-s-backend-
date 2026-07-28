const express = require('express')

const route = express.Router();

route.post('/send', (req, res) => {
    console.log(req.body);

    res.json({
        success: "true",
        message: "Message sent successfully!!!"
    });
});

module.exports = route;