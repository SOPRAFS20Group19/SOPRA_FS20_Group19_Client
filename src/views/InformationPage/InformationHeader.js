import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import FireplaceClipart from "../Map/FireplaceClipart.png";
import RecyclingClipart from "../Map/RecyclingClipart.png";
import FountainClipart from "../Map/FountainClipart.png";
import FireplaceCircle from "../MapMarkers/FireplaceCircle.png"
import RecyclingCircle from "../MapMarkers/RecyclingCircle.png"
import FountainCircle from "../MapMarkers/FountainCircle.png"
import TableTennisCircle from "../MapMarkers/Ping Pong Circle.png"
import ToiletCircle from "../MapMarkers/Public Toilet Circle.png"
import BenchCircle from "../MapMarkers/Bench Circle.png"
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


const Title = styled.div`
  font-weight: bolder;
  font-size: 50px;
  margin-left: 30px;
  letter-spacing: 0.25em;
  line-height: 1.1em;
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
                            <img src={this.getImage()} alt={this.getTypeAsString()} width="120px" height="120px"/>
                            <Title>
                                {this.getTypeAsString()}
                            </Title>
                        </PictureContainer>
                    </Container>
        
                )
            }

        }


export default withRouter(InformationHeader);
