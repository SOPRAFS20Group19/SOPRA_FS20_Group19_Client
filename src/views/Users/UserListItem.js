import React from "react";
import styled from "styled-components";
import {Button} from "../variables/Button";
import {ButtonForLogin} from "../variables/ButtonForLogin";
import {RoundButton} from "../variables/RoundButton";
import avatarArray from "../Avatar/AvatarArray";
import LogoutIcon from "../variables/LogoutIcon.svg";
import HeartUnfilled from "../InformationPage/HeartUnfilled.png";
import HeartRed from "../InformationPage/HeartRed.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: 20px;
  align-content: left;
  margin-top: 15px;
  justify-content: left;
`;

const AvatarContainer = styled.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  width: 70px;
  height: 70px;
`;

const Title = styled.div`
  font-weight: bolder;
  font-size: 15px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  grid-column: 2;
  grid-row: 1;
  min-width: 400px;
`;

const ButtonContainer = styled.div`
  font-weight: normal;
  font-size: normal;
  width: 100%;
  grid-column: 2;
  grid-row: 2;
`;

const ImageContainer= styled.div`
  justify-content: right;
  align-items: right;
  grid-column: 3;
  grid-row: 1 / span 2;
`;

const ProfilePageButton = styled(Button)`
  background: transparent;
  font-weight: normal;
  font-size: normal;
  border: 0px solid black;
  border-radius: 1px;
  color: black;
  padding-left: 0px;
  text-align: left;
`;

const imgStyle = {
    "height": "100%",
    "width": "100%"
};

/**
 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */
class UserListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showUser: false,
            showUserHover: false,
            showReturnHover: false,
            isFriend: false
        }
    }

    changeColor(value){
        this.setState({isFriend: value });
        if (value === true){
            this.addFriend();
        }
        else {
            this.deleteFriend();
        }
    }

    async deleteFriend(){
    }

    async addFriend(){

    }

    render(){
        return (
            <Container>
                <AvatarContainer>
                    <img src={avatarArray[this.props.user.avatarNr]} style={imgStyle} />
                </AvatarContainer>
                <Title>{this.props.user.username}</Title>
                <ButtonContainer>
                    <ProfilePageButton
                        variant="primary"
                        width="100%"
                        onClick={() => {this.props.goToProfile(this.props.user.id);}}>
                        Visit {this.props.user.username}'s profile
                    </ProfilePageButton>
                </ButtonContainer>
                <ImageContainer>
                    {this.state.isFriend === false ?
                        <img src={HeartUnfilled} alt="Heart Empty" height="42.375px" width="47.325px"
                             onClick={() => {
                                 this.changeColor(true);
                             }}
                        />
                        :
                        <img src={HeartRed} alt="Heart Full" height="42.375px" width="47.325px"
                             onClick={() => {
                                 this.changeColor(false);
                             }}
                        />
                    }
                </ImageContainer>
            </Container>
        )
    }
}


export default UserListItem;
