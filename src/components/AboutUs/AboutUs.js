import React from 'react';
import styled from 'styled-components';
import {BaseContainer} from '../../helpers/layout';
import {api, handleError} from '../../helpers/api';
import {withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "../../views/AboutUs/Carousel"
//import { Carousel } from 'react-responsive-carousel';
import HeaderForAboutUs from "../../views/AboutUs/HeaderForAboutUs";
import LogoutIcon from "../../views/variables/LogoutIcon.svg"
const BackgroundContainer = styled(BaseContainer)`
  min-height: 620px;
`;

const MainContainer = styled.div`
  color: #94BFE9;
  background: #94BFE9;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  display: block;
  justify-content: center;
`;


const Container2 = styled.div`
  width: 100%;
  padding-top: 2%;
  padding-left: 20%;
  padding-right: 20%;
  left: 0%;
  background: #94BFE9;
  @media only screen and (max-width: 500px){
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const BackgroundContainerAboutUs = styled.div`
   background-color: #94BFE9;
   width: 100%;
   height: 100%;
   background-repeat: repeat;
   justify-content: center;
   display: block;
`;

const ButtonContainer = styled.div`
  display: top-right;
  justify-content: top-right;
  margin-top: 0px;
  min-width: 240px;
`;

const ReturnToMapButton = styled.div`
  &:hover {
    transform: translateY(-2px);
  }
  padding: 0px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  transition: all 0.3s ease;
`;

const Text= styled.div`
  text-align: center;
  font-size: 12px;
  color: black;
`;

// This component is responsible for the about us page
class AboutUs extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <MainContainer>
            <BackgroundContainerAboutUs>
                <HeaderForAboutUs/>
                <ButtonContainer>
                    <ReturnToMapButton
                        onClick={() => {
                            this.props.history.push(`/map`);
                        }}
                    >
                        <img src={LogoutIcon} width="4%" heigth= "4%"/>
                    </ReturnToMapButton>
                </ButtonContainer>
                <Container2>
                <Carousel/>
                </Container2>
                <Text>
                    KNOW YOUR CITY was built as a SoPra project at the University of Zurich in FS20.
                    <br/>
                    Idea and realization by group 19: Lena, Luca, Luis, Maximilian and Tim.
                    <br/>
                    Contact: knowyourcity@gmx.ch
                    <br/>
                    We thank the whole SoPra team for their tips and trick, especially our tutor Anja.
                </Text>
            </BackgroundContainerAboutUs>
            </MainContainer>

        )
    }
}

export default withRouter(AboutUs);