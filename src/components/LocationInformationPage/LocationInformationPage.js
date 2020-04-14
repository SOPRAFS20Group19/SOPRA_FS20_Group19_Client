import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import { Button } from '../../views/design/Button';
import { withRouter } from 'react-router-dom';
import SidebarInfoAndAddLocation from "../../views/SidebarInfoAndAddLocation";
import LocationInformation from "../../views/LocationInformation";
import LocationRating from "../../views/LocationRating";
import Chatbox from "../../views/Chatbox";
import InformationPageFavourite from "../../views/InformationPageFavourite";
import LocationPictures from "../../views/LocationPictures";
import InformationHeader from "../../views/InformationHeader";

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
class LocationInformationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locationToBeShown: null
        };
        //this.getCurrentLocation();
    }

    // Get all the needed Information about the selected Location

    /*
    async getCurrentLocation() {
        try {
            const url = '/locations/' + this.props.match.params.id;

            const response = await api.get(url);
            // delays continuous execution of an async operation for 1 second.
            // This is just a fake async call, so that the spinner can be displayed
            // feel free to remove it :)
            //await new Promise(resolve => setTimeout(resolve, 1000));

            // Get the returned users and update the state.
            this.setState({ locationToBeShown: response.data });

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

     */

    // Get the chat box for the current Location
    getchat() {
    }

    // renders the page
    render() {
        return (
            <BaseContainer>
                <SidebarInfoAndAddLocation/>
                <LocationInformation/>
                <LocationRating/>
                <Chatbox/>
                <InformationPageFavourite/>
                <LocationPictures/>
                <h2>URL: {this.props.match.params.locationId}</h2>
            </BaseContainer>
        );
    }
}

export default withRouter(LocationInformationPage);
