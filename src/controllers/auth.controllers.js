const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


// SIGNUP API
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

// LOGIN API
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validating user details
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // Checking whether the user exist or not
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    // Comparing password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // Creating the JWT token 
    const token = jwt.sign(
      {
        userid: user._id,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // Returning success
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({

      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { signup, login };