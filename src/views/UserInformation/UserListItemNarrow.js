import React from "react";
import styled from "styled-components";
import {Button} from "../variables/Button";
import {ButtonForLogin} from "../variables/ButtonForLogin";
import {RoundButton} from "../variables/RoundButton";
import avatarArray from "../Avatar/AvatarArray";
import LogoutIcon from "../variables/LogoutIcon.svg";
import HeartUnfilled from "../InformationPage/HeartUnfilled.png";
import HeartRed from "../InformationPage/HeartRed.png";
import {api, handleError} from "../../helpers/api";
import AddFriend from "../Users/AddFriend.png";
import FriendAdded from "../Users/FriendAdded.png";
import RedCircle from "../Users/RedCircle.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: 20px;
  align-content: left;
  margin-top: 15px;
  justify-content: left;
  vertical-align: middle;
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
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-column-gap: 0px;
  
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
  
  }
`;

const ImageContainer= styled.div`
  justify-content: right;
  align-items: right;
  grid-column: 3;
  grid-row: 1 / span 2;
  height: 72px;
  width: 72px;
  @media only screen and (max-width: 500px){
    height: 45px;
    width: 45px;
`;

const NotificationContainer= styled.div`
  justify-content: end;
  align-items: top;
  grid-column: 2;
  height: 20px;
  width: 20px;
  margin-left: -20px;
  margin-top: -5px;
  @media only screen and (max-width: 500px){
    height: 15px;
    width: 15px;
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
  @media only screen and (max-width: 500px){
    font-size: 10px
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
class UserListItemNarrow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showUser: false,
            showUserHover: false,
            showReturnHover: false,
            isFriend: true,
            isUnread: false,
        }
    }

    componentDidMount(): void {
        this.checkIfUnreadMessages()
    }

    async checkIfUnreadMessages(){
        try {
            const url = '/users/chats/news/' + localStorage.getItem('userId') + '/' + this.props.user.id;

            const response = await api.get(url);

            this.setState({isUnread: response.data});
            setTimeout(() => {this.checkIfUnreadMessages()}, 5000);
        } catch (e) {
            alert(`Something went wrong while checking for unread messages: \n${handleError(e)}`);
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
        try {
            const url = '/users/friends/' + localStorage.getItem('userId') + '/' + this.props.user.id;

            await api.delete(url);

            this.setState({isFriend: false});

            this.props.refresh();
        } catch (e) {
            alert(`Something went wrong while deleting this friend: \n${handleError(e)}`);
        }
    }

    async addFriend(){
        try {
            const url = '/users/friends/' + localStorage.getItem('userId') + '/' + this.props.user.id;

            await api.put(url);

            this.setState({isFriend: true});

            this.props.refresh();
        } catch (e) {
            alert(`Something went wrong while adding this friend: \n${handleError(e)}`);
        }
    }

    render(){
        return (
            <Container>
                <AvatarContainer>
                    <img src={avatarArray[this.props.user.avatarNr]} style={imgStyle} />
                    {this.state.isFriend && this.state.isUnread ?
                        <NotificationContainer>
                        <img src={RedCircle} height="100%" width="100%" />
                        </NotificationContainer>
                        : null}
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
                        <img src={AddFriend} alt="Add Friend" height="100%" width="100%"
                             onClick={() => {
                                 this.changeColor(true);
                             }}
                        />
                        :
                        <img src={FriendAdded} alt="FriendAdded" height="100%" width="100%"
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


export default UserListItemNarrow;
