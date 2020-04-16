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
import Location from "../shared/models/Location";
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
            locationToBeShown: new Location()
        };
        this.getCurrentLocation();
    }

    // Get all the needed Information about the selected Location

    
    async getCurrentLocation() {
        try {
            const url = '/locations/' + this.props.match.params.locationId;
            const response = await api.get(url);

            const location = new Location(response.data);
            // Get the returned location and update the state.
            this.setState({ locationToBeShown: location});

            // See here to get more data.
            console.log(response);
        } catch (error) {
            alert(`Something went wrong while fetching the locations: \n${handleError(error)}`);
        }
    }

     

    // Get the chat box for the current Location
    getchat() {
    }

    // renders the page
    render() {
        return (
            <BaseContainer>
                <InformationHeader type={this.state.locationToBeShown.locationType}/>
                <SidebarInfoAndAddLocation/>
                <LocationInformation id={this.state.locationToBeShown.id} coordinates={this.state.locationToBeShown.coordinates}/>
                <LocationRating/>
                <Chatbox/>
                <InformationPageFavourite/>
                <LocationPictures/>
            </BaseContainer>
        );
    }
}

export default withRouter(LocationInformationPage);
