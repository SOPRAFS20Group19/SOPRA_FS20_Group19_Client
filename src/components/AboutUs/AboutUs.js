import React from 'react';
import styled from 'styled-components';
import {BaseContainer} from '../../helpers/layout';
import {api, handleError} from '../../helpers/api';
import {withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "../../views/AboutUs/Carousel"
//import { Carousel } from 'react-responsive-carousel';
import HeaderForLogin from "../../views/UserInformation/HeaderForLogin";
const BackgroundContainer = styled(BaseContainer)`
  min-height: 620px;
`;

const MainContainer = styled.div`
  color: black;
  flex-direction: row;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto auto;
  justify-content: center;
  grid-column-gap: 30px;
  @media only screen and (max-width: 1215px){
    grid-column-gap: 20px;
  }
  
  @media only screen and (max-width: 900px){
    max-width: 800;
  }
  @media only screen and (max-width: 500px){
    max-width: 600;
    display: block;
  }
`;

const Container = styled.div`
  color: black;
  flex-direction: row;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto auto;
  justify-content: center;
  grid-column-gap: 30px;
`;

const Container2 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 1;
  margin-top: 15px;
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

// this component is responsible for the user profile
class AboutUs extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <MainContainer>
            <BackgroundContainer className={'html'}>
                <HeaderForLogin/>
                <Container>
                <Container2>
                <Carousel />
                </Container2>
                </Container>
            </BackgroundContainer>
            </MainContainer>

        )
    }
}

export default withRouter(AboutUs);