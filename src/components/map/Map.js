import React, { useState, useEffect } from "react";
import Sidebar from "../../views/Map/Sidebar";
import Header from "../../views/Map/Header";
import {Button} from '../../views/variables/Button';
import { withRouter } from 'react-router-dom';
import MapService from "./MapService";
import styled from "styled-components";
import {api, handleError} from "../../helpers/api";
import Spinner from "react-bootstrap/Spinner";
import User from "../shared/models/User"

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 0px;
`;

class Map extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            locationsShown: null,
            currentPosition: [],
            currentCenter: [47.366950, 8.547200],
            loggedInUserId: localStorage.getItem("userId"),
            loggedInUser: new User(),
            loading: false
        };
        this.resetFilter();
        this.getFilteredLocations();
        this.getFilteredLocations = this.getFilteredLocations.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.getLocation();
        this.getUser();
    }

    /*componentDidMount(): void {
        this.getFilteredLocations();
    }*/

    //gets the logged in user in order to display the correct 
    async getUser() {
        try {
            this.setState({loading: true});
            if (this.state.loggedInUserId){

                const url = '/users/' + this.state.loggedInUserId;

                const response = await api.get(url);

                const user = new User(response.data);

                this.setState({loggedInUser: user});
                localStorage.setItem("userAvatar", user.avatarNr);
            }


            else{
                const user = new User()
                this.setState({loggedInUser: user})
            }
            this.setState({loading: false});
        } catch (e) {
            alert(`Something went wrong while displaying the avatar: \n${handleError(e)}`);
        }
    }


    async getFilteredLocations(){
        try {
            const requestBody = JSON.stringify({
                fountains: localStorage.getItem('showFountains'),
                fireplaces: localStorage.getItem('showFireplaces'),
                recyclingStations: localStorage.getItem('showRecyclingStations'),
                toilets: localStorage.getItem('showToilets'),
                tableTennis: localStorage.getItem('showTableTennis'),
                bench: localStorage.getItem('showBenches')
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

    getCoordinates(position) {
        this.setState({
            currentPosition: [position.coords.latitude, position.coords.longitude],
            currentCenter: [position.coords.latitude, position.coords.longitude]
        })
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        }
        else if (sessionStorage.getItem('alerted') !== true) {
            sessionStorage.setItem('alerted', true);
            alert("Geolocation is not supported by this browser.");
        }
    }

    handleLocationError(error){
        switch(error.code) {
            case error.PERMISSION_DENIED:
                localStorage.setItem('alerted', true);
                alert ("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                localStorage.setItem('alerted', true);
                alert ("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                localStorage.setItem('alerted', true);
                alert ("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                localStorage.setItem('alerted', true);
                alert ("An unknown error occurred.");
                break;
        }
    }

    render(){
        return (<div>
            {!this.state.locationsShown ? (<Container><Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading Map...
            </Button></Container>) : (<div style={{ width: "100vw", height: "100vh" }}>
            <MapService
                currentLocation = {this.state.currentPosition}
                currentCenter = {this.state.currentCenter}
                locationsShown={this.state.locationsShown}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDdG-nTEZ_bGS064sMlgL_dBdA4uZ2h5c0`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                loggedInUser={this.state.loggedInUser}
            >
            </MapService>
            </div>)}
            <Header/>
            <Sidebar getFilteredLocations={this.getFilteredLocations.bind(this)} avatarNr={this.state.loggedInUser.avatarNr}/>
        </div>
        );
    }
}
export default withRouter(Map);
