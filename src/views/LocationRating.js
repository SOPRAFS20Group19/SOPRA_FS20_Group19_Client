import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {Button as Button1} from "./design/Button";
import StarEmpty from "./StarEmpty.svg";
import StarFull from "./StarFilled.svg";

const Container = styled.div`
  height: 10%;
  width: 43%;
  display: flex;
  justify-content: top;
  align-items: left;
  position: absolute;
  top: 41%;
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
  width: 25%;
`;
const ButtonContainer2 = styled.div`
  justify-content: center;
  position: absolute;
  top: -5%;
  left: 28%;
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
            ratedStars:0,
        }
    }

    //saves The Rating applied to the Stars
    saveRating(){
        //Implement the save Rating Button
    }

    changeColor(number){
        this.setState({['ratedStars']: number });
    }

    render() {
        if (this.state.ratedStars == 0) {
            return (
                <Container>
                    <Text>Rate this Location:</Text>
                    <ButtonContainer2><ButtonGroup aria-label="Basic example">
                        <img src={StarEmpty} alt="Star Empty"
                             onClick={() => {
                                 this.changeColor(1);
                             }}
                        />
                        <img src={StarEmpty} alt="Star Empty"
                             onClick={() => {
                                 this.changeColor(2);
                             }}
                        />
                        <img src={StarEmpty} alt="Star Empty"
                             onClick={() => {
                                 this.changeColor(3);
                             }}
                        />
                        <img src={StarEmpty} alt="Star Empty"
                             onClick={() => {
                                 this.changeColor(4);
                             }}
                        />
                        <img src={StarEmpty} alt="Star Empty"
                             onClick={() => {
                                 this.changeColor(5);
                             }}
                        />
                    </ButtonGroup></ButtonContainer2>
                    <ButtonContainer> <Button1
                        width="100%"
                        onClick={() => {
                            this.saveRating();
                        }}>
                        Save Rating
                    </Button1>{' '}
                    </ButtonContainer>
                </Container>
            );
        } else if (this.state.ratedStars == 1){
            return (
                <Container>
                    <Text>Rate this Location:</Text>
                    <ButtonContainer2><ButtonGroup aria-label="Basic example">
                        <img src={StarFull} alt="Star Full"
                             onClick={() => {
                                 this.changeColor(0);
                             }}
                        />
                        <img src={StarEmpty} alt="Star Empty"
                             onClick={() => {
                                 this.changeColor(2);
                             }}
                        />
                        <img src={StarEmpty} alt="Star Empty"
                             onClick={() => {
                                 this.changeColor(3);
                             }}
                        />
                        <img src={StarEmpty} alt="Star Empty"
                             onClick={() => {
                                 this.changeColor(4);
                             }}
                        />
                        <img src={StarEmpty} alt="Star Empty"
                             onClick={() => {
                                 this.changeColor(5);
                             }}
                        />
                    </ButtonGroup></ButtonContainer2>
                    <ButtonContainer> <Button1
                        variant="primary"
                        width="100%"
                        onClick={() => {
                            this.saveRating();
                        }}>
                        Save Rating
                    </Button1>{' '}
                    </ButtonContainer>
                </Container>
            );
        }
        else if (this.state.ratedStars == 2){
            return (
                <Container>
                    <Text>Rate this Location:</Text>
                    <ButtonContainer2><ButtonGroup aria-label="Basic example">
                        <img src={StarFull} alt="Star Full"
                             onClick={() => {
                                 this.changeColor(1);
                             }}
                        />
                        <img src={StarFull} alt="Star Full"
                             onClick={() => {
                                 this.changeColor(0);
                             }}
                        />
                        <img src={StarEmpty} alt="Star Empty"
                             onClick={() => {
                                 this.changeColor(3);
                             }}
                        />
                        <img src={StarEmpty} alt="Star Empty"
                             onClick={() => {
                                 this.changeColor(4);
                             }}
                        />
                        <img src={StarEmpty} alt="Star Empty"
                             onClick={() => {
                                 this.changeColor(5);
                             }}
                        />
                    </ButtonGroup></ButtonContainer2>
                    <ButtonContainer> <Button1
                        variant="primary"
                        width="100%"
                        onClick={() => {
                            this.saveRating();
                        }}>
                        Save Rating
                    </Button1>{' '}
                    </ButtonContainer>
                </Container>
            );
        }
        else if (this.state.ratedStars == 3){
            return (
                <Container>
                    <Text>Rate this Location:</Text>
                    <ButtonContainer2><ButtonGroup aria-label="Basic example">
                        <img src={StarFull} alt="Star Full"
                             onClick={() => {
                                 this.changeColor(1);
                             }}
                        />
                        <img src={StarFull} alt="Star Full"
                             onClick={() => {
                                 this.changeColor(2);
                             }}
                        />
                        <img src={StarFull} alt="Star Full"
                             onClick={() => {
                                 this.changeColor(0);
                             }}
                        />
                        <img src={StarEmpty} alt="Star Empty"
                             onClick={() => {
                                 this.changeColor(4);
                             }}
                        />
                        <img src={StarEmpty} alt="Star Empty"
                             onClick={() => {
                                 this.changeColor(5);
                             }}
                        />
                    </ButtonGroup></ButtonContainer2>
                    <ButtonContainer> <Button1
                        variant="primary"
                        width="100%"
                        onClick={() => {
                            this.saveRating();
                        }}>
                        Save Rating
                    </Button1>{' '}
                    </ButtonContainer>
                </Container>
            );
        }
        else if (this.state.ratedStars == 4){
            return (
                <Container>
                    <Text>Rate this Location:</Text>
                    <ButtonContainer2><ButtonGroup aria-label="Basic example">
                        <img src={StarFull} alt="Star Full"
                             onClick={() => {
                                 this.changeColor(1);
                             }}
                        />
                        <img src={StarFull} alt="Star Full"
                             onClick={() => {
                                 this.changeColor(2);
                             }}
                        />
                        <img src={StarFull} alt="Star Full"
                             onClick={() => {
                                 this.changeColor(3);
                             }}
                        />
                        <img src={StarFull} alt="Star Full"
                             onClick={() => {
                                 this.changeColor(0);
                             }}
                        />
                        <img src={StarEmpty} alt="Star Empty"
                             onClick={() => {
                                 this.changeColor(5);
                             }}
                        />
                    </ButtonGroup></ButtonContainer2>
                    <ButtonContainer> <Button1
                        variant="primary"
                        width="100%"
                        onClick={() => {
                            this.saveRating();
                        }}>
                        Save Rating
                    </Button1>{' '}
                    </ButtonContainer>
                </Container>
            );
        }
        else{
            return (
                <Container>
                    <Text>Rate this Location:</Text>
                    <ButtonContainer2><ButtonGroup aria-label="Basic example">
                        <img src={StarFull} alt="Star Full"
                             onClick={() => {
                                 this.changeColor(1);
                             }}
                        />
                        <img src={StarFull} alt="Star Full"
                             onClick={() => {
                                 this.changeColor(2);
                             }}
                        />
                        <img src={StarFull} alt="Star Full"
                             onClick={() => {
                                 this.changeColor(3);
                             }}
                        />
                        <img src={StarFull} alt="Star Full"
                             onClick={() => {
                                 this.changeColor(4);
                             }}
                        />
                        <img src={StarFull} alt="Star Full"
                             onClick={() => {
                                 this.changeColor(5);
                             }}
                        />
                    </ButtonGroup></ButtonContainer2>
                    <ButtonContainer> <Button1
                        variant="primary"
                        width="100%"
                        onClick={() => {
                            this.saveRating();
                        }}>
                        Save Rating
                    </Button1>{' '}
                    </ButtonContainer>
                </Container>
            );
        }
    }
};

export default withRouter(LocationRating);