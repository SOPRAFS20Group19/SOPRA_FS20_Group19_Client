import React, { useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import * as brunnenData from "./data/wvz_brunnen.json";
import mapStyles from "./mapStyles";
import Sidebar from "../../views/Sidebar";
import Header from "../../views/Header";
import {Button} from "../../views/design/Button";
import Popover from "react-bootstrap/Popover";
import styled from "styled-components";
import {api, handleError} from "../../helpers/api";
import CurentPositionMarker from "../../views/design/CurentPositionMarker";

/*
import {RecyclingIcon} from "../../views/MapMarkers/RecyclingIcon.png"
import {FountainIcon} from "../../views/FountainClipart.png"
import {FireplaceIcon} from "../../views/MapMarkers/FireplaceIcon.css"
 */

import Player from "../../views/Player";
import {Spinner} from "../../views/design/Spinner";
import {withRouter} from "react-router-dom";
import {ButtonForLogin} from "../../views/design/ButtonForLogin";


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

const BorderFountain = styled.div`
    border: 5px solid #66A3E0;
    border-radius: 7px;
    margin: 4px;
    padding: 20px;
`;

const BorderFireplace = styled.div`
    border: 5px solid #66A3E0;
    border-radius: 7px;
    margin: 4px;
    padding: 20px;
`;

const BorderRecycling = styled.div`
    border: 5px solid #66A3E0;
    border-radius: 7px;
    margin: 4px;
    padding: 20px;
`;


function Map() {
    const [selectedBrunnen, setSelectedBrunnen] = useState(null);

    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedBrunnen(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);

    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 47.366950, lng: 8.547200 }}
            defaultOptions={{ styles: mapStyles }}
        >

            {brunnenData.features.map(brunnen => (
                <Marker
                    key={brunnen.properties.objectid}
                    position={{
                        lat: brunnen.geometry.coordinates[1],
                        lng: brunnen.geometry.coordinates[0]
                    }}

                    onClick={() => {
                        setSelectedBrunnen(brunnen);
                    }}

                    icon={{
                        url: '/FountainClipart.png',
                        scaledSize: new window.google.maps.Size(25, 25)
                    }}
                />
            ))}

            {selectedBrunnen && (
                <InfoWindow
                    onCloseClick={() => {
                        setSelectedBrunnen(null);
                    }}
                    position={{
                        lat: selectedBrunnen.geometry.coordinates[1],
                        lng: selectedBrunnen.geometry.coordinates[0]
                    }}
                >
                    <div>
                        <h2>{"Art des Brunnens:" + selectedBrunnen.properties.art_txt}</h2>
                        <p>{"Baujahr:" + selectedBrunnen.properties.baujahr}</p>
                    </div>
                </InfoWindow>
            )}

        </GoogleMap>
    );
}

class MapService extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedLocation: null,
            currCenter: [47.366950, 8.547200]
        };
        this.setCenter();
    }

    setSelectedLocation(location){
        this.setState({selectedLocation: location});
    }


    async getLocations() {
        try {
            const response = await api.get('/locations');
            // delays continuous execution of an async operation for 1 second.
            // This is just a fake async call, so that the spinner can be displayed
            // feel free to remove it :)
            // await new Promise(resolve => setTimeout(resolve, 1000));

            // Get the returned users and update the state.
            this.setState({ locationsShown: response.data });

            // This is just some data for you to see what is available.
            // Feel free to remove it.
            console.log('request to:', response.request.responseURL);
            console.log('status code:', response.status);
            console.log('status text:', response.statusText);
            console.log('requested data:', response.data);

            // See here to get more data.
            console.log(response);
        } catch (error) {
            alert(`Something went wrong while fetching the locations: \n${handleError(error)}`);
        }
    }

    getIcon(location){
        //funktioniert aktuell nur mit fountainClipart, wenn mit anderen funktioniert, dann einfach ersten return entfernen
        //return '/FountainClipart.png';
        if (location.locationType === "FOUNTAIN"){
            //return "../../views/MapMarkers/FountainIcon.png"
            //return FountainIcon
            return '/FountainIcon.png'
        }
        else if (location.locationType === "FIREPLACE"){
            //return "../../views/MapMarkers/FireplaceIcon.png"
            //return FireplaceIcon
            return '/FireplaceIcon.png'
        }
        else {
            //return "../../views/MapMarkers/RecyclingIcon.png"
            //return RecyclingIcon
            return '/RecyclingIcon.png'
        }
    }

    handleInputChange(key, value) {
        // Example: if the key is username, this statement is the equivalent to the following one:
        // this.setState({'username': value});
        this.setState({[key]: value});
    }

    setCenter(){
        if (this.props.currentLocation[0] != null && this.props.currentLocation[1] != null){
            this.setState({currCenter: [this.props.currentLocation[0], this.props.currentLocation[1]]})
        }
        else{
            this.setState({currCenter: [47.366950, 8.547200]})
        }
    }

    // Returns the string to be rendered according to the type
    getTypeAsString(location){
        if (this.state.selectedLocation.locationType === 'FIREPLACE'){
            return 'FIREPLACE';
        }else if (this.state.selectedLocation.locationType === 'FOUNTAIN'){
            return 'FOUNTAIN';
        }
        return 'RECYCLING';
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
                        defaultCenter={{lat: this.state.currCenter[0], lng: this.state.currCenter[1]}}
                        defaultOptions={{ styles: mapStyles }}

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
                            ><BorderFountain>
                                <div>

                                    <h2>{this.getTypeAsString()}</h2>
                                    <HeaderOfPopUp>{"Location Number: "}</HeaderOfPopUp> <Text>{this.state.selectedLocation.id}</Text><br/>
                                    <HeaderOfPopUp> {"Coordinates: "}</HeaderOfPopUp> <Text>{this.state.selectedLocation.coordinates}</Text><br/>
                                    {/*<h2>{"URL: " + this.props.match.params.locationId}</h2> only for testing purpose*/}
                                    <Button
                                        onClick={()=>{
                                            this.props.history.push(`/map/informationpage/` + this.state.selectedLocation.id);
                                        }}
                                    >
                                        Get more information here!
                                    </Button>
                                </div>
                            </BorderFountain>
                            </InfoWindow>
                        )}

                        <Marker
                            key={1414141441141414}

                            position={{
                                lat: this.props.currentLocation[0],
                                lng: this.props.currentLocation[1]
                            }}


                            icon={{
                                url: '/currentMan.png',
                                scaledSize: new window.google.maps.Size(10,30)}}
                        />
                    </GoogleMap>
                )}
            </div>
        );
    }
}

export default withRouter(withScriptjs(withGoogleMap(MapService)));