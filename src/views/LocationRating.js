import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Container = styled.div`
  height: 10%;
  width: 43%;
  display: flex;
  justify-content: top;
  align-items: left;
  opacity: 0.4;
  position: absolute;
  top: 43%;
  left:2%;
  flex-direction: column;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: x-large;
  position: absolute;
  top: 0%;
  left: 0%;
`;

const ButtonContainer = styled.div`
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 0%;
`;

/**
 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */

class LocationRating extends React.Component{
    constructor() {
        super();
        this.state = {
            filterExpanded: false
        }
    }
    //saves The Rating applied to the Stars
    saveRating(){
        //Next Line only there to test the Button
        this.props.history.push('/login');
    }
    render() {
        return (
            <Container>
                <Text>Rate this Location: ...</Text>
                <ButtonContainer> <Button
                    variant="primary"
                    onClick={() => {
                        this.saveRating();
                    }}>
                    Save Rating
                </Button>{' '}
                </ButtonContainer>
            </Container>
        );
    }
};

export default withRouter(LocationRating);
