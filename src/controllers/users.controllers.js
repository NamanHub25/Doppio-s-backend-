const User = require("../models/user.models");

const getProfile = async (req, res) => {
    try {
        // user id is already attached by middleware
        const userId = req.user.userid;

        // find that user in database
        const user = await User.findById(userId).select("-password");

        // if user doesn't exist
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // send user profile
        res.status(200).json(
           // success: true,
            user
        );

    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};


module.exports = {
    getProfile
};