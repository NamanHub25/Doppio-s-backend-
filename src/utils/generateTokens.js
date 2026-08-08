const jwt = require("jsonwebtoken");

const generateAccessToken = (userid) => {
  return jwt.sign(
    {
      userid: userid,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "15m",
    },
  );
};

const generateRefreshToken = (userid) => {
  return jwt.sign(
    {
      userid: userid,
    },
    process.env.JWT_SECRET_REFRESH,
    {
      expiresIn: "30d",
    },
  );
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
