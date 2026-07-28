const getProfile = (req,res) => {
    res.json({
        name: "Naman Mehrotra",
        email: "namanmehrotra718@gmail.com"
    });
};

module.exports = getProfile;