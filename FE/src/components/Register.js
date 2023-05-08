import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Form = styled.form`
  width: 600px;
  margin: 0 auto;
  padding: 40px;
  background: radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(45, 253, 72, 1) 100%);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #f7f7f7;
`;

const Label = styled.label`
  /* display: block;
  margin: 20px;
  font-weight: bold; */
  display: inline-block; /* Make the label an inline block element */
  width: 22%; /* Set the width of the label to 50% of the parent element */
  white-space: nowrap; /* Prevent the label from wrapping to the second line */
  overflow: hidden; /* Hide any overflow text that goes beyond the label's width */
  text-overflow: ellipsis;
  /* background-color: pink; */
`;

const Input = styled.input`
  /* display: block; */
  /* margin:0 auto; */
  /* width: 80%;
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e5e5e5;
  margin: 0 auto; */
  /* align-self:center */
  /* justify-content: center; */

  display: block;
  width: 80%;
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e5e5e5;
  margin: 0 auto; /* Center the input box horizontally */
`;
const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 100%;
  padding: 15px;
  margin-top: 50px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

const Register = () => {
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
      <Header />
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Wrap>
            <Label htmlFor="firstName" >
              First Name
            </Label>
            <Input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </Wrap>
          <Wrap>
            <Label htmlFor="lastName" >
              Last Name
            </Label>
            <Input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </Wrap>
          <Wrap>
            <Label htmlFor="phoneNumber" >
              Phone Number
            </Label>
            <Input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </Wrap>
          <Wrap>
            <Label htmlFor="email" >
              Email
            </Label>
            <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Wrap>
          <Wrap>
            <Label htmlFor="password" >
              Password
            </Label>
            <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Wrap>
          <Wrap>
            <Label htmlFor="homeAddress" >
              Home Address
            </Label>
            <Input id="homeAddress" value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)}></Input>
          </Wrap>
          <Button type="submit">Register</Button>
        </Form>
        {/* {aadhaarNumber && <p style={{ marginLeft: "20px" }}>Your Aadhaar Number is {aadhaarNumber}</p>} */}
      </Wrapper>
    </div>
  );
};

export default Register;
