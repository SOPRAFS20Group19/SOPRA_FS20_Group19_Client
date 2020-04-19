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


    render(){
        return (
            <div>
                {!this.props.locationsShown ? (
                    <Spinner />
                    ) : (
                    <GoogleMap
                        defaultZoom={15}
                        //Center at current location
                        defaultCenter={{lat: this.props.currentCenter[0], lng: this.props.currentCenter[1]}}
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
                            >
                                <div>
                                    <h2>{"Location Type: " + this.state.selectedLocation.locationType}</h2>
                                    <h2>{"Location Number: " + this.state.selectedLocation.id}</h2>
                                    <h2>{"URL: " + this.props.match.params.locationId}</h2>
                                    <Button
                                        onClick={()=>{
                                            this.props.history.push(`/map/informationpage/` + this.state.selectedLocation.id);
                                        }}
                                    >
                                        Get more information here!
                                    </Button>
                                </div>
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