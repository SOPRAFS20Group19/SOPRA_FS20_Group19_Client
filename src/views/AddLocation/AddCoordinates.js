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
  flex-direction: column;
  max-height: 93%;
  overflow: scroll;
  width: 80%;
  left: 10%;
  display: block;
  justify-content: center;
  position: absolute;
  top: 7%;
  @media only screen and (max-width: 800px){
    display: block;
    max-height: 83%;
    overflow: scroll;
    width: 100%;
    left: 0%;
  }
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
  margin-top: 15px;
  font-weight: bolder;
  font-size: 30px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  text-transform: uppercase;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 700px){
    font-size: 20px;
  }
  @media only screen and (max-width: 500px){
    font-size: 15px
  }
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

const Picture = styled.div`
  height: 110px;
  width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 3;
  margin-top: 15px;
  @media only screen and (max-width: 900px){
    font-size: 10px;
    width: 95px;
    height: 95px;
  }
  @media only screen and (max-width: 800px){
    width: 90px;
    height: 90px;
  }
  @media only screen and (max-width: 500px){
    width: 80px;
    height: 80px;
  }
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
  letter-spacing: 0.2em;
  line-height: 1.1em;
  text-transform: uppercase;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 5px;
  @media only screen and (max-width: 700px){
    font-size: 20px;
  }
  @media only screen and (max-width: 500px){
    font-size: 15px
  }
`;

const ErrorMessage = styled.div`
  font-weight: normal;
  font-size: medium;
  flex-direction: row;
  color: red;
  margin-top: 5px;
  @media only screen and (max-width: 700px){
    font-size: small;
  }
`;



const InputField = styled.input`
  &::placeholder {
    color: black;
  }
  height: 35px;
  width: 40%;
  border: 2px solid #003068;
  border-color: #66A3E0;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  text-align: center;
  @media only screen and (max-width: 700px){
    font-size: 10px;
    height: 25px;
  }
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
        return(
            <div>
                <SidebarAddLocationtoStart avatarNr={localStorage.getItem("userAvatar")}/>
            <MainContainer>
            <QuestionContainer>
                <Question>Set the coordinates:</Question>
            </QuestionContainer>
            <ImageContainer>
                <Picture>
                    <img src={this.props.getImage()} alt={this.props.getTypeAsString()} width="100%" height="100%"/>
                </Picture>
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
                    placeholder="Enter latitude here"
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
                    placeholder="Enter longitude here"
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

        </MainContainer>
            </div>)
    }
}
export default withRouter(AddCoordinates);