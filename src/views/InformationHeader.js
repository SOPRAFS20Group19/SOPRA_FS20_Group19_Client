import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import FireplaceClipart from "./FireplaceClipart.png";
import RecyclingClipart from "./RecyclingClipart.png";
import FountainClipart from "./FountainClipart.png";
import {api, handleError} from "../helpers/api";
import {Spinner} from "./design/Spinner";

const Container = styled.div`
  height: 25%;
  width: 40%;
  display: flex;
  justify-content: top;
  align-items: left;
  position: absolute;
  top: 2%;
  left: 2%;
  flex-direction: column;
`;

const PictureContainer = styled.div`
  object-fit: scale-down:
  display: block;
  justify-content: top;
  align-items: left;
  position: absolute;
  top: 0%;
  left: 3%;
`;


const Title = styled.div`
  font-weight: bolder;
  font-size: xxx-large;
  position: absolute;
  top: 4%;
  left: 20%;
`;

class InformationHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locationToBeShown: null,
            locationtype : null
        };
        //this.getCurrentLocation();
    }
    // Get all the needed Information about the selected Location
   /*
    async getCurrentLocation() {
        try {
            const url = '/locations/' + this.props.match.params.locationId;
            const response = await api.get(url);
            this.setState({ locationToBeShown: response.data});
            //this.setState({ locationtype: response.data.locationType});
        } catch (error) {
            alert(`Something went wrong while fetching the locations: \n${handleError(error)}`);
        }
    }

    render(){
            if (localStorage.getItem("location_type") === 'FIREPLACE') {
                return (
                    <Container>
                        <PictureContainer>
                            <img src={FireplaceClipart} alt="Fireplace"/>
                        </PictureContainer>
                        <Title>
                            Fireplace
                        </Title>
                    </Container>
                )
            } else if (this.state.locationToBeShown.locationType === 'FOUNTAIN') {
                return (
                    <Container>
                        <PictureContainer>
                            <img src={FountainClipart} alt="Fountain"/>
                        </PictureContainer>
                        <Title>
                            Fountain
                        </Title>
                    </Container>
                )
            } else {
                return (
                    <Container>
                        <PictureContainer>
                            <img src={RecyclingClipart} alt="Recycling"/>
                        </PictureContainer>
                        <Title>
                            Recycling Station
                        </Title>
                    </Container>
                )
            }

        }

    */
    }


export default withRouter(InformationHeader);
