import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import { Button } from '../../views/design/Button';
import { withRouter } from 'react-router-dom';
import Header from "../../views/Header";
import SidebarInfoAndAddLocation from "../../views/InformationPage/SidebarInfoAndAddLocation";
import TitleEdit from "../../views/UserInformation/TitleEdit";
import AddFountain from "../../views/AddLocation/AddFountain";
import Location from "../shared/models/Location";
import FireplaceCircle from "../../views/MapMarkers/FireplaceCircle.png"
import FountainCircle from "../../views/MapMarkers/FountainCircle.png"
import RecyclingCircle from "../../views/MapMarkers/RecyclingCircle.png"
import {ButtonForRecycling} from "../../views/design/ButtonForRecycling";
import {RoundButton} from "../../views/design/RoundButton";


const MainContainer =styled.div`
  color: black;
  flex-direction: row;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto auto;
  justify-content: center;
  grid-column-gap: 30px;
`;

const ImageContainer = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 20px;
  grid-column: 1;
  grid-row: 3;
  margin-top: 15px;
`;
const Container1 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 0.5%
  flex-direction: column;
  margin-left: 20px;
  grid-column: 1;
  grid-row: 3;
  margin-top: 15px;
`;

const Container2 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 0.5%
  flex-direction: column;
  margin-left: 20px;
  grid-column: 1;
  grid-row: 4;
  margin-top: 15px;
`;
const Container3 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 0.5%
  flex-direction: column;
  margin-left: 20px;
  grid-column: 1;
  grid-row: 6;
  margin-top: 15px;
`;
const Container4 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 0.5%
  flex-direction: column;
  margin-left: 20px;
  grid-column: 1;
  grid-row: 7;
  margin-top: 15px;
`;


const InputField = styled.input`
  &::placeholder {
    color: black;
  }
  height: 35px;
  width: 80%;
  border: 2px solid #003068;
  border-color: #66A3E0;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
`;


const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 3;
  margin-top: 15px;
  width: 100%;
`;

const ButtonContainerFountainCircle = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 1;
  margin-top: 15px;
  width: 100%;
`;

const ButtonContainerFireplaceCircle = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 2;
  margin-top: 15px;
  width: 100%;
`;

const ButtonContainerRecyclingCircle = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 3;
  margin-top: 15px;
  width: 100%;
`;

const ButtonContainerCoordinates = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 5;
  margin-top: 15px;
  width: 100%;
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: left;
  grid-column: 1;
  grid-row: 2;
  margin-top: 15px;
  width: 100%;
`;

const Question = styled.div`
  font-weight: bolder;
  font-size: 30px;
  margin-left: 30px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  margin-top: 30px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: x-large;
  flex-direction: row;
`;


// This component is responsible for the edit profile page
class AddLocation extends React.Component {
    constructor() {
        super();
        this.state = {
            locationType: null,
            latitude: null,
            longitude: null,
            baujahr: null,
            art_txt: null,
            brunnenart_txt: null
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }



    setLocationType(type){
        this.setState({locationType: type});
    }

    setToNullState(){
        this.setState({locationType: null,
            latitude: null,
            longitude: null,
            baujahr: null,
            art_txt: null,
            brunnenart_txt: null})
    }

    //returns the image to be rendered according to the type
    getImage(){
        if (this.state.locationType === 'FIREPLACE'){
            return FireplaceCircle;
        }else if (this.state.locationType === 'FOUNTAIN'){
            return FountainCircle;
        }
        return RecyclingCircle;
    }

    //returns the string to be rendered according to the type
    getTypeAsString(){
        if (this.state.locationType === 'FIREPLACE'){
            return "FIREPLACE";
        }else if (this.state.locationType === 'FOUNTAIN'){
            return "FOUNTAIN";
        }
        return "RECYCLING";
    }

    // when the save changes button is clicked, the new data is sent to the server via put request
    async saveChangesFountain() {
        try {
            const requestBody = JSON.stringify({
                locationType: "FOUNTAIN",
                longitude: this.state.longitude,
                latitude: this.state.latitude,
                baujahr: this.state.baujahr,
                art_txt: this.state.art_txt,
                brunnenart_txt: this.state.brunennart_txt
            });

            const url = '/locations';
            //api.post(url, requestBody);
            const response = await api.post(url, requestBody);
            const location = new Location(response.data);
            const locationUrl = '/map/informationpage/' + location.id;

            // after successfully saving the changes, the user is redirected to his profile page
            this.props.history.push(locationUrl);
        } catch (e) {
            alert(`Something went wrong while adding the new location: \n${handleError(e)}`);
        }
    }

    // renders the page
    render() {
        return (
            <MainContainer>
            <TitleEdit/>
            <SidebarInfoAndAddLocation/>
                {!this.state.locationType ?
                    (<MainContainer>
                        <QuestionContainer>
                <Question>What location type do you want to add?</Question>
            </QuestionContainer>
                <ButtonContainer>
                    <ButtonContainerFountainCircle>
                    <RoundButton>
                        <img src={FountainCircle} alt={"FOUNTAIN"} width="96px" height="96px"
                                             onClick={() => {this.setLocationType("FOUNTAIN");}}/>
                    </RoundButton>
                    </ButtonContainerFountainCircle>
                    <ButtonContainerFireplaceCircle>
                    <RoundButton>
                        <img src={FireplaceCircle} alt={"FIREPLACE"} width="96px" height="96px"
                             onClick={() => {this.setLocationType("FIREPLACE");}}/>
                    </RoundButton>
                    </ButtonContainerFireplaceCircle>
                    <ButtonContainerRecyclingCircle>
                    <RoundButton>
                        <img src={RecyclingCircle} alt={"RECYCLING_STATION"} width="96px" height="96px"
                             onClick={() => {this.setLocationType("RECYCLING_STATION");}}/>
                    </RoundButton>
                    </ButtonContainerRecyclingCircle>
                </ButtonContainer>

                    </MainContainer>)
                    : (!this.state.latitude && !this.state.longitude ? (<MainContainer>
                        <QuestionContainer>
                            <Question>Set the coordinates: </Question>
                        </QuestionContainer>
                        <ImageContainer>
                        <img src={this.getImage()} alt={this.getTypeAsString()} width="96px" height="96px"/>
                        </ImageContainer>
                        <Container2>
                            <Title>Latitude: </Title>
                            <InputField
                                placeholder="enter latitude here"
                                onChange={e => {
                                    this.handleInputChange('latitude', e.target.value);
                                }}
                            />
                        </Container2>
                        <Container3>
                            <Title>Longitude: </Title>
                            <InputField
                                placeholder="enter longitude here"
                                onChange={e => {
                                    this.handleInputChange('longitude', e.target.value);
                                }}
                            />
                        </Container3>
                        <ButtonContainerCoordinates>
                            <Button
                                disabled={this.state.latitude || this.state.longitude}
                                onClick={() => {this.getLocation();}}>Get current Coordinates</Button>
                        </ButtonContainerCoordinates>
                    </MainContainer>) : (this.state.locationType==="FOUNTAIN" ?
                        (<MainContainer>
                            <Container1>
                                <Title>Baujahr (optional): </Title>
                                <InputField
                                    placeholder="enter Baujahr here"
                                    onChange={e => {
                                        this.handleInputChange('baujahr', e.target.value);
                                    }}
                                />
                            </Container1>
                            <Container2>
                                <Title>Trinkwasser (optional)? </Title>
                                <ButtonContainer>
                                    <Button
                                        onClick={() => {this.setState({art_txt: "Trinkwasserbrunnen"});}}>Yes
                                    </Button>
                                </ButtonContainer>
                                <ButtonContainer>
                                    <Button
                                        onClick={() => {this.setState({art_txt: "Kein Trinkwasser"});}}>No
                                    </Button>
                                </ButtonContainer>
                            </Container2>
                            <Container3>
                                <Title>Öffentlich (optional)? </Title>
                                <ButtonContainer>
                                    <Button
                                        onClick={() => {this.setState({brunnenart_txt: "öffentlicher Brunnen"});}}>Yes
                                    </Button>
                                </ButtonContainer>
                                <ButtonContainer>
                                    <Button
                                        onClick={() => {this.setState({brunennart_txt: "privater Brunnen"});}}>No
                                    </Button>
                                </ButtonContainer>
                            </Container3>
                            <Container4>
                                <ButtonContainer>
                                    <Button
                                        onClick={() => {this.saveChangesFountain()}}>Save Location
                                    </Button>
                                </ButtonContainer>
                                <ButtonContainer>
                                    <Button
                                        onClick={() => {this.setToNullState();}}>Cancel
                                    </Button>
                                </ButtonContainer>
                            </Container4>
                        </MainContainer>) :
                        (<MainContainer></MainContainer>)))}

            </MainContainer>
        );
    }



    // when the save changes button is clicked, the new data is sent to the server via put request
    saveChanges() {
        try {
            const requestBody = JSON.stringify({
                username: this.state.username,
                birthDate: this.state.birthDate
            });

            const url = '/users/' + this.state.loggedInUserId;
            api.put(url, requestBody);

            // after successfully saving the changes, the user is redirected to his profile page
            this.props.history.push('/game/dashboard/user');
        } catch (e) {
            alert(`Something went wrong while editing the profile: \n${handleError(e)}`);
        }
    }

    // this method handles the given user input and changes the component's state
    handleInputChange(key, value) {
        // Example: if the key is username, this statement is the equivalent to the following one:
        // this.setState({'username': value});
        this.setState({[key]: value});
    }

    getCoordinates(position) {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    handleLocationError(error){
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert ("User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert ("Location information is unavailable.")
                break;
            case error.TIMEOUT:
                alert ("The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                alert ("An unknown error occurred.")
                break;
        }
    }
}

export default withRouter(AddLocation);
