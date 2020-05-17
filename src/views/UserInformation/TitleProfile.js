import React from "react";
import styled from "styled-components";
import AboutUsQuestion1 from "../AboutUs/AboutUsQuestion1.png";
import {withRouter} from "react-router-dom";
import {RoundButton} from "../variables/RoundButton";


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
  grid-column: 1 / span 3;
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
  @media only screen and (max-width: 700px){
    font-size: 30px
  }
  @media only screen and (max-width: 500px){
    font-size: 20px
  }

`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  @media only screen and (max-width: 500px){
    margin-top: 0px;
  }
`;


const AboutUsButton = styled.div`
  &:hover {
    transform: translateY(-2px);
  }
  padding: 0px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 10px;
  text-align: center;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  transition: all 0.3s ease;
    @media only screen and (max-width: 700px){
    width: 70px;
    height: 70px;
    &:hover {
    transform: translateY(0px);
  }
  @media only screen and (max-width: 500px){
    width: 60px;
    height: 60px;
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

class TitleProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container height={this.props.height}>
                <Title>Know your city</Title>
                <ButtonContainer>
                    <AboutUsButton
                        onClick={() => {
                            this.props.history.push(`/aboutus`);
                        }}
                    >
                        <img src={AboutUsQuestion1} width="40%" heigth="40%"/>
                    </AboutUsButton>
                </ButtonContainer>
            </Container>
        );
    }
}

/**
 * Don't forget to export your component!
 */
export default withRouter(TitleProfile);