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
  flex-direction: row;
  width: 100%;
  display: center;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto auto;
  justify-content: center;
  grid-column-gap: 30px;
  
  @media only screen and (max-width: 900px){
    width: 50%;
  }
  @media only screen and (max-width: 500px){
    grid-template-columns: auto;
    width: 200%;
    display: center;
    grid-column-gap: 0px;
    justify-content: center;
  }
`;

const Container = styled.div`
  color: #94BFE9;
  flex-direction: row;
  width: 80%;
  height: 20%;
  display: center;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto auto;
  justify-content: center;
  grid-column-gap: 30px;
  margin-left: 10px;
  margin-right: 10px;
  @media only screen and (max-width: 1215px){
    grid-column-gap: 20px;
  }
  
  @media only screen and (max-width: 900px){
    max-width: 800;
  }
  @media only screen and (max-width: 500px){
    width: 50%;
    height: 20%;
    display: center;
    grid-template-columns: auto;
  }
`;

const Container2 = styled.div`
  height: flex;
  width: 70%;
  display: center;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 265px;
  margin-right: 0px;
  grid-column: 1;
  grid-row: 1;
  margin-top: 5px;
  @media only screen and (max-width: 1215px){
    grid-column-gap: 20px;
  }
  
  @media only screen and (max-width: 900px){
    max-width: 800;
  }
  @media only screen and (max-width: 500px){
    display: center;
  }
`;

const Container3 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 2;
  grid-row: 1;
  margin-top: 15px;
`;

const FormContainer = styled.div`
  margin-top: 50em;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 300px;
  justify-content: center;
  max-width: 100px;
`;

const BackgroundContainerAboutUs = styled.div`
   background-color: #94BFE9;
   width: 100%;
   height: 100%;
   background-repeat: repeat;
   display: center;
   @media only screen and (max-width: 1215px){
    grid-column-gap: 20px;
  }
  
  @media only screen and (max-width: 900px){
    max-width: 800;
  }
  @media only screen and (max-width: 500px){
    max-width: 600;
    display: center;
    width: 100%;
    height: 130%;
  }

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
                        <img src={LogoutIcon} width="2%" heigth= "2%"/>
                    </ReturnToMapButton>
                </ButtonContainer>
                <Container>
                <Container2>
                <Carousel />
                </Container2>
                </Container>
            </BackgroundContainerAboutUs>
            </MainContainer>

        )
    }
}

export default withRouter(AboutUs);