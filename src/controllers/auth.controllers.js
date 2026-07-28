const signup = (req, res) => {
  console.log(req.body);

  res.send("Signup successful");
};

const login = (req, res) => {
  res.send("Login successfull!!!");
};

module.exports = { signup, login };
