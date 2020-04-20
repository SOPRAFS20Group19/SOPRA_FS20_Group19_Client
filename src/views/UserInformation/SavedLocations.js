import styled from "styled-components";
import React from "react";
import {withRouter} from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import {api, handleError} from "../../helpers/api";
import User from "../../components/shared/models/User";
import LocationListItem from "./LocationListItem";
import {Spinner} from "../design/Spinner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / span 2;
  grid-row: 4;
  margin-top: 20px;
  margin-left: 20px;
  align-content: left;
`;

const Title = styled.div`
  font-weight: bolder;
  font-size: 30px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  margin-top: 30px;
`;

class SavedLocations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteLocations: null
        };
        this.getFavoriteLocations();
    }

    async getFavoriteLocations(){
        try {
            const url = '/locations/favorites/' + this.props.userId;

            const response = await api.get(url);

            const locationsList = response.data.favoriteLocations.map((location) => <LocationListItem>location={location}</LocationListItem>);
            this.setState({favoriteLocations: locationsList});
        } catch (e) {
            alert(`Something went wrong while displaying the user profile: \n${handleError(e)}`);
        }


    }

    render(){
        return (
            <Container>
                <Title>
                    SAVED LOCATIONS
                </Title>
                {!this.state.favoriteLocations ? (<Spinner/>) : (
                <ListGroup variant="flush">
                    {this.state.favoriteLocations}
                </ListGroup>
                )}
            </Container>
        )
    }

}


export default withRouter(SavedLocations);