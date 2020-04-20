import React from "react";
import styled from "styled-components";

/**
 * Using styled-components you can visual HTML primitives and use props with it!
 * The idea behind this external package, it's to have a better structure and overview for your HTML and CSS
 * Using styled-components, you can have styling conditions using the following syntax: ${props => ...}
 * https://www.styled-components.com/
 */

/**
 * This header is used for the registration and the login page.
 * There the header has to be centered to fit all the screen sizes.
 */

const Container = styled.div`
  display: flex;
  flex-direction: row;
  grid-column: 1 / span 2;
  grid-row: 1;
  margin-top: 20px;
  margin-left: 20px;
  align-content: center
  justify-content: center;
  position: center;;
`;

const Title = styled.h1`
  font-weight: 900;
  color: #003068;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  opacity: 1;
`;
/**
 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */
const TitleProfile = props => {
    return (
        <Container height={props.height}>
            <Title>Know your city</Title>
        </Container>
    );
};

/**
 * Don't forget to export your component!
 */
export default TitleProfile;