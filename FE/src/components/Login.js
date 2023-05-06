import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* height: 100vh; */
  /* background: linear-gradient(to bottom, navy, white); */
  /* background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,70,121,1) 35%, rgba(0,212,255,1) 100%); */
  
  /* background-color: #0cafff; */
`;

const Form = styled.form`
  width: 500px;
  margin: 0 auto;
  padding: 40px;
  background: radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(45,253,72,1) 100%);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #f7f7f7;
`;

const Label = styled.label`
  display: block;
  margin: 20px;
  font-weight: bold;
`;

const Input = styled.input`
  display: block;
  /* margin:0 auto; */
  width: 80%;
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e5e5e5;
  margin: 0 auto;
  /* align-self:center */
  /* justify-content: center; */
`;
const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 88%;
  padding: 15px;
  margin-top: 50px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;
const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  // const [trigger, setTrigger] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const { name, value } = e.target;
    // setUserData({ ...userData, [name]: value });
    console.log(userData);
    try {
      const response = await axios.post("http://localhost:5000/aadhaar/login", userData);
      console.log(response.data);
      if (response.data) {
        // setTrigger(true);
        navigate("/aadhaar-card");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <Header/>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label for="email">Email:</Label>
            <Input type="email" name="email" value={userData.email} onChange={handleChange} />
            <Label for="password">Password:</Label>
            <Input type="password" name="password" value={userData.password} onChange={handleChange} />
            <Button type="submit">Login</Button>
          </div>
        </Form>
      </Wrapper>
    </div>
  );
};

export default Login;
