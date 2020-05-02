import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import {Button} from "../variables/Button";

const Container = styled.div`
  display: flex;
  justify-content: top;
  align-items: left;
  flex-direction: column;
  grid-column: 2;
  grid-row: 2 / span 2;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: large;
  
`;

const PictureContainer = styled.div`
  min-height: 200px;
  width: 90%;
  margin-top: 10px;
  border-color: black;
  border-width: normal;
  border-style: dotted;
  justify-content: top;
  align-items: left;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: top;
  align-items: left;
  flex-direction: column;
  margin-top: 10px;
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