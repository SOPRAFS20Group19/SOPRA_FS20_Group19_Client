import styled from "styled-components";
import React from "react";
import {withRouter} from "react-router-dom";
import UserIconComplete from "../../views/UserIconComplete.svg"
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
import { api } from "../../helpers/api";

const avatarArray = [femaleCoder, femaleCoderColor, maleCoder, maleCoderColor, femaleScientist, femaleCoderColor, maleScientist, maleScientistColor, femaleYogi, femaleYogiColor, maleYogi, maleYogiColor]
const Container = styled.div`
  display: flex;
  flex-direction: row;
  grid-column: 1 / span 2;
  grid-row: 2;
  margin-top: 20px;
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
  font-size: 40px;
  margin-left: 30px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  margin-top: 30px;
`;

class UserHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    //returns the set image
    getProfileImage(){
        return UserIconComplete;
    }


    render(){
        return (
            <Container>
                <PictureContainer>
                    <img src={this.getProfileImage()} alt="User icon" width="120px" height="120px"/>
                    <Title>
                        {this.props.username}, that's you:
                    </Title>
                </PictureContainer>
            </Container>
        )
    }

}


export default withRouter(UserHeader);