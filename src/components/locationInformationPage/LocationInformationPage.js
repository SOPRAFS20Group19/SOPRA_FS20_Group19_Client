import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import { Button } from '../../views/variables/Button';
import { withRouter } from 'react-router-dom';
import SidebarInfoAndAddLocation from "../../views/InformationPage/SidebarInfoAndAddLocation";
import LocationInformation from "../../views/InformationPage/LocationInformation";
import LocationRating from "../../views/InformationPage/LocationRating";
import Chatbox from "../../views/InformationPage/Chatbox";
import InformationPageFavourite from "../../views/InformationPage/InformationPageFavourite";
import Location from "../shared/models/Location";
import InformationHeader from "../../views/InformationPage/InformationHeader";
import Spinner from "react-bootstrap/Spinner";

const Container1 = styled(BaseContainer)`
  color: black;
  text-align: left;
  justify-content: left;
  flex-direction: row;
`;

const Container =styled.div`
  color: black;
  flex-direction: row;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto 10%;
  grid-template-rows: auto auto auto auto auto;
  justify-content: left;
  grid-column-gap: 30px;
  @media only screen and (max-width: 1215px){
    grid-column-gap: 10px;
  }
  
  @media only screen and (max-width: 900px){
    max-width: 800;
    display: block;
  }
  @media only screen and (max-width: 500px){
    max-width: 500;
    display: block;
  }
`;

const LoadingContainer = styled.div`
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
            locationToBeShown: null,
            location: null,
            additionalInformation: null
        };
        this.getCurrentLocation();
    }

    // Get all the needed Information about the selected Location


    async getCurrentLocation() {
        try {
            const url = '/locations/' + this.props.match.params.locationId;
            const response = await api.get(url);

            const location = new Location(response.data);
            const additionalInformation = response.data.additionalInformation.map((textLine) => <li>{textLine}</li>);
            // Get the returned location and update the state.
            this.setState({ locationToBeShown: location});
            this.setState({ location: response.data, additionalInformation: additionalInformation});

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
            <Container>
                {!this.state.locationToBeShown ? (<LoadingContainer><Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading Location...
                </Button></LoadingContainer>) : (
                    <Container>
                    <InformationHeader type={this.state.locationToBeShown.locationType}/>
                    <InformationPageFavourite locationId={this.props.match.params.locationId}/>
                    <SidebarInfoAndAddLocation avatarNr={localStorage.getItem("userAvatar")} column={3}/>
                    <LocationInformation
                        location={this.state.location}
                        id={this.state.locationToBeShown.id}
                        address={this.state.locationToBeShown.address}
                        information={this.state.additionalInformation}
                        longitude={this.state.locationToBeShown.longitude}
                        latitude={this.state.locationToBeShown.latitude}
                        coordinates={this.state.locationToBeShown.coordinates}
                    />
                    <LocationRating locationId={this.props.match.params.locationId}/>
                    <Chatbox locationId={this.props.match.params.locationId}/>

                    </Container>
                    )}
            </Container>
        );
    }
}

export default withRouter(LocationInformationPage);
