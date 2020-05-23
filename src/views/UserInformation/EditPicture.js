import React from "react";
import styled from "styled-components";
import {withRouter} from 'react-router-dom';
import {Button} from "../variables/Button";
import maleCoder from "../../views/UserInformation/coder-man.svg";
import femaleCoder from "../../views/UserInformation/coder-woman.svg";
import maleScientist from "../../views/UserInformation/scientist-man.svg";
import femaleScientist from "../../views/UserInformation/scientist-woman.svg";
import femaleYogi from "../../views/UserInformation/yogi-man.svg";
import maleYogi from "../../views/UserInformation/yogi-woman.svg";
import maleCoderColor from "../../views/UserInformation/coder-man-color.svg";
import femaleCoderColor from "../../views/UserInformation/coder-woman-color.svg";
import maleScientistColor from "../../views/UserInformation/scientist-man-color.svg";
import femaleScientistColor from "../../views/UserInformation/scientist-woman-color.svg";
import femaleYogiColor from "../../views/UserInformation/yogi-man-color.svg";
import maleYogiColor from "../../views/UserInformation/yogi-woman-color.svg";
import {api, handleError} from '../../helpers/api';

const Container = styled.div`
  display: flex;
  justify-content: top;
  flex-direction: column;
  grid-column: 2;
  grid-row: 2 /span 5;
  margin-top: 10px;
  @media only screen and (max-width: 900px){
    margin-left: 20px;
  }
  @media only screen and (max-width: 700px){
    width: 90%;
    margin-left: 20px;
  }
  @media only screen and (max-width: 500px){
    width: 80%;
    margin-left: 20px;
  }

`;

const Text = styled.div`
  flex-direction: row;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  @media only screen and (max-width: 700px){
    font-size: 15px;
  }
  @media only screen and (max-width: 500px){
    font-size: 15px;
  }
`;

const PictureContainer = styled.div`
  max-width: 500px;
  border: 2px solid #003068;
  border-color: #66A3E0;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin-top: 10px;
`;


const IconContainer = styled.div`
  height: 33%;
  width: 25%;
  display: inline-block;
  background: ${props => props.filled ? "#66A3E0" : "white"};
  :hover {
    background: #66A3E0;
    cursor: pointer;
}
`;

const ButtonContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: top;
  align-items: left;
  flex-direction: column;
  margin-top: 10px;
`;


const PictureStyle = {
    "width": "100%",
    "height": "100%",
    "padding": "5px"
}


class EditPicture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenAvatar: this.props.avatarNr,
            pictureChosen: false
        }
    }

    //saves the added picture
    savePicture() {
        const requestBody = JSON.stringify({
            avatarNr: this.state.chosenAvatar
        });
        const url = '/users/' + this.props.loggedInUserId;
        try {
            api.put(url, requestBody);

            // after successfully saving the changes, the user is redirected to his profile page
            this.props.history.push('/userprofile');
        } catch (e) {
            alert(`Something went wrong saving the new avatar: \n${handleError(e)}`);
        }
    }


    handleClick(n) {
        this.setState({
            chosenAvatar: n,
            pictureChosen: true
        });
    }


    render() {
        return (
            <Container>
                <Text>
                    Choose or change your avatar!
                </Text>
                <PictureContainer>
                    <IconContainer filled={this.state.chosenAvatar === 1} onClick={() => {
                        this.handleClick(1)
                    }}><img src={femaleCoder} style={PictureStyle}/></IconContainer>
                    <IconContainer filled={this.state.chosenAvatar === 2} onClick={() => {
                        this.handleClick(2)
                    }}><img src={femaleCoderColor} style={PictureStyle}/></IconContainer>
                    <IconContainer filled={this.state.chosenAvatar === 3} onClick={() => {
                        this.handleClick(3)
                    }}><img src={maleCoder} style={PictureStyle}/></IconContainer>
                    <IconContainer filled={this.state.chosenAvatar === 4} onClick={() => {
                        this.handleClick(4)
                    }}><img src={maleCoderColor} style={PictureStyle}/></IconContainer>
                    <IconContainer filled={this.state.chosenAvatar === 5} onClick={() => {
                        this.handleClick(5)
                    }}><img src={femaleScientist} style={PictureStyle}/></IconContainer>
                    <IconContainer filled={this.state.chosenAvatar === 6} onClick={() => {
                        this.handleClick(6)
                    }}><img src={femaleScientistColor} style={PictureStyle}/></IconContainer>
                    <IconContainer filled={this.state.chosenAvatar === 7} onClick={() => {
                        this.handleClick(7)
                    }}><img src={maleScientist} style={PictureStyle}/></IconContainer>
                    <IconContainer filled={this.state.chosenAvatar === 8} onClick={() => {
                        this.handleClick(8)
                    }}><img src={maleScientistColor} style={PictureStyle}/></IconContainer>
                    <IconContainer filled={this.state.chosenAvatar === 9} onClick={() => {
                        this.handleClick(9)
                    }}><img src={femaleYogi} style={PictureStyle}/></IconContainer>
                    <IconContainer filled={this.state.chosenAvatar === 10} onClick={() => {
                        this.handleClick(10)
                    }}><img src={femaleYogiColor} style={PictureStyle}/></IconContainer>
                    <IconContainer filled={this.state.chosenAvatar === 11} onClick={() => {
                        this.handleClick(11)
                    }}><img src={maleYogi} style={PictureStyle}/></IconContainer>
                    <IconContainer filled={this.state.chosenAvatar === 12} onClick={() => {
                        this.handleClick(12)
                    }}><img src={maleYogiColor} style={PictureStyle}/></IconContainer>

                </PictureContainer>
                <ButtonContainer>
                    <Button
                        disabled={this.state.pictureChosen === false}
                        width="100%"
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