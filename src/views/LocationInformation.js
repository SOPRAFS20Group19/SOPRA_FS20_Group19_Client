import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';


const Container = styled.div`
  height: 25%;
  width: 43%;
  display: flex;
  justify-content: top;
  align-items: left;
  opacity: 0.4;
  position: absolute;
  top: 15%;
  left:2%;
  flex-direction: column;
`;

const Address = styled.div`
  font-weight: bold;
  font-size: x-large;
  position: absolute;
  top: 0%;
  left: 0%;
`;

const ID = styled.div`
  font-weight: bold;
  font-size: x-large;
  position: absolute;
  top: 25%;
  left:0%;
`;

const AdditionalInformation = styled.div`
  font-weight: bold;
  font-size: x-large;
  position: absolute;
  top: 50%;
  left:0%;
`;

const Coordinates = styled.div`
  font-weight: bold;
  font-size: x-large;
  position: absolute;
  top: 75%;
  left:0%;
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
    constructor() {
        super();
        this.state = {
            filterExpanded: false
        }
    }
    render() {
        return (
            <Container>
                <Address>Address: ...</Address> <ID>ID: ...</ID>
                <AdditionalInformation>Additional Information: ...</AdditionalInformation> <Coordinates>Coordinates:
                ...</Coordinates>
            </Container>
        );
    }
};

export default withRouter(LocationInformation);
