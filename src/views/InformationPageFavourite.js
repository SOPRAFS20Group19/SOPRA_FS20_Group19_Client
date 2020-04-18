import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import HeartEmpty from "./HeartEmpty.svg";
import HeartFull from "./HeartFull.svg";
import HeartUnfilled from "../views/InformationPage/HeartUnfilled.png"
import HeartRed from "../views/InformationPage/HeartRed.png"


const Container = styled.div`
  display: grid;
  height: 100px;
  grid-template-columns: 100px 475px;
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
            </Container>
        );
    }
}

export default withRouter(InformationPageFavourite);