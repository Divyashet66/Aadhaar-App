const { Aadhaar } = require("../models/aadhaarSchema");
const bcrypt = require("bcryptjs");

const generateAadhaarNumber = () => {
  let aadhaarNumber = "";
  for (let i = 0; i < 12; i++) {
    aadhaarNumber += Math.floor(Math.random() * 10);
  }
  return aadhaarNumber;
};

const create = async (req, res) => {
  try {
    // console.log(req.body);
    var aadhaarNumber = generateAadhaarNumber();
    // const aadhaarNumber = "259815601075";
    console.log(aadhaarNumber, "number");
    const user = await Aadhaar.find({ aadhaarNumber: aadhaarNumber });
    console.log(user.length, "user");
    while (user.length !== 0) {
      aadhaarNumber = generateAadhaarNumber();
      // return res.status(401).send("aadhaar number already exists");
    }
    const { firstName, lastName, phoneNumber, email, password, homeAddress } = req.body;
    // Generate unique Aadhaar number
    // const aadhaarNumber = generateAadhaarNumber(firstName, lastName, phoneNumber);
    // Generate a new Aadhaar number
    console.log(req.body);
    // const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newAadhaar = new Aadhaar({
      firstName,
      lastName,
      phoneNumber,
      email,
      password: hashedPassword,
      homeAddress,
      aadhaarNumber,
    });

    await newAadhaar.save();
    // console.log(newAadhaar);
    res.status(200).json(newAadhaar);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { create };
