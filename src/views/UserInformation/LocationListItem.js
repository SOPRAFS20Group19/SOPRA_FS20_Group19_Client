import styled from "styled-components";
import React from "react";
import {withRouter} from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import {api, handleError} from "../../helpers/api";
import User from "../../components/shared/models/User";
import {Spinner} from "../design/Spinner";
import FireplaceCircle from "../MapMarkers/FireplaceCircle.png"
import RecyclingCircle from "../MapMarkers/RecyclingCircle.png"
import FountainCircle from "../MapMarkers/FountainCircle.png"
import HeartUnfilled from "../InformationPage/HeartUnfilled.png"
import HeartRed from "../InformationPage/HeartRed.png"

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  align-content: left;
`;

const IconContainer = styled.div`
  grid-column: 1;
  grid-row: 1 / span 2;
`;

const Title = styled.div`
  font-weight: bolder;
  font-size: 15px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  grid-column: 2;
  grid-row: 1;
`;

const Text = styled.div`
  font-weight: normal;
  font-size: normal;
  width: 100%;
  grid-column: 2;
  grid-row: 2;
`;

const ImageContainer= styled.div`
  justify-content: right;
  align-items: right;
  grid-column: 3;
  grid-row: 1 / span 2;
`;

export default class LocationListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            liked: true
        };
    }

    getImage(){
        if (this.props.location.locationType === 'FIREPLACE'){
            return FireplaceCircle;
        }else if (this.props.location.locationType === 'FOUNTAIN'){
            return FountainCircle;
        }
        return RecyclingCircle;
    }

    getTypeAsString(){
        if (this.props.location.locationType === 'FIREPLACE'){
            return "FIREPLACE";
        }else if (this.props.location.locationType === 'FOUNTAIN'){
            return "FOUNTAIN";
        }
        return "RECYCLING";
    }

    async saveToFavorites(){
        try {
            const url = '/locations/favorites/' + localStorage.getItem('userId') + '/' + this.props.locationId;
            await api.put(url);
        } catch (e) {
            alert(`Something went wrong while updating the favorite locations: \n${handleError(e)}`);
        }
    }

    async deleteFromFavorites(){
        try {
            const url = '/locations/favorites/' + localStorage.getItem('userId') + '/' + this.props.locationId;
            await api.delete(url);
        } catch (e) {
            alert(`Something went wrong while updating the favorite locations: \n${handleError(e)}`);
        }
    }

    render(){
        return (
            <Container>
                <IconContainer>
                    <img src={this.getImage()} alt={this.getTypeAsString()} width="60px" height="60px"/>
                </IconContainer>
                <Title>{this.getTypeAsString()} - {this.props.location.id}</Title>
                <Text>Visit the information page of this location</Text>
                <ImageContainer>
                    {this.state.liked === false ?
                        <img src={HeartUnfilled} alt="Heart Empty" height="56.5px" width="63.1px"
                             onClick={() => {
                                 this.changeColor(true);
                                 this.saveToFavorites();
                             }}
                        />
                        :
                        <img src={HeartRed} alt="Heart Full" height="56.5px" width="63.1px"
                             onClick={() => {
                                 this.changeColor(false);
                                 this.deleteFromFavorites();
                             }}
                        />
                    }
                </ImageContainer>
            </Container>
        )
    }

}