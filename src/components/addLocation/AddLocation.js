import React from 'react';
import styled from 'styled-components';
import { api, handleError } from '../../helpers/api';
import { withRouter } from 'react-router-dom';
import TitleEdit from "../../views/UserInformation/TitleEdit";
import AddFountain from "../../views/AddLocation/AddFountain";
import AddToilet from "../../views/AddLocation/AddToilet";
import AddBench from "../../views/AddLocation/AddBench";
import Location from "../shared/models/Location";
import FireplaceCircle from "../../views/MapMarkers/FireplaceCircle.png"
import RecyclingCircle from "../../views/MapMarkers/RecyclingCircle.png"
import ToiletCircle from "../../views/MapMarkers/PublicToiletCircle.png"
import FountainCircle from "../../views/MapMarkers/FountainCircle.png"
import TableTennisCircle from "../../views/MapMarkers/PingPongCircle.png"
import BenchCircle from "../../views/MapMarkers/BenchCircle.png"
import AddCoordinates from "../../views/AddLocation/AddCoordinates";
import CreatingLocation from "../../views/AddLocation/CreatingLocation";
import AddFireplace from "../../views/AddLocation/AddFireplace";
import AddRecycling from "../../views/AddLocation/AddRecycling";
import ChooseAddLocationType from "../../views/AddLocation/ChooseAddLocationType";
import AddTableTennis from "../../views/AddLocation/AddTableTennis";


const MainContainer =styled.div`
  color: black;
  flex-direction: column;
  width: 100%;
  display: block;
  justify-content: center;
  height: 100%;
  overflow: scroll;
`;

// This component is responsible for the edit profile page
class AddLocation extends React.Component {
    constructor() {
        super();
        this.state = {
            errorMsgCoordinates: "",
            coordinatesValid: false,
            errorMsg: {},
            latitudeValid: false,
            longitudeValid: false,
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
            comfort: null,
            baujahrValid: null,
            adresseValid: null,
            plzValid: null,
            ortValid: null,
            slabQualityValid: null,
            viewValid: null,
            peaceValid: null,
            romanticsValid: null,
            comfortValid: null
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.getCoordinatesAddLocation = this.getCoordinatesAddLocation.bind(this);
        this.getLocationAddLocation = this.getLocationAddLocation.bind(this);
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
            this.setState({savingLocation: true});

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
            const response = await api.post(url, requestBody);
            const location = new Location(response.data);
            const locationUrl = '/map/informationpage/' + location.id;

            // after successfully saving the changes, the user is redirected to the information page
            this.props.history.push(locationUrl);
        } catch (e) {
            alert(`Something went wrong while adding the new location: \n${handleError(e)}`);
        }
    }

    // when the save changes button is clicked, the new data is sent to the server via put request
    async saveChangesTableTennis() {
        try {
            this.setState({savingLocation: true});
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
            this.setState({savingLocation: true});
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
            this.setState({savingLocation: true});

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
            this.setState({savingLocation: true});
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
            this.setState({savingLocation: true});
            const requestBody = JSON.stringify({
                locationType: "FOUNTAIN",
                longitude: this.state.longitude,
                latitude: this.state.latitude,
                baujahr: this.state.baujahr,
                art_txt: this.state.art_txt,
                brunnenart_txt: this.state.brunnenart_txt
            });

            const url = '/locations';
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
        this.setState({[key]: value});
    }

    getCoordinates(position) {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }

    updateLongitude = (longitude) => {
        this.setState({longitude}, this.validateLongitude);
    };

    updateLatitude = (latitude) => {
        this.setState({latitude}, this.validateLatitude)
    };

    validateCoordinates = () => {
        const {longitudeValid, latitudeValid} = this.state;
        this.setState({
            coordinatesValid: longitudeValid && latitudeValid
        })
    };

    validateLongitude = () => {
        const {longitude} = this.state;
        let longitudeValid = true;
        let errorMsg = {...this.state.errorMsg};

        if (longitude < 8.4680486289  || longitude > 8.6191027275) {
            longitudeValid = false;
            errorMsg.longitude = "The location must be in Zurich!"
        }
        else if(isNaN(longitude)){
            longitudeValid = false;
            errorMsg.longitude = "That's not a valid number."
        }
        this.setState({longitudeValid, errorMsg}, this.validateCoordinates)
    };

    validateLatitude = () => {
        const {latitude} = this.state;
        let latitudeValid = true;
        let errorMsg = {...this.state.errorMsg};

        if (latitude < 47.3232261256  || latitude > 47.4308197123) {
            latitudeValid = false;
            errorMsg.latitude = "The location must be in Zurich!"
        }
        else if(isNaN(latitude)){
            latitudeValid = false;
            errorMsg.latitude = "That's not a valid number."
        }
        this.setState({latitudeValid, errorMsg}, this.validateCoordinates)
    };

    updateBaujahr = (baujahr) => {
        this.setState({baujahr}, this.validateBaujahr)
    };

    validateBaujahr = () => {
        const {baujahr} = this.state;
        let baujahrValid = true;
        let errorMsg = {...this.state.errorMsg};

        if (baujahr < 500  || baujahr > 2021) {
            baujahrValid = false;
            errorMsg.baujahr = "That's not a valid year."
        }
        else if(isNaN(baujahr)){
            baujahrValid = false;
            errorMsg.baujahr = "That's not a valid number."
        }
        this.setState({baujahrValid, errorMsg})
    };

    updateAdresse = (adresse) => {
        this.setState({adresse}, this.validateAdresse);
    };

    validateAdresse = () => {
        const {adresse} = this.state;
        let adresseValid = true;
        let errorMsg = {...this.state.errorMsg};

        if (adresse.length < 5) {
            adresseValid = false;
            errorMsg.adresse = "That's not a valid adress."
        }
        this.setState({adresseValid, errorMsg})
    };

    updatePlz = (plz) => {
        this.setState({plz}, this.validatePlz);
    };

    validatePlz= () => {
        const {plz} = this.state;
        let plzValid = true;
        let errorMsg = {...this.state.errorMsg};

        if (plz < 8000 || plz > 8150) {
            plzValid = false;
            errorMsg.plz = "That's not a valid Zip code."
        }
        this.setState({plzValid, errorMsg})
    };

    updateOrt = (ort) => {
        this.setState({ort}, this.validateOrt);
    };

    validateOrt= () => {
        const {ort} = this.state;
        let ortValid = true;
        let errorMsg = {...this.state.errorMsg};

        if (ort.length < 4) {
            ortValid = false;
            errorMsg.ort = "That's not a valid city."
        }
        this.setState({ortValid, errorMsg})
    };

    updateSlabQuality = (slabQuality) => {
        this.setState({slabQuality}, this.validateSlabQuality);
    };

    validateSlabQuality = () => {
        const {slabQuality} = this.state;
        let slabQualityValid = true;
        let errorMsg = {...this.state.errorMsg};

        if (slabQuality > 5  ||  slabQuality < 1) {
            slabQualityValid = false;
            errorMsg.slabQuality = "Must be number between 1 and 5."
        }
        else if(isNaN(slabQuality)){
            slabQualityValid = false;
            errorMsg.slabQuality = "That's not a valid number."
        }
        this.setState({slabQualityValid, errorMsg})
    };

    updateView = (view) => {
        this.setState({view}, this.validateView);
    };

    validateView = () => {
        const {view} = this.state;
        let viewValid = true;
        let errorMsg = {...this.state.errorMsg};

        if (view > 5  ||  view < 1) {
            viewValid = false;
            errorMsg.view = "Must be number between 1 and 5."
        }
        else if(isNaN(view)){
            viewValid = false;
            errorMsg.view = "That's not a valid number."
        }
        this.setState({viewValid, errorMsg})
    };

    updatePeace = (peace) => {
        this.setState({peace}, this.validatePeace);
    };

    validatePeace = () => {
        const {peace} = this.state;
        let peaceValid = true;
        let errorMsg = {...this.state.errorMsg};

        if (peace > 5  ||  peace < 1) {
            peaceValid = false;
            errorMsg.peace = "Must be number between 1 and 5."
        }
        else if(isNaN(peace)){
            peaceValid = false;
            errorMsg.peace = "That's not a valid number."
        }
        this.setState({peaceValid, errorMsg})
    };

    updateRomantics = (romantics) => {
        this.setState({romantics}, this.validateRomantics);
    };

    validateRomantics = () => {
        const {romantics} = this.state;
        let romanticsValid = true;
        let errorMsg = {...this.state.errorMsg};

        if (romantics > 5  ||  romantics < 1) {
            romanticsValid = false;
            errorMsg.romantics = "Must be number between 1 and 5."
        }
        else if(isNaN(romantics)) {
            romanticsValid = false;
            errorMsg.romantics = "That's not a valid number."
        }
        this.setState({romanticsValid, errorMsg})
    };

    updateComfort = (comfort) => {
        this.setState({comfort}, this.validateComfort);
    };

    validateComfort = () => {
        const {comfort} = this.state;
        let comfortValid = true;
        let errorMsg = {...this.state.errorMsg};

        if (comfort > 5  ||  comfort < 1) {
            comfortValid = false;
            errorMsg.comfort = "Must be number between 1 and 5."
        }
        else if(isNaN(comfort)) {
            comfortValid = false;
            errorMsg.comfort = "That's not a valid number."
        }
        this.setState({comfortValid, errorMsg})
    };

    getCoordinatesAddLocation(position) {
        let latitudeValid = true;
        let longitudeValid = true;
        if (position.coords.latitude < 47.3232261256 || position.coords.latitude > 47.4308197123){
            latitudeValid = false;
            this.setState({errorMsgCoordinates : "You're not in Zurich! Type in the coordinates."});
        }
        this.setState({latitude: position.coords.latitude});
        this.setState({latitudeValid});
        if (position.coords.longitude < 8.4680486289 || position.coords.longitude > 8.6191027275){
            longitudeValid = false;
            this.setState({errorMsgCoordinates : "You're not in Zurich! Type in the coordinates."});
        }
        this.setState({longitude: position.coords.longitude});
        this.setState({longitudeValid});
        if (latitudeValid && longitudeValid){
            this.setState({coordinatesValid: true});
            this.setCoordinatesSuccessfully();
        }
    }

    getLocationAddLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinatesAddLocation, this.handleLocationError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
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
                alert ("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert ("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert ("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert ("An unknown error occurred.");
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
                        <AddCoordinates errorMsgCoordinates={this.state.errorMsgCoordinates}
                                        updateLongitude={this.updateLongitude.bind(this)}
                                        updateLatitude={this.updateLatitude.bind(this)}
                                        coordinatesValid={this.state.coordinatesValid}
                                        latitudeValid={this.state.latitudeValid}
                                        longitudeValid={this.state.longitudeValid}
                                        getImage={this.getImage.bind(this)}
                                        getTypeAsString={this.getTypeAsString.bind(this)}
                                        handleInputChange={this.handleInputChange.bind(this)}
                                        latitude={this.state.latitude}
                                        longitude={this.state.longitude}
                                        getLocation={this.getLocation.bind(this)}
                                        setCoordinatesSuccessfully={this.setCoordinatesSuccessfully.bind(this)}
                                        locationType={this.state.locationType}
                                        errorMsg={this.state.errorMsg}
                                        getLocationAddLocation={this.getLocationAddLocation.bind(this)}
                        />
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
                                         baujahrValid={this.state.baujahrValid}
                                         updateBaujahr={this.updateBaujahr.bind(this)}
                                         errorMsg={this.state.errorMsg}
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
                            : (this.state.locationType==="RECYCLING_STATION" ? (this.state.savingLocation ? (<MainContainer>
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
                                        adresseValid={this.state.adresseValid}
                                        plzValid={this.state.plzValid}
                                        ortValid={this.state.ortValid}
                                        updateOrt={this.updateOrt.bind(this)}
                                        updateAdresse={this.updateAdresse.bind(this)}
                                        updatePlz={this.updatePlz.bind(this)}
                                        errorMsg={this.state.errorMsg}
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
                                        adresseValid={this.state.adresseValid}
                                        plzValid={this.state.plzValid}
                                        ortValid={this.state.ortValid}
                                        updateOrt={this.updateOrt.bind(this)}
                                        updateAdresse={this.updateAdresse.bind(this)}
                                        updatePlz={this.updatePlz.bind(this)}
                                        errorMsg={this.state.errorMsg}
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
                                    slabQualityValid={this.state.slabQualityValid}
                                    updateSlabQuality={this.updateSlabQuality.bind(this)}
                                    errorMsg={this.state.errorMsg}
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
                                    viewValid={this.state.viewValid}
                                    peaceValid={this.state.peaceValid}
                                    romanticsValid={this.state.romanticsValid}
                                    comfortValid={this.state.comfortValid}
                                    updateView={this.updateView.bind(this)}
                                    updateComfort={this.updateComfort.bind(this)}
                                    updateRomantics={this.updateRomantics.bind(this)}
                                    updatePeace={this.updatePeace.bind(this)}
                                    errorMsg={this.state.errorMsg}
                                />
                            </MainContainer>))))))))}
            </MainContainer>
        );
    }
}

export default withRouter(AddLocation);
