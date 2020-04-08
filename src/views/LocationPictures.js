import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import {Button} from "./design/Button";

const Container = styled.div`
  height: 43%;
  width: 43%;
  display: flex;
  justify-content: top;
  align-items: left;
  position: absolute;
  top: 20%;
  left:56%;
  flex-direction: column;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: large;
  position: absolute;
  top: 0%;
  left: 0%;
`;

const PictureContainer = styled.div`
  height: 50%;
  width: 50%;
  border-color: black;
  border-width: normal;
  border-style: dotted;
  display: flex;
  justify-content: top;
  align-items: left;
  position: absolute;
  top: 12%;
  left: 5%;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  height: 43%;
  width: 43%;
  display: flex;
  justify-content: top;
  align-items: left;
  position: absolute;
  top: 66%;
  left:17%;
  flex-direction: column;
`;



class LocationPictures extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    //saves the added picture
    savePicture(){
        //implement the save picture method
    }

    render(){
        return(
            <Container>
                <Text>
                    This Location does not have a picture yet. Upload one now!
                </Text>
                <PictureContainer>
                </PictureContainer>
                <ButtonContainer>
                    <Button
                        width="60%"
                        onClick={() => {
                            this.savePicture();
                        }}>
                        Save Picture

                    </Button>
                </ButtonContainer>
            </Container>
        )
    }
}

export default withRouter(LocationPictures);