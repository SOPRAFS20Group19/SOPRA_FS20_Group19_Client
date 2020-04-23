import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {Button as Button1} from "../design/Button";
import StarEmpty from "../StarEmpty.svg";
import StarFull from "../StarFilled.svg";
import {api, handleError} from "../../helpers/api";
import Location from "../../components/shared/models/Location";

const Container = styled.div`
  height: 10%;
  width: 50%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  align-items: center;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 30px;
  padding-left: 0.5%;
  grid-column: 1;
  grid-row: 5;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: x-large;
  margin-right: 20px;
  grid-column: 1;
  grid-row: 1;
`;

const ButtonContainer = styled.div`
  justify-content: left;
  width: 50%;
  margin-top: 10px;
  flex-direction: column;
  grid-column: 1 / span 2;
  grid-row: 2;
`;
const ButtonContainer2 = styled.div`
  justify-content: center;
  grid-column: 2;
  grid-row: 1;
`;

const Text2 = styled.div`
  font-weight: bold;
  font-size: x-large;
  grid-column: 1 / span 2;
  grid-row: 3;
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
    constructor(props) {
        super(props);
        this.state = {
            ratedStars:0,
            actualRating:0,
        }
        this.showRating();
    }

    //saves The Rating applied to the Stars
    async saveRating(){
        //Implement the save Rating Button
        try {
            const url = '/locations/rating/' + localStorage.getItem('userId') + '/' + this.props.locationId + "/" + this.state.ratedStars;
            await api.put(url);
            window.location.reload();
        } catch (e) {
            alert(`Something went wrong while updating the rating: \n${handleError(e)}`);
        }
    }

    async showRating() {
        try {
            const url = '/locations/rating/' + localStorage.getItem('userId') + '/' + this.props.locationId;
            const response = await api.get(url);
            const rating = response.data;
            this.setState({['actualRating']: rating});
        } catch (e) {
            alert(`Something went wrong while getting the rating: \n${handleError(e)}`);
        }
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
                    <Text2>
                        Current Rating: {this.state.actualRating}
                    </Text2>
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
                    <Text2>
                        Current Rating: {this.state.actualRating}
                    </Text2>
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
                    <Text2>
                        Current Rating: {this.state.actualRating}
                    </Text2>
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
                    <Text2>
                        Current Rating: {this.state.actualRating}
                    </Text2>
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
                    <Text2>
                        Current Rating: {this.state.actualRating}
                    </Text2>
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
                    <Text2>
                        Current Rating: {this.state.actualRating}
                    </Text2>
                </Container>
            );
        }
    }
};

export default withRouter(LocationRating);
