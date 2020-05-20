import styled from "styled-components";
import React from "react";
import {withRouter} from "react-router-dom";
import {api, handleError} from "../../helpers/api";
import LocationListItem from "./LocationListItem";
import Spinner from "react-bootstrap/Spinner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1;
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
  @media only screen and (max-width: 700px){
    font-size: 20px
  }
  @media only screen and (max-width: 500px){
    font-size: 15px
  }
`;

const ListContainer = styled.div`
  max-height: 225px;
  overflow: scroll;
  width: 100%;
`;

const LocationsList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const LocationContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: center;
`;


class SavedLocations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteLocations: null
        };
        this.getFavoriteLocations();
    }

    goToInfoPageSavedLocations(locationId){
        this.props.history.push(`/map/informationpage/` + locationId);
    }

    async getFavoriteLocations(){
        try {
            const url = '/locations/favorites/' + this.props.userId;

            const response = await api.get(url);
            this.setState({favoriteLocations: response.data});
        } catch (e) {
            alert(`Something went wrong while getting the favorite locations: \n${handleError(e)}`);
        }
    }

    refreshPage(){
        window.location.reload();
    }

    render(){
        return (
            <Container>
                <Title>
                    SAVED LOCATIONS
                </Title>
                {!this.state.favoriteLocations ? (<Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>) : (
                    <ListContainer>
                        <LocationsList>
                            {this.state.favoriteLocations.map(location => {
                                    return (
                                        <LocationContainer key={location.id}>
                                            <LocationListItem location={location} refreshPage={this.refreshPage.bind(this)} goToInfoPageSavedLocations={this.goToInfoPageSavedLocations.bind(this)}/>
                                        </LocationContainer>
                                    );
                            })}
                        </LocationsList>
                    </ListContainer>
                )}
            </Container>
        )
    }

}


export default withRouter(SavedLocations);