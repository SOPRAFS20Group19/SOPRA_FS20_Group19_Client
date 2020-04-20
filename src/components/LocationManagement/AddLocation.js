import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import { Button } from '../../views/design/Button';
import { withRouter } from 'react-router-dom';
import Header from "../../views/Header";
import SidebarInfoAndAddLocation from "../../views/InformationPage/SidebarInfoAndAddLocation";

const Container = styled(BaseContainer)`
  color: white;
  text-align: center;
  flex-direction: column;
`;

const Label = styled.label`
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const InputField = styled.input`
  &::placeholder {
    color: rgba(255, 255, 255, 1.0);
  }
  height: 35px;
  width: 300px;
  padding-left: 15px;
  margin-left: 15px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

// This component is responsible for the edit profile page
class AddLocation extends React.Component {
    constructor() {
        super();
        this.state = {
            latitude: null,
            longitude: null
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
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
            <BaseContainer>
            <Header/>
            <SidebarInfoAndAddLocation/>
                <Button onClick={() => {this.getLocation();}}>Get Current Coordinates</Button>
                <p>Latitude: {this.state.latitude}</p>
                <p>Longitude: {this.state.longitude}</p>
            </BaseContainer>
        );
    }
}

export default withRouter(AddLocation);
