const sendmessages = (req, res) => {
    console.log(req.body);

    res.json({
        success: true,
        messgae: "Message sent successfully!!!"
    });
};

module.exports = sendmessages;