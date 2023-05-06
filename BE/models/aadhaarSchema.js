const mongoose = require("mongoose");

const aadhaarSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  homeAddress: String,
  aadhaarNumber: String,
});

const Aadhaar = mongoose.model("Aadhaar", aadhaarSchema);

module.exports = { Aadhaar };
