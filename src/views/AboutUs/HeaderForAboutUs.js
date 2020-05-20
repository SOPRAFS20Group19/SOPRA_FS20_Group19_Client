import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  position: center;
  top: 0;
  right: 0;
  padding-top: 10px;
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

const HeaderForAboutUs = props => {
    return (
        <Container height={props.height}>
            <Title>All about Know your city</Title>
        </Container>
    );
};

export default HeaderForAboutUs;