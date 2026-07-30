const User = require("../models/user.models");

const signup = async (req, res) => {
  const { name, email, password, username } = req.body; // We destructured, instead of prinitng the entire object

  //Validating the user details
  if (!name || !email || !password || !username) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  
  //Checking duplicate user
  const existingUser = await User.findOne({email}) 

  if(existingUser) {
    return res.json(400).json({
      message: "User already exists"
    });
  }
  
  const user = new User({
    name,
    email,
    password,
    username,
  });

  await user.save();

  res.send("Signup successful");
};

const login = (req, res) => {
  res.send("Login successfull!!!");
};

module.exports = { signup, login };
