import React from "react";
import styled from "styled-components";
// import { Container } from "winston";

const Container = styled.div`
  width: 100%;
  /* background: linear-gradient(to bottom, navy, white); */
  /* background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,70,121,1) 35%, rgba(0,212,255,1) 100%); */

  /* background-color: blue; */
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  /* padding: 20px; */
  /* background-color: yellow; */
`;
const Image = styled.img`
  padding: 15px;
`;

const Name = styled.h1`
  display: flex;
  justify-content: center;
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Image src="https://email.gov.in/img/nic/emblem.png" alt="national-emblem" />
        <Image src="https://email.gov.in/img/nic/digital-india-logo.png" alt="am-logo" />
      </Wrapper>
      <Name>Aadhaar Portal</Name>
    </Container>
  );
};

export default Header;
