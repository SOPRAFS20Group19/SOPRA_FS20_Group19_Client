import styled from "styled-components";
import React from "react";
import {Redirect, withRouter} from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import {api, handleError} from "../../helpers/api";
import User from "../../components/shared/models/User";
import {Spinner} from "../variables/Spinner";
import FireplaceCircle from "../MapMarkers/FireplaceCircle.png"
import RecyclingCircle from "../MapMarkers/RecyclingCircle.png"
import FountainCircle from "../MapMarkers/FountainCircle.png"
import HeartUnfilled from "../InformationPage/HeartUnfilled.png"
import HeartRed from "../InformationPage/HeartRed.png"
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {Button} from "../variables/Button";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: 20px;
  align-content: left;
  margin-top: 15px;
  justify-content: left;
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
  min-width: 400px;
`;

const ButtonContainer = styled.div`
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

const InfoPageButton = styled(Button)`
  background: transparent;
  font-weight: normal;
  font-size: normal;
  border: 0px solid black;
  border-radius: 1px;
  color: black;
  padding-left: 0px;
  text-align: left;
`;

export default class LocationListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            liked: true,
            redirectTo: '/map/informationpage/' + this.props.location.id
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

    //Changes the color of the heart and saves favourite
    changeColor(value){
        this.setState({['liked']: value });
        if (value === true){
            this.saveToFavorites();
        }
        else {
            this.deleteFromFavorites();
        }
    }

    async saveToFavorites(){
        try {
            const url = '/locations/favorites/' + localStorage.getItem('userId') + '/' + this.props.location.id;
            await api.put(url);
        } catch (e) {
            alert(`Something went wrong while updating the favorite locations: \n${handleError(e)}`);
        }
    }

    async deleteFromFavorites(){
        try {
            const url = '/locations/favorites/' + localStorage.getItem('userId') + '/' + this.props.location.id;
            await api.delete(url);
            this.props.refreshPage();
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
                <Title>{this.getTypeAsString()} - {this.props.location.address}</Title>
                <ButtonContainer>
                    <InfoPageButton
                        variant="primary"
                        width="100%"
                        onClick={() => {this.props.goToInfoPageSavedLocations(this.props.location.id);}}>
                        Visit the information page of this location
                    </InfoPageButton>
                </ButtonContainer>
                <ImageContainer>
                    {this.state.liked === false ?
                        <img src={HeartUnfilled} alt="Heart Empty" height="42.375px" width="47.325px"
                             onClick={() => {
                                 this.changeColor(true);
                             }}
                        />
                        :
                        <img src={HeartRed} alt="Heart Full" height="42.375px" width="47.325px"
                             onClick={() => {
                                 this.changeColor(false);
                             }}
                        />
                    }
                </ImageContainer>
            </Container>
        )
    }
}