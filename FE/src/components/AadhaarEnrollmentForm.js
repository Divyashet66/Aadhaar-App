import React, { useState } from "react";
import axios from "axios";

const AadhaarEnrollmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  // const [aadhaarNumber, setAadhaarNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log({
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        homeAddress,
      });
      const response = await axios.post("http://localhost:5000/aadhaar/create", {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        homeAddress,
      });
      console.log("response", response.data);
      // setAadhaarNumber(response.data.aadhaarNumber);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Aadhaar Enrollment Form</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
            <label htmlFor="firstName" style={{ marginRight: "10px" }}>
              First Name
            </label>
            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
            <label htmlFor="lastName" style={{ marginRight: "10px" }}>
              Last Name
            </label>
            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
            <label htmlFor="phoneNumber" style={{ marginRight: "10px" }}>
              Phone Number
            </label>
            <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
            <label htmlFor="email" style={{ marginRight: "10px" }}>
              Email
            </label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
            <label htmlFor="password" style={{ marginRight: "10px" }}>
              Password
            </label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
            <label htmlFor="homeAddress" style={{ marginRight: "10px" }}>
              Home Address
            </label>
            <textarea id="homeAddress" value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)}></textarea>
          </div>
          <button type="submit" style={{ marginTop: "10px" }}>
            Submit
          </button>
        </form>
        {/* {aadhaarNumber && <p style={{ marginLeft: "20px" }}>Your Aadhaar Number is {aadhaarNumber}</p>} */}
      </div>
    </div>
  );
};

export default AadhaarEnrollmentForm;
