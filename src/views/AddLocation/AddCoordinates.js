import React from 'react';
import SidebarAddLocationtoStart from "./SidebarAddLocationtoStart";
import {Button} from "../variables/Button";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import FireplaceCircle from "../MapMarkers/FireplaceCircle.png";
import FountainCircle from "../MapMarkers/FountainCircle.png";
import RecyclingCircle from "../MapMarkers/RecyclingCircle.png";
import ToiletCircle from "../MapMarkers/PublicToiletCircle.png";
import TableTennisCircle from "../MapMarkers/PingPongCircle.png";
import BenchCircle from "../MapMarkers/BenchCircle.png";


const MainContainer =styled.div`
  color: black;
  flex-direction: row;
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto auto;
  justify-content: center;
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 2;
  margin-top: 15px;
  width: 100%;
`;

const Question = styled.div`
  font-weight: bolder;
  font-size: 30px;
  margin-left: 0px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  margin-top: 15px;
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
const Container4 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 7;
  margin-top: 15px;
`;

const Container5 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 8;
  margin-top: 15px;
`;

const ButtonContainerCoordinatesManually = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 8;
  margin-top: 15px;
  width: 100%;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: x-large;
  flex-direction: row;
`;

const ErrorMessage = styled.div`
  font-weight: normal;
  font-size: medium;
  flex-direction: row;
  color: red;
  margin-top: 5px;
`;



const InputField = styled.input`
  &::placeholder {
    color: black;
  }
  height: 35px;
  width: 54%;
  border: 2px solid #003068;
  border-color: #66A3E0;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
`;

const ButtonContainerCoordinates = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 4;
  margin-top: 15px;
  width: 100%;
`;

function ValidationMessage(props) {
    if (!props.valid) {
        return(
            <ErrorMessage className='error-msg'>{props.message}</ErrorMessage>
        )
    }
    return null;
}

class AddCoordinates extends React.Component{
    constructor(props) {
        super(props);
    }


    render(){
        return(<MainContainer>
            <SidebarAddLocationtoStart avatarNr={localStorage.getItem("userAvatar")}/>
            <QuestionContainer>
                <Question>Set the coordinates:</Question>
            </QuestionContainer>
            <ImageContainer>
                <img src={this.props.getImage()} alt={this.props.getTypeAsString()} width="96px" height="96px"/>
            </ImageContainer>
            <ButtonContainerCoordinates>
                <Button
                    hidden={this.props.latitude || this.props.longitude}
                    onClick={() => {this.props.getLocationAddLocation();}}>Get current Coordinates</Button>
                <ValidationMessage valid={this.props.coordinatesValid} message={this.props.errorMsgCoordinates}/>
            </ButtonContainerCoordinates>
            <Container3>
                <Title>Latitude: </Title>
                <InputField
                    placeholder="enter latitude here"
                    onChange={e => {
                        this.props.updateLatitude(e.target.value);
                    }}
                    onKeyPress={e => {if (e.key === 'Enter'){
                        if (this.props.coordinatesValid){
                            this.props.setCoordinatesSuccessfully();
                        }
                    }}}
                />
                <ValidationMessage valid={this.props.latitudeValid} message={this.props.errorMsg.latitude}/>
            </Container3>
            <Container4>
                <Title>Longitude: </Title>
                <InputField
                    placeholder="enter longitude here"
                    onChange={e => {
                        this.props.updateLongitude(e.target.value);
                    }}
                    onKeyPress={e => {if (e.key === 'Enter'){
                        if (this.props.coordinatesValid){
                            this.props.setCoordinatesSuccessfully();
                        }
                    }}}
                />
                <ValidationMessage valid={this.props.longitudeValid} message={this.props.errorMsg.longitude}/>
            </Container4>
            <ButtonContainerCoordinatesManually>
                <Button
                    disabled={!this.props.coordinatesValid}
                    onClick={() => {this.props.setCoordinatesSuccessfully();}}>Continue</Button>
            </ButtonContainerCoordinatesManually>

        </MainContainer>)
    }
}
export default withRouter(AddCoordinates);