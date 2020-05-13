import styled from "styled-components";
import React from "react";
import {withRouter} from "react-router-dom";
import avatarArray from "../Avatar/AvatarArray"


const Container = styled.div`
  display: flex;
  flex-direction: row;
  grid-column: 1;
  grid-row: 2;
  margin-top: 20px;
  margin-left: 20px;
  align-content: center;
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
  font-weight: bolder;
  font-size: 30px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  margin-top: 30px;
  margin-left: 20px;
  text-transform: uppercase;
  @media only screen and (max-width: 700px){
    font-size: 20px;
    margin-left: 15px;
  }
  @media only screen and (max-width: 500px){
    font-size: 15px;
    margin-left: 12px;
  }
`;

class UserEditHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    //returns the set image
    getProfileImage(nr){
        return avatarArray[nr];
    }


    render(){
        return (
            <Container>
                <PictureContainer>
                    <Picture>
                    <img src={this.getProfileImage(this.props.avatarNr)} alt="User icon" width="100%" height="100%"/>
                    </Picture>
                    <Title>
                        {this.props.username}, edit your profile:
                    </Title>
                </PictureContainer>
            </Container>
        )
    }

}


export default withRouter(UserEditHeader);