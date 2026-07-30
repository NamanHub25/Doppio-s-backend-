const User = require("../models/user.models");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { name, email, password, username } = req.body; // We destructured, instead of prinitng the entire object

    //Validating the user details
    if (!name || !email || !password || !username) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    //Checking duplicate user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword, // Changed the password to password:hashedPassword after hashing
      username,
    });

    await user.save();

    return res.status(201).json({
      success: true,
      message: "Signup successful",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const login = (req, res) => {
  res.send("Login successfull!!!");
};

module.exports = { signup, login };
