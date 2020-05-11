import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import FireplaceClipart from "../Map/FireplaceClipart.png";
import RecyclingClipart from "../Map/RecyclingClipart.png";
import FountainClipart from "../Map/FountainClipart.png";
import FireplaceCircle from "../MapMarkers/FireplaceCircle.png"
import RecyclingCircle from "../MapMarkers/RecyclingCircle.png"
import FountainCircle from "../MapMarkers/FountainCircle.png"
import TableTennisCircle from "../MapMarkers/PingPongCircle.png"
import ToiletCircle from "../MapMarkers/PublicToiletCircle.png"
import BenchCircle from "../MapMarkers/BenchCircle.png"
import {api, handleError} from "../../helpers/api";
import {Spinner} from "../variables/Spinner";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  grid-column: 1;
  grid-row: 1;
  margin-top: 10px;
  margin-left: 20px;
  align-content: left;
`;

const PictureContainer = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: row;
`;

const Picture = styled.div`
  height: 120px;
  width: 120px;
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
  font-weight: bolder;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  text-transform: uppercase;
  @media only screen and (max-width: 700px){
    font-size: 30px
  }
  @media only screen and (max-width: 500px){
    font-size: 25px
  }
`;

class InformationHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    //returns the image to be rendered according to the type
    getImage(){
        if (this.props.type === 'FIREPLACE'){
            return FireplaceCircle;
        }else if (this.props.type === 'FOUNTAIN'){
            return FountainCircle;
        } else if (this.props.type === 'RECYCLING_STATION'){
            return RecyclingCircle;
        }else if (this.props.type === 'TOILET'){
            return ToiletCircle;
        }else if (this.props.type === 'TABLE_TENNIS'){
            return TableTennisCircle;
        }else if (this.props.type === 'BENCH'){
            return BenchCircle;
        }
    }

    //returns the string to be rendered according to the type
    getTypeAsString(){
        if (this.props.type === 'FIREPLACE'){
            return "FIREPLACE";
        }else if (this.props.type === 'FOUNTAIN'){
            return "FOUNTAIN";
        }else if (this.props.type === 'RECYCLING_STATION'){
            return "RECYCLING";
        }else if (this.props.type === 'TOILET'){
            return "TOILET";
        }else if (this.props.type === 'TABLE_TENNIS'){
            return "TABLE TENNIS";
        }else if (this.props.type === 'BENCH'){
            return "BENCH";
        }
    }

    render(){
        return (
                    <Container>
                        <PictureContainer>
                            <Picture>
                            <img src={this.getImage()} alt={this.getTypeAsString()} width="100%" height="100%"/>
                            </Picture>
                            <Title>
                                {this.getTypeAsString()}
                            </Title>
                        </PictureContainer>
                    </Container>
        
                )
            }

        }


export default withRouter(InformationHeader);
