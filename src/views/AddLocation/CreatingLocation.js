import React from 'react';
import {Button} from "../variables/Button";
import Spinner from "react-bootstrap/Spinner";
import { withRouter } from 'react-router-dom';
import styled from "styled-components";


const MainContainer =styled.div`
  color: black;
  flex-direction: row;
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto auto;
  justify-content: center;
`;
const ImageContainer = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 3;
  margin-top: 15px;
`;

const Container2 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 4;
  margin-top: 15px;
`;
const Container3 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 6;
  margin-top: 15px;
`;

const ButtonContainerSpinnerAddLocation = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 4;
  margin-top: 15px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: x-large;
  flex-direction: row;
`;

class CreatingLocation extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(<MainContainer>
            <ImageContainer>
                <img src={this.props.getImage()} alt={this.props.getTypeAsString()} width="96px" height="96px"/>
            </ImageContainer>
            <Container2>
                <Title>Thank you!</Title>
            </Container2>
            <Container3>
                <ButtonContainerSpinnerAddLocation>
                    <Button variant="primary" disabled
                            width="200px">
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Creating...
                    </Button>
                </ButtonContainerSpinnerAddLocation>
            </Container3>
        </MainContainer>)
    }
}

export default withRouter(CreatingLocation);