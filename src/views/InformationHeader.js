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
  left: 0%;
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
            
        };
    }

    //returns the image to be rendered according to the type
    getImage(){
        if (this.props.type === 'FIREPLACE'){
            return FireplaceClipart;
        }else if (this.props.type === 'FOUNTAIN'){
            return FountainClipart;
        }
        return RecyclingClipart;
    }

    //returns the string to be rendered according to the type
    getTypeAsString(){
        if (this.props.type === 'FIREPLACE'){
            return "Fireplace";
        }else if (this.props.type === 'FOUNTAIN'){
            return "Fountain";
        }
        return "Recycling station";
    }

    render(){
        return (
                    <Container>
                        <PictureContainer>
                            <img src={this.getImage()} alt={this.getTypeAsString()} width='80%'/>
                        </PictureContainer>
                        <Title>
                            {this.getTypeAsString()}
                        </Title>
                    </Container>
        
                )
            }

        }


export default withRouter(InformationHeader);
