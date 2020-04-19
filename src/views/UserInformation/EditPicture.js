import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import {Button} from "../../views/design/Button";


const Container = styled.div`
  display: flex;
  justify-content: top;
  flex-direction: column;
  grid-column: 2;
  grid-row: 2 /span 3;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: large;
  
`;

const PictureContainer = styled.div`
  min-height: 200px;
  width: 30%;
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



class EditPicture extends React.Component {
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
                    upload a profile picture if you want!
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

export default withRouter(EditPicture);