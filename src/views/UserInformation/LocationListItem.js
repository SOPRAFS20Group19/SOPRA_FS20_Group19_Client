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
import TableTennisCircle from "../MapMarkers/PingPongCircle.png"
import ToiletCircle from "../MapMarkers/PublicToiletCircle.png"
import BenchCircle from "../MapMarkers/BenchCircle.png"
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
  margin-bottom: 15px;
  justify-content: left;
  @media only screen and (max-width: 700px){
    grid-column-gap: 8px
  }
  
  
`;

const IconContainer = styled.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  height: 70px;
  width: 70px;
  @media only screen and (max-width: 500px){
    height: 45px;
    width: 45px;
  }
  `;

const Title = styled.div`
  font-weight: bolder;
  font-size: 15px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  grid-column: 2;
  grid-row: 1;
  min-width: 400px;
  @media only screen and (max-width: 700px){
    font-size: 13px
    min-width: 300px;
  }
  @media only screen and (max-width: 500px){
    font-size: 11px
    min-width: 200px;
  }
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
  height: 42.375px;
  width: 47.325px;
  @media only screen and (max-width: 500px){
    height: 31.8px;
    width: 35.5px;
  }
`;

const InfoPageButton = styled.button`
  background: transparent;
  font-weight: normal;
  font-size: 13px;
  border: 0px solid transparent;
  border-radius: 1px;
  color: black;
  padding-left: 0px;
  text-align: left;
  @media only screen and (max-width: 700px){
    font-size: 10px;
    height: 25px;
    border: 0px solid transparent;
  }
  @media only screen and (max-width: 400px){
    font-size: 8px;
  }
  &:hover {
    transform: translateY(-2px);
  }
  text-transform: uppercase;
  width: ${props => props.width || null};
  height: 35px;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  transition: all 0.3s ease;
`;

export default class LocationListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            liked: true,
            redirectTo: '/map/informationpage/' + this.props.location.id
        };
    }

    //returns the image to be rendered according to the type
    getImage(){
        if (this.props.location.locationType === 'FIREPLACE'){
            return FireplaceCircle;
        }else if (this.props.location.locationType === 'FOUNTAIN'){
            return FountainCircle;
        } else if (this.props.location.locationType === 'RECYCLING_STATION'){
            return RecyclingCircle;
        }else if (this.props.location.locationType === 'TOILET'){
            return ToiletCircle;
        }else if (this.props.location.locationType === 'TABLE_TENNIS'){
            return TableTennisCircle;
        }else if (this.props.location.locationType === 'BENCH'){
            return BenchCircle;
        }
    }

    //returns the string to be rendered according to the type
    getTypeAsString(){
        if (this.props.location.locationType === 'FIREPLACE'){
            return "FIREPLACE";
        }else if (this.props.location.locationType === 'FOUNTAIN'){
            return "FOUNTAIN";
        }else if (this.props.location.locationType  === 'RECYCLING_STATION'){
            return "RECYCLING";
        }else if (this.props.location.locationType  === 'TOILET'){
            return "TOILET";
        }else if (this.props.location.locationType  === 'TABLE_TENNIS'){
            return "TABLE TENNIS";
        }else if (this.props.location.locationType  === 'BENCH'){
            return "BENCH";
        }
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
                    <img src={this.getImage()} alt={this.getTypeAsString()} width="100%" height="100%"/>
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
                        <img src={HeartUnfilled} alt="Heart Empty" height="100%" width="100%"
                             onClick={() => {
                                 this.changeColor(true);
                             }}
                        />
                        :
                        <img src={HeartRed} alt="Heart Full" height="100%" width="100%"
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