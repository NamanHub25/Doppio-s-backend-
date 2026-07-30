const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String, 
    username: String,
    bio: String,
    profilePicture: String,
  },
  {
    timestamps: true, // Whenever a user signup timestamp feature of MongoDB automatically saves the date
  },
);

const User = mongoose.model('User', userSchema); // User is no longer a variable, it has become a model object that has many built-in methods

module.exports = User;
