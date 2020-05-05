import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import { Button } from '../../views/variables/Button';
import { withRouter } from 'react-router-dom';
import Header from "../../views/Map/Header";
import SidebarInfoAndAddLocation from "../../views/InformationPage/SidebarInfoAndAddLocation";
import TitleEdit from "../../views/UserInformation/TitleEdit";
import AddFountain from "../../views/AddLocation/AddFountain";
import AddToilet from "../../views/AddLocation/AddToilet";
import AddBench from "../../views/AddLocation/AddBench";
import Location from "../shared/models/Location";
import FireplaceCircle from "../../views/MapMarkers/FireplaceCircle.png"
import RecyclingCircle from "../../views/MapMarkers/RecyclingCircle.png"
import ToiletCircle from "../../views/MapMarkers/Public Toilet Circle.png"
import FountainCircle from "../../views/MapMarkers/FountainCircle.png"
import TableTennisCircle from "../../views/MapMarkers/Ping Pong Circle.png"
import BenchCircle from "../../views/MapMarkers/Bench Circle.png"
import {ButtonForRecycling} from "../../views/variables/ButtonForRecycling";
import {RoundButton} from "../../views/variables/RoundButton";
import {ButtonYesNo} from "../../views/AddLocation/ButtonYesNo"
import Spinner from "react-bootstrap/Spinner";
import SidebarAddLocation from "../../views/AddLocation/SidebarAddLocation";
import SidebarAddLocationtoStart from "../../views/AddLocation/SidebarAddLocationtoStart";
import AddCoordinates from "../../views/AddLocation/AddCoordinates";
import CreatingLocation from "../../views/AddLocation/CreatingLocation";
import AddFireplace from "../../views/AddLocation/AddFireplace";
import AddRecycling from "../../views/AddLocation/AddRecycling";
import ChooseAddLocationType from "../../views/AddLocation/ChooseAddLocationType";
import AddTableTennis from "../../views/AddLocation/AddTableTennis";


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

const Container6 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
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
  justify-content: center;
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
  justify-content: center;
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
  justify-content: center;
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
  justify-content: center;
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
  justify-content: center;
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
  justify-content: center;
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

const ButtonContainerYesNo = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
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
  justify-content: center;
  align-items: center;
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
            category: null,
            cost: null,
            openinghours: null,
            net: null,
            slabQuality: null,
            view: null,
            peace: null,
            romantics: null,
            comfort: null
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
            kinderwagen: null,
            openinghours: null,
            cost: null,
            category: null,
            net: null,
            slabQuality: null,
            view: null,
            peace: null,
            romantics: null,
            comfort: null
        })
    }

    //returns the image to be rendered according to the type
    getImage(){
        if (this.state.locationType === 'FIREPLACE'){
            return FireplaceCircle;
        }else if (this.state.locationType === 'FOUNTAIN'){
            return FountainCircle;
        } else if (this.state.locationType === 'RECYCLING_STATION'){
            return RecyclingCircle;
        }else if (this.state.locationType === 'TOILET'){
            return ToiletCircle;
        }else if (this.state.locationType === 'TABLE_TENNIS'){
            return TableTennisCircle;
        }else if (this.state.locationType === 'BENCH'){
            return BenchCircle;
        }
    }


    //returns the string to be rendered according to the type
    getTypeAsString(){
        if (this.state.locationType === 'FIREPLACE'){
            return "FIREPLACE";
        }else if (this.state.locationType === 'FOUNTAIN'){
            return "FOUNTAIN";
        }else if (this.state.locationType  === 'RECYCLING_STATION'){
            return "RECYCLING";
        }else if (this.state.locationType  === 'TOILET'){
            return "TOILET";
        }else if (this.state.locationType  === 'TABLE_TENNIS'){
            return "TABLE TENNIS";
        }else if (this.state.locationType  === 'BENCH'){
            return "BENCH";
        }
    }

    // when the save changes button is clicked, the new data is sent to the server via put request
    async saveChangesBench() {
        try {
            this.setState({savingLocation: true})

            const requestBody = JSON.stringify({
                locationType: "BENCH",
                longitude: this.state.longitude,
                latitude: this.state.latitude,
                view: this.state.view,
                peace: this.state.peace,
                romantics: this.state.romantics,
                comfort: this.state.comfort
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
    async saveChangesTableTennis() {
        try {
            this.setState({savingLocation: true})
            if (this.state.net==="X"){
                this.state.net = "Yes";
            }
            else{
                this.state.net = "No";
            }

            const requestBody = JSON.stringify({
                locationType: "TABLE_TENNIS",
                longitude: this.state.longitude,
                latitude: this.state.latitude,
                slabQuality: this.state.slabQuality,
                net: this.state.net
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
    async saveChangesToilet() {
        try {
            this.setState({savingLocation: true})
            if (this.state.category==="X"){
                this.state.category = "WC (rollstuhlgängig)";
            }
            else{
                this.state.category = "WC (nicht rollstuhlgängig)";
            }

            const requestBody = JSON.stringify({
                locationType: "TOILET",
                longitude: this.state.longitude,
                latitude: this.state.latitude,
                adresse: this.state.adresse,
                plz: this.state.plz,
                ort: this.state.ort,
                openingHours: this.state.openinghours,
                cost: this.state.cost,
                category: this.state.category
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
    async saveChangesFireplace() {
        try {
            this.setState({savingLocation: true})

            const requestBody = JSON.stringify({
                locationType: "FIREPLACE",
                longitude: this.state.longitude,
                latitude: this.state.latitude,
                holz: this.state.holz,
                baden: this.state.baden,
                hunde: this.state.hunde,
                kinderwagen: this.state.kinderwagen,
                trinkwasser: this.state.trinkwasser,
                parkplatz: this.state.parkplatz,
                abfall: this.state.abfall,
                tisch: this.state.tisch,
                rost: this.state.rost,
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

    // renders the page
    render() {
        return (
            <MainContainer>
            <TitleEdit/>
                {!this.state.locationType ?
                    (<MainContainer>
                            <ChooseAddLocationType
                                setLocationType={this.setLocationType.bind(this)}
                            />
                    </MainContainer>)
                    : (!this.state.setCoordinates ? (<MainContainer>
                        <AddCoordinates getImage={this.getImage.bind(this)} getTypeAsString={this.getTypeAsString.bind(this)} handleInputChange={this.handleInputChange.bind(this)} latitude={this.state.latitude} longitude={this.state.longitude} getLocation={this.getLocation.bind(this)} setCoordinatesSuccessfully={this.setCoordinatesSuccessfully.bind(this)} locationType={this.state.locationType}/>
                    </MainContainer>) : (this.state.locationType==="FOUNTAIN" ?
                        (this.state.savingLocation ? (
                            <MainContainer>
                                <CreatingLocation getImage={this.getImage.bind(this)} getTypeAsString={this.getTypeAsString.bind(this)}/>
                        </MainContainer>) : (<MainContainer>
                            <AddFountain latitude={this.state.latitude}
                                         longitude={this.state.longitude}
                                         handleInputChange={this.handleInputChange.bind(this)}
                                         art_txt={this.state.art_txt}
                                         brunnenart_txt={this.state.brunnenart_txt}
                                         setState={this.setState.bind(this)}
                                         saveChangesFountain={this.saveChangesFountain.bind(this)}
                                         setToNullState={this.setToNullState.bind(this)}
                                         getImage={this.getImage.bind(this)}
                                         getTypeAsString={this.getTypeAsString.bind(this)}
                            />
                        </MainContainer>)) :
                        (this.state.locationType==="FIREPLACE" ? (this.state.savingLocation ? (<MainContainer>
                                <CreatingLocation getImage={this.getImage.bind(this)} getTypeAsString={this.getTypeAsString.bind(this)}/>
                            </MainContainer>) : (
                            <MainContainer>
                                <AddFireplace latitude={this.state.latitude}
                                              longitude={this.state.longitude}
                                              handleInputChange={this.handleInputChange.bind(this)}
                                              setState={this.setState.bind(this)}
                                              saveChangesFireplace={this.saveChangesFireplace.bind(this)}
                                              setToNullState={this.setToNullState.bind(this)}
                                              getImage={this.getImage.bind(this)}
                                              getTypeAsString={this.getTypeAsString.bind(this)}
                                              holz={this.state.holz}
                                              rost={this.state.rost}
                                              tisch={this.state.tisch}
                                              trinkwasser={this.state.trinkwasser}
                                              abfall={this.state.abfall}
                                              parkplatz={this.state.parkplatz}
                                              baden={this.state.baden}
                                              hunde={this.state.hunde}
                                              kinderwagen={this.state.kinderwagen}
                                />
                        </MainContainer>))
                            : (this.state.locationType==="RECYCLING" ? (this.state.savingLocation ? (<MainContainer>
                                <CreatingLocation getImage={this.getImage.bind(this)} getTypeAsString={this.getTypeAsString.bind(this)}/>
                            </MainContainer>) : (
                                <MainContainer>
                                    <AddRecycling
                                        latitude={this.state.latitude}
                                        longitude={this.state.longitude}
                                        handleInputChange={this.handleInputChange.bind(this)}
                                        setState={this.setState.bind(this)}
                                        saveChangesRecycling={this.saveChangesRecycling.bind(this)}
                                        setToNullState={this.setToNullState.bind(this)}
                                        getImage={this.getImage.bind(this)}
                                        getTypeAsString={this.getTypeAsString.bind(this)}
                                        glas={this.state.glas}
                                        oel={this.state.oel}
                                        metall={this.state.metall}
                                        adresse={this.state.adresse}
                                        plz={this.state.plz}
                                        ort={this.state.ort}
                                    />
                            </MainContainer>)) : (this.state.locationType==="TOILET" ? (this.state.savingLocation ? (<MainContainer>
                                    <CreatingLocation getImage={this.getImage.bind(this)} getTypeAsString={this.getTypeAsString.bind(this)}/>
                                </MainContainer>) : (<MainContainer>
                                    <AddToilet
                                        latitude={this.state.latitude}
                                        longitude={this.state.longitude}
                                        handleInputChange={this.handleInputChange.bind(this)}
                                        setState={this.setState.bind(this)}
                                        saveChangesToilet={this.saveChangesToilet.bind(this)}
                                        setToNullState={this.setToNullState.bind(this)}
                                        getImage={this.getImage.bind(this)}
                                        getTypeAsString={this.getTypeAsString.bind(this)}
                                        openinghours={this.state.openinghours}
                                        cost={this.state.cost}
                                        category={this.state.category}
                                        adresse={this.state.adresse}
                                        plz={this.state.plz}
                                        ort={this.state.ort}
                                    />
                                </MainContainer>)) : (this.state.locationType==="TABLE_TENNIS" ? (this.state.savingLocation ? (<MainContainer>
                                <CreatingLocation getImage={this.getImage.bind(this)} getTypeAsString={this.getTypeAsString.bind(this)}/>
                            </MainContainer>): (<MainContainer>
                                <AddTableTennis
                                    latitude={this.state.latitude}
                                    longitude={this.state.longitude}
                                    handleInputChange={this.handleInputChange.bind(this)}
                                    setState={this.setState.bind(this)}
                                    saveChangesTableTennis={this.saveChangesTableTennis.bind(this)}
                                    setToNullState={this.setToNullState.bind(this)}
                                    getImage={this.getImage.bind(this)}
                                    getTypeAsString={this.getTypeAsString.bind(this)}
                                    net={this.state.net}
                                    slabQuality={this.state.slabQuality}
                                />
                            </MainContainer>)) : (this.state.savingLocation ? (<MainContainer>
                                <CreatingLocation getImage={this.getImage.bind(this)} getTypeAsString={this.getTypeAsString.bind(this)}/>
                            </MainContainer>): (<MainContainer>
                                <AddBench
                                    latitude={this.state.latitude}
                                    longitude={this.state.longitude}
                                    handleInputChange={this.handleInputChange.bind(this)}
                                    setState={this.setState.bind(this)}
                                    saveChangesBench={this.saveChangesBench.bind(this)}
                                    setToNullState={this.setToNullState.bind(this)}
                                    getImage={this.getImage.bind(this)}
                                    getTypeAsString={this.getTypeAsString.bind(this)}
                                    view={this.state.view}
                                    peace={this.state.peace}
                                    romantics={this.state.romantics}
                                    comfort={this.state.comfort}
                                />
                            </MainContainer>))))))))}
            </MainContainer>
        );
    }
}

export default withRouter(AddLocation);
