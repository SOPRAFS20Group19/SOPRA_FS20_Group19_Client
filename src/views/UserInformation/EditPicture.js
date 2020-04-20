import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import {Button} from "../../views/design/Button";
import { api, handleError } from '../../helpers/api';



const Container = styled.div`
  display: flex;
  justify-content: top;
  flex-direction: column;
  grid-column: 2;
  grid-row: 3 /span 4;
  margin-top: 15px;

`;

const Text = styled.div`
  font-weight: bold;
  font-size: large;
  
`;

const PictureContainer = styled.div`
  min-height: 200px;
  width: 100%;
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
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: left;
  flex-direction: column;
  margin-top: 10px;
`;



class EditPicture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    //saves the added picture
    savePicture(){
        //implement the save picture method
    }

    fileSelectedHandler = event =>{
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append(this.props.userId, this.state.selectedFile)
        const url = '/users/picture/' + this.state.loggedInUserId;
        try {
            api.put(url, fd);
        }
        catch (e) {
            alert(`Something went wrong while uploading the picture: \n${handleError(e)}`);
        }

    }

    render(){
        return(
            <Container>
                <Text>
                    upload a profile picture if you want!
                </Text>
                <PictureContainer>
                </PictureContainer>
                <input style={{display: 'none'}} type="file" onChange={this.fileSelectedHandler} ref={fileInput => this.fileInput = fileInput}/>
                <ButtonContainer>
                    <Button
                        width="100%"
                        onClick={() => {
                            this.fileInput.click();
                        }}>
                        Pick File
                    </Button>
                </ButtonContainer>
                <ButtonContainer>
                    <Button
                        disabled={!this.fileInput}
                        width="100%"
                        onClick={() => {
                            this.fileUploadHandler();
                        }}>
                        Upload Picture

                    </Button>
                </ButtonContainer>
            </Container>
        )
    }
}

export default withRouter(EditPicture);