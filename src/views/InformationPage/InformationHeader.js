import React from "react";
import styled from "styled-components";
import {withRouter} from 'react-router-dom';
import FireplaceCircle from "../MapMarkers/FireplaceCircle.png"
import RecyclingCircle from "../MapMarkers/RecyclingCircle.png"
import FountainCircle from "../MapMarkers/FountainCircle.png"
import TableTennisCircle from "../MapMarkers/PingPongCircle.png"
import ToiletCircle from "../MapMarkers/PublicToiletCircle.png"
import BenchCircle from "../MapMarkers/BenchCircle.png"
import InformationPageFavourite from "./InformationPageFavourite";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  justify-content: start;
  flex-direction: row;
  grid-column: 1;
  grid-row: 1;
  margin-top: 10px;
  margin-left: 20px;
  align-content: center;
`;

const Picture = styled.div`
  height: 120px;
  width: 120px;
  grid-column: 1;
  grid-row: 1 / span 2;
  margin-top: 10px
  @media only screen and (max-width: 700px){
    height: 100px;
    width: 100px;
  }
  @media only screen and (max-width: 500px){
    height: 80px;
    width: 80px;
  }
`;


const Title = styled.div`
  font-size: 40px;
  margin-left: 30px;
  margin-top: 5px;
  font-weight: bolder;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  text-transform: uppercase;
  grid-column: 2;
  grid-row: 1;
  @media only screen and (max-width: 700px){
    font-size: 30px;
    margin-top: 8px;
  }
  @media only screen and (max-width: 500px){
    font-size: 25px
  }
`;

class InformationHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    //returns the image to be rendered according to the type
    getImage() {
        if (this.props.type === 'FIREPLACE') {
            return FireplaceCircle;
        } else if (this.props.type === 'FOUNTAIN') {
            return FountainCircle;
        } else if (this.props.type === 'RECYCLING_STATION') {
            return RecyclingCircle;
        } else if (this.props.type === 'TOILET') {
            return ToiletCircle;
        } else if (this.props.type === 'TABLE_TENNIS') {
            return TableTennisCircle;
        } else if (this.props.type === 'BENCH') {
            return BenchCircle;
        }
    }

    //returns the string to be rendered according to the type
    getTypeAsString() {
        if (this.props.type === 'FIREPLACE') {
            return "FIREPLACE";
        } else if (this.props.type === 'FOUNTAIN') {
            return "FOUNTAIN";
        } else if (this.props.type === 'RECYCLING_STATION') {
            return "RECYCLING";
        } else if (this.props.type === 'TOILET') {
            return "TOILET";
        } else if (this.props.type === 'TABLE_TENNIS') {
            return "TABLE TENNIS";
        } else if (this.props.type === 'BENCH') {
            return "BENCH";
        }
    }

    render() {
        return (
            <Container>
                <Picture>
                    <img src={this.getImage()} alt={this.getTypeAsString()} width="100%" height="100%"/>
                </Picture>
                <Title>
                    {this.getTypeAsString()}
                </Title>
                <InformationPageFavourite locationId={this.props.locationId}/>
            </Container>

        )
    }

}


export default withRouter(InformationHeader);
