const { Aadhaar } = require("../models/aadhaarSchema");

const create = async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, phoneNumber, email, password, homeAddress,aadhaarNumber } = req.body;
    // Generate unique Aadhaar number
    // const aadhaarNumber = generateAadhaarNumber(firstName, lastName, phoneNumber);
    const newAadhaar = new Aadhaar({
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      homeAddress,
      aadhaarNumber,
    });
    await newAadhaar.save();
    console.log("user details saved")

  } catch (err) {
    console.log(err);
  }
};

module.exports = { create };
