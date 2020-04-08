import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import FireplaceClipart from "./FireplaceClipart.png";
import RecyclingClipart from "./RecyclingClipart.png";
import FountainClipart from "./FountainClipart.png";

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
    constructor() {
        super();
        this.state = {
            location: 'fountain',
        }
    }
    render(){
        if(this.state.location=='fireplace'){
            return(
                <Container>
                    <PictureContainer>
                        <img src={FireplaceClipart} alt="Fireplace"/>
                    </PictureContainer>
                    <Title>
                        Fireplace
                    </Title>
                </Container>
            )
        }
        else if(this.state.location=='fountain'){
            return(
                <Container>
                    <PictureContainer>
                        <img src={FountainClipart} alt="Fountain"/>
                    </PictureContainer>
                    <Title>
                        Fountain
                    </Title>
                </Container>
            )
        }
        else{
            return(
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
}

export default withRouter(InformationHeader);
