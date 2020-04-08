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
    constructor() {
        super();
        this.state = {
        };
    }

    // Get all the needed Information about the selected Location
    getCurrentLocation() {
    }

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
            </BaseContainer>
        );
    }
}

export default withRouter(LocationInformationPage);
