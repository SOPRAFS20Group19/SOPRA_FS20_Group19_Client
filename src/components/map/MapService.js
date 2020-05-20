import React, { useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import {Button} from "../../views/variables/Button";
import styled from "styled-components";
import {api, handleError} from "../../helpers/api";
import Spinner from "react-bootstrap/Spinner";
import {withRouter} from "react-router-dom";
import coderWoman from "../../views/Avatar/markers/coder-woman-marker.svg";
import coderWomanColor from "../../views/Avatar/markers/coder-woman-color-marker.svg";
import coderMan from "../../views/Avatar/markers/coder-man-marker.svg";
import coderManColor from "../../views/Avatar/markers/coder-man-color-marker.svg";
import scientistWoman from "../../views/Avatar/markers/scientist-woman-marker.svg";
import scientistWomanColor from "../../views/Avatar/markers/scientist-woman-color-marker.svg";
import scientistMan from "../../views/Avatar/markers/scientist-man-marker.svg";
import scientistManColor from "../../views/Avatar/markers/scientist-man-color-marker.svg";
import yogiWoman from "../../views/Avatar/markers/yogi-woman-marker.svg";
import yogiWomanColor from "../../views/Avatar/markers/yogi-woman-color-marker.svg";
import yogiMan from "../../views/Avatar/markers/yogi-man-marker.svg";
import yogiManColor from "../../views/Avatar/markers/yogi-man-color-marker.svg";
import unknownMarker from "../../views/Avatar/markers/unknown-marker.svg";

const markerArray = [unknownMarker, coderWoman, coderWomanColor, coderMan, coderManColor, scientistWoman, scientistWomanColor, scientistMan, scientistManColor, yogiWoman, yogiWomanColor, yogiMan, yogiManColor]

const Text = styled.div`
  font-size: 16px;
  display: inline;
  line-height: 1.6;
`;

const HeaderOfPopUp = styled.div`
    display: inline;
    font-size: 1.3em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
`;

const Border = styled.div`
`;

const BorderFountain = {
    color: '#003068',
    border: '3px solid #66A3E0',
    borderRadius: 7,
    margin: 4,
    padding: 20,

};

const BorderFireplace = {
    color: 'darkred',
    border: '3px solid chocolate',
    borderRadius: 7,
    margin: 4,
    padding: 10,
};

const BorderRecycling = {
    color: '#013220',
    border: '3px solid #228B22',
    borderRadius: 7,
    margin: 4,
    padding: 10,
};

const BorderToilet = {
    color: '#000000',
    border: '3px solid #A9A9A9',
    borderRadius: 7,
    margin: 4,
    padding: 10,
};

const BorderTableTennis = {
    color: '#8f193f',
    border: '3px solid #FFC0CB',
    borderRadius: 7,
    margin: 4,
    padding: 10,
};

const BorderBench = {
    color: '#2D150A',
    border: '3px solid #A58A72',
    borderRadius: 7,
    margin: 4,
    padding: 10,
};

const ButtonRecycling = {
    color: '#228B22',
    border: '2px solid #228B22',
    background: '#000000',
    width: '100%',
};

const ButtonFirePlace = {
    color: 'chocolate',
    border: '2px solid chocolate',
    background: 'darkred',
    width: '100%',
};

const ButtonFountain = {
    color: '#66A3E0',
    border: '2px solid #66A3E0',
    background: '#003068',
    width: '100%',

};

const ButtonToilet = {
    color: '#A9A9A9',
    border: '2px solid #A9A9A9',
    background: '#000000',
    width: '100%',
};

const ButtonTableTennis = {
    color: '#FFC0CB',
    border: '2px solid #FFC0CB',
    background: '#8f193f',
    width: '100%',
};

const ButtonBench = {
    color: '#A58A72',
    border: '2px solid #A58A72',
    background: '#2D150A',
    width: '100%',
};


class MapService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLocation: null,
            selectedLocationRating: null,
            currCenter: null
        };
    }

    setSelectedLocation(location) {
        this.setState({selectedLocation: location});
        if (location != null){
            this.showAverageRating(location.id);
        }
    }

    async showAverageRating(locationId){
        try {
            const url = '/locations/rating/' + locationId;
            const response = await api.get(url);
            const rating = response.data;
            this.setState({selectedLocationRating: rating});
        } catch (e) {
            alert(`Something went wrong while getting the average rating: \n${handleError(e)}`);
        }
    }

    getIcon(location){
        if (location.locationType === "FOUNTAIN"){
            return '/FountainIcon.png'
        }
        else if (location.locationType === "FIREPLACE"){
            return '/FireplaceIcon.png'
        }
        else if (location.locationType === "RECYCLING_STATION") {
            return '/RecyclingIcon.png'
        }
        else if (location.locationType === "TOILET") {
            return '/PublicToiletIcon.png'
        }
        else if (location.locationType === "TABLE_TENNIS") {
            return '/PingPongIcon.png'
        }
        else{
            return '/BenchIcon.png'
        }
    }

    handleInputChange(key, value) {
        this.setState({[key]: value});
    }

    // Returns the string to be rendered according to the type
    getTypeAsString(location){
        if (this.state.selectedLocation.locationType === 'FIREPLACE'){
            return 'FIREPLACE';
        }
        else if (this.state.selectedLocation.locationType === 'FOUNTAIN'){
            return 'FOUNTAIN';
        }
        else if (this.state.selectedLocation.locationType === 'TOILET'){
            return 'PUBLIC TOILET';
        }
        else if (this.state.selectedLocation.locationType === 'TABLE_TENNIS'){
            return 'TABLE TENNIS';
        }
        else if (this.state.selectedLocation.locationType === 'BENCH'){
            return 'BENCH';
        }
        return 'RECYCLING';
    }

    // Gets the right style for the different types of information windows
    getStyleOfBorder() {
        if (this.state.selectedLocation.locationType === 'FOUNTAIN'){
            return BorderFountain;
        }
        else if (this.state.selectedLocation.locationType === 'FIREPLACE'){
            return BorderFireplace;
        }
        else if (this.state.selectedLocation.locationType === 'TOILET'){
            return BorderToilet;
        }
        else if (this.state.selectedLocation.locationType === 'TABLE_TENNIS'){
            return BorderTableTennis;
        }
        else if (this.state.selectedLocation.locationType === 'BENCH'){
            return BorderBench;
        }

        return BorderRecycling;
    }

    getStyleOfButton() {
        if (this.state.selectedLocation.locationType === 'FOUNTAIN') {
            return ButtonFountain;
        }
        else if (this.state.selectedLocation.locationType === 'FIREPLACE') {
            return ButtonFirePlace;
        }
        else if (this.state.selectedLocation.locationType === 'TOILET') {
            return ButtonToilet;
        }
        else if (this.state.selectedLocation.locationType === 'TABLE_TENNIS') {
            return ButtonTableTennis;
        }
        else if (this.state.selectedLocation.locationType === 'BENCH') {
            return ButtonBench;
        }
        return ButtonRecycling;
    }

    render(){
        return (
            <div>
                {!this.props.locationsShown ? (
                    <Spinner />
                    ) : (
                    <GoogleMap
                        defaultZoom={15}
                        //Center at current location
                        defaultCenter={{
                        lat: this.props.currentCenter[0],
                        lng: this.props.currentCenter[1]
                    }}
                        defaultOptions={ {zoomControl: window.innerWidth > 800, fullscreenControl: false} }

                    >
                            {this.props.locationsShown.map(location => {
                                    return (
                                        <Marker
                                            key={location.id}

                                            position={{
                                                lat: location.coordinates[1],
                                                lng: location.coordinates[0]
                                            }}

                                            onClick={() => {
                                                localStorage.setItem("currentLocationInformationLat", location.coordinates[1]);
                                                localStorage.setItem("currentLocationInformationLon", location.coordinates[0]);
                                                this.setSelectedLocation(location);
                                            }}
                                            icon={{
                                                url: this.getIcon(location),
                                                scaledSize: new window.google.maps.Size(50, 77)}}


                                        />
                                    );
                                })}

                        {this.state.selectedLocation && (
                            <InfoWindow
                                onCloseClick={() => {
                                    this.setSelectedLocation(null);
                                }}
                                position={{
                                    lat: this.state.selectedLocation.coordinates[1],
                                    lng: this.state.selectedLocation.coordinates[0]
                                }}
                            >

                                <Border style={this.getStyleOfBorder()}>

                                        <h2>{this.getTypeAsString()}</h2>
                                        <HeaderOfPopUp>{"Address: "}</HeaderOfPopUp>
                                        <Text>{this.state.selectedLocation.address}</Text><br/>

                                    {this.state.selectedLocationRating ? (
                                    <div>
                                        <HeaderOfPopUp> {"Average Rating: "}</HeaderOfPopUp>
                                        <Text>{this.state.selectedLocationRating}/5</Text>
                                    </div>) :
                                        (
                                            <div>
                                                <HeaderOfPopUp> {"Average Rating: "}</HeaderOfPopUp>
                                                <Text>0/5</Text>
                                            </div>)}
                                    <HeaderOfPopUp> {"Coordinates: "}</HeaderOfPopUp>
                                    <Text>{this.state.selectedLocation.latitude}, {this.state.selectedLocation.longitude}</Text><br/>
                                    <br/>

                                    {!localStorage.getItem('userId') ? (
                                        <Button style={this.getStyleOfButton()}
                                                width="100%"
                                                onClick={() => {
                                                    this.props.history.push('/registration');
                                                }}
                                        >
                                            Register here to get more information!
                                        </Button>
                                    ) : (
                                        <Button style={this.getStyleOfButton()}
                                                width="100%"
                                            onClick={() => {
                                                localStorage.setItem("currentLocationInformationLat", this.state.selectedLocation.latitude);
                                                localStorage.setItem("currentLocationInformationLon", this.state.selectedLocation.longitude);
                                                this.props.history.push(`/map/informationpage/` + this.state.selectedLocation.id);
                                            }}
                                        >
                                            Get more information here!
                                        </Button>
                                    )}
                                </Border>
                            </InfoWindow>
                        )}

                        <Marker
                            key={1414141441141414}

                            position={{
                                lat: this.props.currentLocation[0],
                                lng: this.props.currentLocation[1]
                            }}


                            icon={{
                                url: markerArray[this.props.loggedInUser.avatarNr],
                                scaledSize: new window.google.maps.Size(65, 100)}}
                        />
                    </GoogleMap>
                )}
            </div>
        );
    }
}

export default withRouter(withScriptjs(withGoogleMap(MapService)));