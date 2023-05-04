const mongoose = require("mongoose");

const aadhaarSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  password: String,
  homeAddress: String,
  aadhaarNumber: String,
});

const Aadhaar = mongoose.model("Aadhar", aadhaarSchema);

module.exports = { Aadhaar };
