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
import {ButtonYesNo} from "../../views/AddLocation/ButtonYesNo"
import Spinner from "react-bootstrap/Spinner";


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
  margin-left: 0px;
  grid-column: 1;
  grid-row: 3;
  margin-top: 15px;
`;
const Container1 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
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
  justify-content: top;
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
  justify-content: top;
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
  justify-content: top;
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
  justify-content: top;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 8;
  margin-top: 15px;
`;

const Container6 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 9;
  margin-top: 15px;
`;
const Container7 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 10;
  margin-top: 15px;
`;

const Container8 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 11;
  margin-top: 15px;
`;

const Container9 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 12;
  margin-top: 15px;
`;

const Container10 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 13;
  margin-top: 15px;
`;

const Container11 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 14;
  margin-top: 15px;
`;

const Container12 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 15;
  margin-top: 15px;
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

const InputFieldBaujahr = styled.input`
  &::placeholder {
    color: black;
  }
  height: 35px;
  width: 35%;
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

const ButtonContainerSpinnerAddLocation = styled.div`
height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 4;
  margin-top: 15px;
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
  grid-row: 4;
  margin-top: 15px;
  width: 100%;
`;

const ButtonContainerCoordinatesManually = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 8;
  margin-top: 15px;
  width: 100%;
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
const Title = styled.div`
  font-weight: bold;
  font-size: x-large;
  flex-direction: row;
`;

const InfoSchrift = styled.div`
  font-weight: normal;
  font-size: large;
  flex-direction: row;
`;


// This component is responsible for the edit profile page
class AddLocation extends React.Component {
    constructor() {
        super();
        this.state = {
            savingLocation: null,
            setCoordinates: null,
            locationType: null,
            latitude: null,
            longitude: null,
            baujahr: null,
            art_txt: null,
            brunnenart_txt: null,
            adresse: null,
            plz: null,
            ort: null,
            metall: null,
            glas: null,
            oel: null,
            metall_definite: null,
            glas_definite: null,
            oel_definite: null,
            holz: null,
            rost: null,
            tisch: null,
            trinkwasser: null,
            abfall: null,
            parkplatz: null,
            baden: null,
            hunde: null,
            kinderwagen: null,
            ausstattung: {
            holz_string: "",
            rost_string: "",
            tisch_string: "",
            trinkwasser_string: "",
            abfall_string: "",
            parkplatz_string: "",
            baden_string: "",
            hunde_string: "",
            kinderwagen_string: ""}
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }



    setLocationType(type){
        this.setState({locationType: type});
    }

    setToNullState(){
        this.setState({
            setCoordinates: null,
            locationType: null,
            latitude: null,
            longitude: null,
            baujahr: null,
            art_txt: null,
            brunnenart_txt: null,
            adresse: null,
            plz: null,
            ort: null,
            metall: null,
            glas: null,
            oel: null,
            holz: null,
            rost: null,
            tisch: null,
            trinkwasser: null,
            abfall: null,
            parkplatz: null,
            baden: null,
            hunde: null,
            kinderwagen: null})
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
    async saveChangesFireplace() {
        try {
            this.setState({savingLocation: true})
            if(this.state.holz==="X"){
                const newAusstattung = {...this.state.ausstattung};
                newAusstattung["holz_string"] = "Holz, ";
                this.setState({ausstattung: newAusstattung});
            }
            if(this.state.rost==="X"){
                const newAusstattung = {...this.state.ausstattung};
                newAusstattung["rost_string"] = "Rost, ";
                this.setState({ausstattung: newAusstattung});
            }

            const requestBody = JSON.stringify({
                locationType: "FIREPLACE",
                longitude: this.state.longitude,
                latitude: this.state.latitude,
                ausstattung: this.state.ausstattung.holz_string + this.state.ausstattung.rost_string
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

    // when the save changes button is clicked, the new data is sent to the server via put request
    async saveChangesRecycling() {
        try {
            this.setState({savingLocation: true})
            if (this.state.glas==="X"){
                this.state.glas_definite = "X";
            }
            if (this.state.oel==="X"){
                this.state.oel_definite = "X";
            }
            if (this.state.metall==="X"){
                this.state.metall_definite = "X";
            }

            const requestBody = JSON.stringify({
                locationType: "RECYCLING_STATION",
                longitude: this.state.longitude,
                latitude: this.state.latitude,
                adresse: this.state.adresse,
                plz: this.state.plz,
                ort: this.state.ort,
                metall: this.state.metall_definite,
                glas: this.state.glas_definite,
                oel: this.state.oel_definite
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

    // when the save changes button is clicked, the new data is sent to the server via put request
    async saveChangesFountain() {
        try {
            this.setState({savingLocation: true})
            const requestBody = JSON.stringify({
                locationType: "FOUNTAIN",
                longitude: this.state.longitude,
                latitude: this.state.latitude,
                baujahr: this.state.baujahr,
                art_txt: this.state.art_txt,
                brunnenart_txt: this.state.brunnenart_txt
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

    setCoordinatesSuccessfully(){
        this.setState({setCoordinates: true})
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
                    : (!this.state.setCoordinates ? (<MainContainer>
                        <QuestionContainer>
                            <Question>Set the coordinates:</Question>
                        </QuestionContainer>
                        <ImageContainer>
                        <img src={this.getImage()} alt={this.getTypeAsString()} width="96px" height="96px"/>
                        </ImageContainer>
                        <ButtonContainerCoordinates>
                            <Button
                                disabled={this.state.latitude || this.state.longitude}
                                onClick={() => {this.getLocation();
                                this.setCoordinatesSuccessfully();}}>Get current Coordinates</Button>
                        </ButtonContainerCoordinates>
                        <Container3>
                            <Title>Latitude: </Title>
                            <InputField
                                placeholder="enter latitude here"
                                onChange={e => {
                                    this.handleInputChange('latitude', e.target.value);
                                }}
                            />
                        </Container3>
                        <Container4>
                            <Title>Longitude: </Title>
                            <InputField
                                placeholder="enter longitude here"
                                onChange={e => {
                                    this.handleInputChange('longitude', e.target.value);
                                }}
                            />
                        </Container4>
                        <ButtonContainerCoordinatesManually>
                            <Button
                                disabled={!this.state.latitude || !this.state.longitude}
                                onClick={() => {this.setCoordinatesSuccessfully();}}>Set coordinates manually</Button>
                        </ButtonContainerCoordinatesManually>

                    </MainContainer>) : (this.state.locationType==="FOUNTAIN" ?
                        (this.state.savingLocation ? (
                            <MainContainer>
                            <ImageContainer>
                                <img src={this.getImage()} alt={this.getTypeAsString()} width="96px" height="96px"/>
                            </ImageContainer>
                            <Container2>
                                <Title>Thank's!</Title>
                            </Container2>
                            <Container3>
                                <ButtonContainerSpinnerAddLocation>
                                    <Button variant="primary" disabled
                                    width="100%">
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
                        </MainContainer>) : (<MainContainer>
                            <QuestionContainer>
                                <Question>Location information: </Question>
                            </QuestionContainer>
                            <ImageContainer>
                                <img src={this.getImage()} alt={this.getTypeAsString()} width="96px" height="96px"/>
                            </ImageContainer>
                            <Container2>
                                <Title>Coordinates</Title>
                                {!this.state.latitude && !this.state.longitude ? (<Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>) : (
                                    <InfoSchrift>{this.state.latitude}, {this.state.longitude}</InfoSchrift>)}
                            </Container2>
                            <Container3>
                                <Title>Baujahr (optional): </Title>
                                <InputFieldBaujahr
                                    placeholder="enter Baujahr here"
                                    onChange={e => {
                                        this.handleInputChange('baujahr', e.target.value);
                                    }}
                                />
                            </Container3>
                            <Container4>
                                <Title>Trinkwasser (optional)? </Title>
                                <ButtonContainer>
                                    <ButtonYesNo
                                        disabled={this.state.art_txt === "Trinkwasserbrunnen"}
                                        onClick={() => {this.setState({art_txt: "Trinkwasserbrunnen"});}}>Yes
                                    </ButtonYesNo>
                                    <ButtonYesNo
                                        disabled={this.state.art_txt === "Kein Trinkwasser"}
                                        onClick={() => {this.setState({art_txt: "Kein Trinkwasser"});}}>No
                                    </ButtonYesNo>
                                </ButtonContainer>
                            </Container4>
                            <Container5>
                                <Title>Öffentlich (optional)? </Title>
                                <ButtonContainer>
                                    <Button
                                        disabled={this.state.brunnenart_txt === "öffentlicher Brunnen"}
                                        onClick={() => {this.setState({brunnenart_txt: "öffentlicher Brunnen"});}}>Yes
                                    </Button>
                                    <Button
                                        disabled={this.state.brunnenart_txt === "privater Brunnen"}
                                        onClick={() => {this.setState({brunnenart_txt: "privater Brunnen"});}}>No
                                    </Button>
                                </ButtonContainer>
                            </Container5>
                            <Container6>
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
                            </Container6>
                        </MainContainer>)) :
                        (this.state.locationType==="FIREPLACE" ? (this.state.savingLocation ? (<MainContainer>
                                <ImageContainer>
                                    <img src={this.getImage()} alt={this.getTypeAsString()} width="96px" height="96px"/>
                                </ImageContainer>
                                <Container2>
                                    <Title>Thank's!</Title>
                                </Container2>
                                <Container3>
                                    <ButtonContainerSpinnerAddLocation>
                                        <Button variant="primary" disabled
                                                width="100%">
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
                            </MainContainer>) : (
                            <MainContainer>
                                <QuestionContainer>
                                    <Question>Location information: </Question>
                                </QuestionContainer>
                                <ImageContainer>
                                    <img src={this.getImage()} alt={this.getTypeAsString()} width="96px" height="96px"/>
                                </ImageContainer>
                                <Container2>
                                    <Title>Coordinates</Title>
                                    {!this.state.latitude && !this.state.longitude ? (<Spinner animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>) : (
                                    <InfoSchrift>{this.state.latitude}, {this.state.longitude}</InfoSchrift>)}
                                </Container2>
                                <Container3>
                                    <Title>Holz vorhanden? </Title>
                                    <ButtonContainer>
                                        <ButtonYesNo
                                            disabled={this.state.holz === "X"}
                                            onClick={() => {this.setState({holz: "X"});}}>Yes
                                        </ButtonYesNo>
                                        <ButtonYesNo
                                            disabled={this.state.holz === "Y"}
                                            onClick={() => {this.setState({holz: "Y"});}}>No
                                        </ButtonYesNo>
                                    </ButtonContainer>
                                </Container3>
                                <Container4>
                                    <Title>Grillrost vorhanden? </Title>
                                    <ButtonContainer>
                                        <ButtonYesNo
                                            disabled={this.state.rost === "X"}
                                            onClick={() => {this.setState({rost: "X"});}}>Yes
                                        </ButtonYesNo>
                                        <ButtonYesNo
                                            disabled={this.state.rost === "Y"}
                                            onClick={() => {this.setState({rost: "Y"});}}>No
                                        </ButtonYesNo>
                                    </ButtonContainer>
                                </Container4>
                                <Container5>
                                    <Title>Esstisch vorhanden? </Title>
                                    <ButtonContainer>
                                        <ButtonYesNo
                                            disabled={this.state.tisch === "X"}
                                            onClick={() => {this.setState({tisch: "X"});}}>Yes
                                        </ButtonYesNo>
                                        <ButtonYesNo
                                            disabled={this.state.tisch === "Y"}
                                            onClick={() => {this.setState({tisch: "Y"});}}>No
                                        </ButtonYesNo>
                                    </ButtonContainer>
                                </Container5>
                                <Container6>
                                    <Title>Trinkwasser vorhanden? </Title>
                                    <ButtonContainer>
                                        <ButtonYesNo
                                            disabled={this.state.trinkwasser === "X"}
                                            onClick={() => {this.setState({trinkwasser: "X"});}}>Yes
                                        </ButtonYesNo>
                                        <ButtonYesNo
                                            disabled={this.state.trinkwasser === "Y"}
                                            onClick={() => {this.setState({trinkwasser: "Y"});}}>No
                                        </ButtonYesNo>
                                    </ButtonContainer>
                                </Container6>
                                <Container7>
                                    <Title>Abfall-Eimer vorhanden? </Title>
                                    <ButtonContainer>
                                        <ButtonYesNo
                                            disabled={this.state.abfall === "X"}
                                            onClick={() => {this.setState({abfall: "X"});}}>Yes
                                        </ButtonYesNo>
                                        <ButtonYesNo
                                            disabled={this.state.abfall === "Y"}
                                            onClick={() => {this.setState({abfall: "Y"});}}>No
                                        </ButtonYesNo>
                                    </ButtonContainer>
                                </Container7>
                                <Container8>
                                    <Title>Parkplatz vorhanden? </Title>
                                    <ButtonContainer>
                                        <ButtonYesNo
                                            disabled={this.state.parkplatz === "X"}
                                            onClick={() => {this.setState({parkplatz: "X"});}}>Yes
                                        </ButtonYesNo>
                                        <ButtonYesNo
                                            disabled={this.state.parkplatz === "Y"}
                                            onClick={() => {this.setState({parkplatz: "Y"});}}>No
                                        </ButtonYesNo>
                                    </ButtonContainer>
                                </Container8>
                                <Container9>
                                    <Title>Schwimm-Möglichkeit vorhanden? </Title>
                                    <ButtonContainer>
                                        <ButtonYesNo
                                            disabled={this.state.baden === "X"}
                                            onClick={() => {this.setState({baden: "X"});}}>Yes
                                        </ButtonYesNo>
                                        <ButtonYesNo
                                            disabled={this.state.baden === "Y"}
                                            onClick={() => {this.setState({baden: "Y"});}}>No
                                        </ButtonYesNo>
                                    </ButtonContainer>
                                </Container9>
                                <Container10>
                                    <Title>Hunde erlaubt? </Title>
                                    <ButtonContainer>
                                        <ButtonYesNo
                                            disabled={this.state.hunde === "X"}
                                            onClick={() => {this.setState({hunde: "X"});}}>Yes
                                        </ButtonYesNo>
                                        <ButtonYesNo
                                            disabled={this.state.hunde === "Y"}
                                            onClick={() => {this.setState({hunde: "Y"});}}>No
                                        </ButtonYesNo>
                                    </ButtonContainer>
                                </Container10>
                                <Container11>
                                    <Title>Kinderwagen-freundlich? </Title>
                                    <ButtonContainer>
                                        <ButtonYesNo
                                            disabled={this.state.kinderwagen === "X"}
                                            onClick={() => {this.setState({kinderwagen: "X"});}}>Yes
                                        </ButtonYesNo>
                                        <ButtonYesNo
                                            disabled={this.state.kinderwagen === "Y"}
                                            onClick={() => {this.setState({kinderwagen: "Y"});}}>No
                                        </ButtonYesNo>
                                    </ButtonContainer>
                                </Container11>
                                <Container12>
                                    <ButtonContainer>
                                        <Button
                                            disabled={!this.state.holz || !this.state.rost || !this.state.tisch || !this.state.trinkwasser || !this.state.abfall || !this.state.parkplatz || !this.state.baden || !this.state.hunde || !this.state.kinderwagen}
                                            onClick={() => {this.saveChangesFireplace()}}>Save Location
                                        </Button>
                                    </ButtonContainer>
                                    <ButtonContainer>
                                        <Button
                                            onClick={() => {this.setToNullState();}}>Cancel
                                        </Button>
                                    </ButtonContainer>
                                </Container12>
                        </MainContainer>))
                            : (this.state.savingLocation ? (<MainContainer>
                                <ImageContainer>
                                    <img src={this.getImage()} alt={this.getTypeAsString()} width="96px" height="96px"/>
                                </ImageContainer>
                                <Container2>
                                    <Title>Thank's!</Title>
                                </Container2>
                                <Container3>
                                    <ButtonContainerSpinnerAddLocation>
                                        <Button variant="primary" disabled
                                                width="100%">
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
                            </MainContainer>) : (
                                <MainContainer>
                                <QuestionContainer>
                                    <Question>Location information: </Question>
                                </QuestionContainer>
                                <ImageContainer>
                                    <img src={this.getImage()} alt={this.getTypeAsString()} width="96px" height="96px"/>
                                </ImageContainer>
                                <Container2>
                                    <Title>Coordinates</Title>
                                    {!this.state.latitude && !this.state.longitude ? (<Spinner animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>) : (
                                        <InfoSchrift>{this.state.latitude}, {this.state.longitude}</InfoSchrift>)}
                                </Container2>
                                <Container3>
                                    <Title>Adresse: </Title>
                                    <InputFieldBaujahr
                                        placeholder="enter street here"
                                        onChange={e => {
                                            this.handleInputChange('adresse', e.target.value);
                                        }}
                                    />
                                </Container3>
                                <Container4>
                                    <Title>PLZ: </Title>
                                    <InputFieldBaujahr
                                        placeholder="enter plz here"
                                        onChange={e => {
                                            this.handleInputChange('plz', e.target.value);
                                        }}
                                    />
                                </Container4>
                                <Container5>
                                    <Title>Ort: </Title>
                                    <InputFieldBaujahr
                                        placeholder="enter town here"
                                        onChange={e => {
                                            this.handleInputChange('ort', e.target.value);
                                        }}
                                    />
                                </Container5>
                                <Container6>
                                    <Title>Metall-Entsorgung? </Title>
                                    <ButtonContainer>
                                        <Button
                                            disabled={this.state.metall === "X"}
                                            onClick={() => {this.setState({metall: "X"});}}>Yes
                                        </Button>
                                        <Button
                                            disabled={this.state.metall === "Y"}
                                            onClick={() => {this.setState({metall: "Y"});}}>No
                                        </Button>
                                    </ButtonContainer>
                                </Container6>
                                <Container7>
                                    <Title>Glas-Entsorgung? </Title>
                                    <ButtonContainer>
                                        <Button
                                            disabled={this.state.glas === "X"}
                                            onClick={() => {this.setState({glas: "X"});}}>Yes
                                        </Button>
                                        <Button
                                            disabled={this.state.glas === "Y"}
                                            onClick={() => {this.setState({glas: "Y"});}}>No
                                        </Button>
                                    </ButtonContainer>
                                </Container7>
                                <Container8>
                                    <Title>Oel-Entsorgung? </Title>
                                    <ButtonContainer>
                                        <Button
                                            disabled={this.state.oel === "X"}
                                            onClick={() => {this.setState({oel: "X"});}}>Yes
                                        </Button>
                                        <Button
                                            disabled={this.state.oel === "Y"}
                                            onClick={() => {this.setState({oel: "Y"});}}>No
                                        </Button>
                                    </ButtonContainer>
                                </Container8>
                                <Container9>
                                    <ButtonContainer>
                                        <Button
                                            disabled={!this.state.adresse || !this.state.plz || !this.state.ort || !this.state.metall || !this.state.glas || !this.state.oel}
                                            onClick={() => {this.saveChangesRecycling()}}>Save Location
                                        </Button>
                                    </ButtonContainer>
                                    <ButtonContainer>
                                        <Button
                                            onClick={() => {this.setToNullState();}}>Cancel
                                        </Button>
                                    </ButtonContainer>
                                </Container9>
                            </MainContainer>)))))}

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
