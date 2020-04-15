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
import {Button} from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import MapService from "./MapService";
import Popover from "react-bootstrap/Popover";
import styled from "styled-components";
import {api, handleError} from "../../helpers/api";
import {RecyclingIcon} from "../../views/MapMarkers/RecyclingIcon.png"
import {FountainIcon} from "../../views/MapMarkers/FountainIcon.png"
import {FireplaceIcon} from "../../views/MapMarkers/FireplaceIcon.png"

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

class Maps extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            locationsShown: null,
            latitude: null,
            longitude: null
        };
        this.resetFilter();
        this.getFilteredLocations();
        this.getFilteredLocations = this.getFilteredLocations.bind(this);
    }

    getLocationsShown() {
        return this.state.locationsShown;
    }

    async getFilteredLocations(){
        try {
            const requestBody = JSON.stringify({
                fountains: localStorage.getItem('showFountains'),
                fireplaces: localStorage.getItem('showFireplaces'),
                recyclingStations: localStorage.getItem('showRecyclingStations')
            });

            const response = await api.post('/locations/filter', requestBody);
            // delays continuous execution of an async operation for 1 second.
            // This is just a fake async call, so that the spinner can be displayed
            // feel free to remove it :)
            // await new Promise(resolve => setTimeout(resolve, 1000));

            // Get the returned users and update the state.
            this.setState({ locationsShown: response.data });
        } catch (error) {
            alert(`Something went wrong while fetching the filtered locations: \n${handleError(error)}`);
        }
    }

    resetFilter(){
        if (localStorage.getItem('showFountains') !== false && localStorage.getItem('showFountains') !== true){
            localStorage.setItem('showFountains', true);
            localStorage.setItem('showFireplaces', true);
            localStorage.setItem('showRecyclingStations', true);
        }
    }

    render(){
        return (

            <div style={{ width: "100vw", height: "100vh" }}>
                <MapService
                    locationsShown={this.state.locationsShown}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDdG-nTEZ_bGS064sMlgL_dBdA4uZ2h5c0`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                >
                </MapService>
                <Header/>
                <Sidebar getFilteredLocations={this.getFilteredLocations.bind(this)}/>

            </div>
        );
    }
}
export default withRouter(Maps);
