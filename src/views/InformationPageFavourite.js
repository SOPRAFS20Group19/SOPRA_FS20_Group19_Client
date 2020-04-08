import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import HeartEmpty from "./HeartEmpty.svg";
import HeartFull from "./HeartFull.svg";


const Container = styled.div`
  height: 10%;
  width: 40%;
  display: flex;
  justify-content: top;
  align-items: left;
  position: absolute;
  top: 0%;
  left:46%;
  flex-direction: column;
`;

const ImageContainer= styled.div`
  height: 5%;
  width: 5%;
  display: flex;
  justify-content: top;
  align-items: left;
  position: absolute;
  top: 0%;
  left:0%;
  flex-direction: column;
`;

const TextContainer= styled.div`
  height: 5%;
  width: 150%;
  font-weight: normal;
  font-size: large;
  display: flex;
  justify-content: top;
  align-items: left;
  position: absolute;
  top: 65%;
  left: 6%;
  flex-direction: column;
`;


class InformationPageFavourite extends React.Component {
    constructor() {
        super();
        this.state = {
            liked: false,
        }
    }

    //Changes the color of the heart and saves favourite
    changeColor(value){
        this.setState({['liked']: value });
    }

    render() {
        return (
            <Container>
                <ImageContainer>
                    {this.state.liked == false ?
                        <img src={HeartEmpty} alt="Hearth Empty"
                             onClick={() => {
                                 this.changeColor(true);
                             }}
                        />
                        :
                        <img src={HeartFull} alt="Hearth Full"
                             onClick={() => {
                                 this.changeColor(false);
                             }}
                        />
                    }
                </ImageContainer>
                    {this.state.liked == false ?
                        <TextContainer>
                        Press the heart to save this location to your favourites
                        </TextContainer>
                        :
                        <TextContainer>
                        Press the heart to delete this location from your favourites
                        </TextContainer>
                    }
            </Container>
        );
    }
}

export default withRouter(InformationPageFavourite);