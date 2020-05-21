import React from "react";
import styled from "styled-components";
import avatarArray from "../Avatar/AvatarArray";
import FriendAdded from "../../views/Users/FriendAdded.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: 20px;
  align-content: left;
  margin-top: 15px;
  justify-content: left;
  @media only screen and (max-width: 1220px){
    grid-column-gap: 10px;
  }
  @media only screen and (max-width: 500px){
    grid-column-gap: 8px;
  }
`;

const AvatarContainer = styled.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  width: 70px;
  height: 70px;
  @media only screen and (max-width: 500px){
      width: 45px;
      height: 45px;
  }
`;

const Title = styled.div`
  font-weight: bolder;
  font-size: 15px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  grid-column: 2;
  grid-row: 1;
  width: 200px;
  @media only screen and (max-width: 700px){
    font-size: 13px
    min-width: 300px;
  }
  @media only screen and (max-width: 500px){
    font-size: 11px
    min-width: 200px;
  }
`;

const ButtonContainer = styled.div`
  font-weight: normal;
  font-size: normal;
  width: 100%;
  grid-column: 2;
  grid-row: 2;
`;

const ImageContainer = styled.div`
  justify-content: right;
  align-items: right;
  grid-column: 3;
  grid-row: 1 / span 2;
  height: 70px;
  width: 70px;
  @media only screen and (max-width: 700px){
    width: 55px;
    height: 55px;
  }
  @media only screen and (max-width: 500px){
    width: 45px;
    height: 45px;
  }
`;

const ProfilePageButton = styled.button`
  background: transparent;
  font-weight: normal;
  font-size: 13px;
  border: 0px solid transparent;
  border-radius: 1px;
  color: black;
  padding-left: 0px;
  text-align: left;
  max-width: 200px;
  @media only screen and (max-width: 700px){
    font-size: 10px;
    height: 25px;
    border: 0px solid transparent;
  }
  &:hover {
    transform: translateY(-2px);
  }
  text-transform: uppercase;
  width: ${props => props.width || null};
  height: 35px;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  transition: all 0.3s ease;
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
class ProfilePageListItemNarrow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showUser: false,
            showUserHover: false,
            showReturnHover: false,
            isFriend: true
        }
    }

    render() {
        return (
            <Container>
                <AvatarContainer>
                    <img src={avatarArray[this.props.user.avatarNr]} style={imgStyle}/>
                </AvatarContainer>
                <Title>{this.props.user.username}</Title>
                <ButtonContainer>
                    <ProfilePageButton
                        variant="primary"
                        width="100%"
                        onClick={() => {
                            this.props.goToProfile(this.props.user.id);
                        }}>
                        Visit {this.props.user.username}'s profile
                    </ProfilePageButton>
                </ButtonContainer>
                <ImageContainer>
                    <img src={FriendAdded} alt="FriendAdded" height="100%" width="100%"/>
                </ImageContainer>
            </Container>
        )
    }
}


export default ProfilePageListItemNarrow;
