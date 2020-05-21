import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  width: 50%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  position: absolute;
  top: 0;
  left: 25%;
  padding-top: 10px;
  @media only screen and (max-width: 700px){
    width: 75%;
    left: 12.5%;
  }
`;

const Title = styled.h1`
  font-weight: 900;
  color: #003068;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  opacity: 0.9;
  @media only screen and (max-width: 900px){
    font-size: 30px
  }
  @media only screen and (max-width: 500px){
    font-size: 20px
  }
`;

const Header = props => {
    return (
        <Container height={props.height}>
            <Title>Know your city</Title>
        </Container>
    );
};

export default Header;
