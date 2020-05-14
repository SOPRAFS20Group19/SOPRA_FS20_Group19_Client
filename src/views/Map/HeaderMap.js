import React from "react";
import styled from "styled-components";
import { ReactLogo } from "../variables/ReactLogo";

/**
 * Using styled-components you can visual HTML primitives and use props with it!
 * The idea behind this external package, it's to have a better structure and overview for your HTML and CSS
 * Using styled-components, you can have styling conditions using the following syntax: ${props => ...}
 * https://www.styled-components.com/
 */
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
  @media only screen and (max-width: 800px){
    width: 100%;
    left: 0%;
    top: 95%;
    height: 5%;
    background: white;
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
/**
 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */
const HeaderMap = props => {
  return (
    <Container height={props.height}>
      <Title>Know your city</Title>
    </Container>
  );
};

/**
 * Don't forget to export your component!
 */
export default HeaderMap;
