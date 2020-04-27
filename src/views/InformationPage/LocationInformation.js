import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormControl from "react-bootstrap/FormControl";
import Player from "../Player";
import {Button} from "../design/Button";
import {Spinner} from "../design/Spinner";


const Container = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 0.5%
  flex-direction: column;
  margin-left: 20px;
  grid-column: 1;
  grid-row: 2 / span 3;
`;

const ID = styled.div`
  font-weight: bold;
  font-size: x-large;
  margin-bottom: 0.25%;
  flex-direction: row;
`;

const Address = styled.div`
  font-weight: bold;
  font-size: x-large;
  margin-bottom: 0.25%;
  flex-direction: row;
`;

const AdditionalInformation = styled.div`
  font-weight: bold;
  font-size: x-large;
  margin-bottom: 0.25%;
  flex-direction: row;
`;

const Coordinates = styled.div`
  font-weight: bold;
  font-size: x-large;
  margin-bottom: 0.25%;
  flex-direction: row;
`;

const Text = styled.div`
  font-weight: normal;
  font-size: large;
  margin-left: 0;
  width: 100%;
  text-align: left;
  list-style-type: none;
`;


/**
 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */

class LocationInformation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <Container>
                {!this.props.location ? (<Spinner/>) :(
                    <div>
                        <ID>ID: <Text>{this.props.id}</Text> </ID>
                        <Address>Address: <Text>{this.props.address}</Text></Address>
                        <AdditionalInformation>Additional Information:
                            <Text>{this.props.information}</Text>
                        </AdditionalInformation>
                        <Coordinates>Coordinates: <Text>{this.props.latitude}, {this.props.longitude}</Text></Coordinates>
                    </div>
                    )}
            </Container>
        );
    }
}

export default withRouter(LocationInformation);
