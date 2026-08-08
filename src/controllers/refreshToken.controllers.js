const jwt = require("jsonwebtoken");
const { generateAccessToken } = require("../utils/generateTokens");
const User = require("../models/user.models");

const refreshAccessToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        message: "Refresh token is required",
      });
    }
    // Verify refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET_REFRESH);
    // Find user
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid refresh token",
      });
    }
    // Compare provided token with the stored token
    if (user.refreshToken != refreshToken) {
      return res.status(400).json({
        success: false,
        message: "Invalid refresh token",
      });
    }
    //Generate new access token

    const accessToken = generateAccessToken(user._id);

    return res.status(200).json({
      success: true,
      accessToken,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message: "Invalid or expired refresh token",
    });
  }
};

module.exports = { refreshAccessToken };
