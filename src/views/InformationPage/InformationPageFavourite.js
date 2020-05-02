import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import HeartEmpty from "../variables/HeartEmpty.svg";
import HeartFull from "../variables/HeartFull.svg";
import HeartUnfilled from "./HeartUnfilled.png"
import HeartRed from "./HeartRed.png"
import {api, handleError} from "../../helpers/api";
import LocationListItem from "../UserInformation/LocationListItem";
import Spinner from "react-bootstrap/Spinner";
import Location from "../../components/shared/models/Location";
import {Checkbox} from "../Filter/Checkbox";


const Container2 = styled.div`
  display: grid;
  height: 100px;
  grid-template-columns: 100px 475px;
  grid-template-rows: auto;
  justify-content: left;
  align-items: left;
  grid-column: 1;
  grid-row: 1;
  margin-top: 10px;
`;

const Container = styled.div`
  display: grid;
  height: 100px;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-content: left;
  align-items: left;
  grid-column: 2;
  grid-row: 1;
  margin-top: 10px;
 
`;

const ImageContainer= styled.div`
  height: 10%;
  width: 10%;
  justify-content: top;
  align-items: left;
  grid-column: 1;
  grid-row: 1;
`;

const TextContainer= styled.div`
  font-weight: normal;
  font-size: large;
  display: flex;
  justify-content: top;
  align-items: left;
  flex-direction: column;
  grid-column: 2;
  grid-row: 1;
`;


class InformationPageFavourite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            locationId: null
        };
        this.checkFavoriteLocations();
    }

    async checkFavoriteLocations(){
        try {
            const url = '/locations/favorites/' + localStorage.getItem('userId') + '/' + this.props.locationId;

            const response = await api.get(url);
            const location = new Location(response.data);
            if (location.id !== null) {
                this.setState({locationId: location.id});
            }
            else {
                this.setState({locationId: 1});
            }
        } catch (e) {
            alert(`Something went wrong while checking if this location belongs to the favorites: \n${handleError(e)}`);
        }
    }

    //Changes the color of the heart and saves favourite
    changeColor(value){
        this.setState({liked: value });
        this.setState({locationId: 1 });
        if (value === true){
            this.saveToFavorites();
        }
        else {
            this.deleteFromFavorites();
        }
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

    // this.state.locationId == this.props.locationId nicht zu === ändern!!!
    render() {
        return (
            <div>
                {this.state.locationId === null ? null : (
            <Container>
                {this.state.locationId == this.props.locationId ? (
                    <Container2>
                    <ImageContainer>
                        <img src={HeartRed} alt="Heart Full" height="56.5px" width="63.1px"
                             onClick={() => {
                                 this.changeColor(false);
                             }}
                        />
                    </ImageContainer>
                    <TextContainer>
                    Press the heart to delete this location from your favourites
                    </TextContainer>
                    </Container2>
                ) : (
                    <Container2>
                <ImageContainer>
                    {this.state.liked === false ?
                        <img src={HeartUnfilled} alt="Heart Empty" height="56.5px" width="63.1px"
                             onClick={() => {
                                 this.changeColor(true);
                             }}
                        />
                        :
                        <img src={HeartRed} alt="Heart Full" height="56.5px" width="63.1px"
                             onClick={() => {
                                 this.changeColor(false);
                             }}
                        />
                    }
                </ImageContainer>
                    {this.state.liked === false ?
                        <TextContainer>
                        Press the heart to save this location to your favourites
                        </TextContainer>
                        :
                        <TextContainer>
                        Press the heart to delete this location from your favourites
                        </TextContainer>
                    }
                    </Container2>
                    )}
            </Container>
                )}
            </div>
        );
    }
}

export default withRouter(InformationPageFavourite);