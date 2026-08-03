const sendMessage = (req, res) => {
    res.json({
        message: "Send message API working"
    });
};


const getMessages = (req, res) => {
    res.json({
        message: "Get messages API working"
    });
};


module.exports = {
    sendMessage,
    getMessages
};