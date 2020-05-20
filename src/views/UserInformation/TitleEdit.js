import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  grid-column: 1 / span 3;
  grid-row: 1;
  margin-top: 20px;
  margin-left: 0px;
  align-content: center;
  justify-content: center;
  position: center;

`;

const Title = styled.h1`
  font-weight: 900;
  color: #003068;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  opacity: 1;
  @media only screen and (max-width: 700px){
    font-size: 30px
  }
  @media only screen and (max-width: 500px){
    font-size: 20px
  }
`;

const TitleEdit = props => {
    return (
        <Container height={props.height}>
            <Title>Know your city</Title>
        </Container>
    );
};

export default TitleEdit;