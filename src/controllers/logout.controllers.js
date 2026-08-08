const User = require('../models/user.models')

const logout = async (req, res) => {
    try {
        const user = await User.findById(req.user.userid);

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found",
            });
        }
            user.refreshToken = null;

            await user.save({
                validateBeforeSave: false,
            });
            return res.status(200).json({
                success: true,
                message: "Logout successful",
            });
    } catch(error) {
        console.log(error);

        return res.status(200).json({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = { logout }