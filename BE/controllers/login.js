const { Aadhaar } = require("../models/aadhaarSchema");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await Aadhaar.findOne({ email: email });
    console.log(user, "founduser");
    if (!user) {
      return res.status(400).send("user not found");
    }
    const passwordMatch = bcrypt.compareSync(password, user.password);
    console.log(passwordMatch, "match");
    if (!passwordMatch) {
      return res.status(400).send("invalid password");
    }
    return res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = { login };
