import styled from "styled-components";
import React from "react";
import {withRouter} from "react-router-dom";
import UserIconComplete from "../../views/UserIconComplete.svg"


const Container = styled.div`
  display: flex;
  flex-direction: row;
  grid-column: 1;
  grid-row: 1;
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