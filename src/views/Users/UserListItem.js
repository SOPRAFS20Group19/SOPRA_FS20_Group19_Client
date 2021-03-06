import React from "react";
import styled from "styled-components";
import avatarArray from "../Avatar/AvatarArray";
import {api, handleError} from "../../helpers/api";
import AddFriend from "./AddFriend.png";
import FriendAdded from "./FriendAdded.png";
import RedCircle from "./RedCircle.png"

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: 20px;
  align-content: left;
  margin-top: 15px;
  justify-content: left;
  @media only screen and (max-width: 700px){
    max-width: 90%;
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
  @media only screen and (max-width: 700px){
    width: 55px;
    height: 55px;
  }
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
  min-width: 350px;
  @media only screen and (max-width: 700px){
    min-width: 250px;
    font-size: 12.5px;
  }
  @media only screen and (max-width: 500px){
    min-width: 150px;
  }
`;

const ButtonContainer = styled.div`
  font-weight: normal;
  max-width: 350px;
  grid-column: 2;
  grid-row: 2;
  @media only screen and (max-width: 700px){
    max-width: 250px;
  }
  @media only screen and (max-width: 500px){
    max-width: 150px;
  }
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
  @media only screen and (max-width: 700px){
    font-size: 10px;
    height: flex;
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

const NotificationContainer = styled.div`
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
    margin-left: -10px;
    margin-top: -2px;
  }
`;

const imgStyle = {
    "height": "100%",
    "width": "100%"
};

class UserListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showUser: false,
            showUserHover: false,
            showReturnHover: false,
            isFriend: false,
            isUnread: false
        }
    }

    componentDidMount(): void {
        this.checkFriend();
    }

    async checkFriend() {
        try {
            const url = '/users/friends/' + localStorage.getItem('userId') + '/' + this.props.user.id;

            const response = await api.get(url);

            this.setState({isFriend: response.data});
            if (this.state.isFriend) {
                this.checkIfUnreadMessages();
            }
        } catch (e) {
            alert(`Something went wrong while checking if this user is a friend: \n${handleError(e)}`);
        }
    }

    async checkIfUnreadMessages() {
        try {
            const url = '/users/chats/news/' + localStorage.getItem('userId') + '/' + this.props.user.id;

            const response = await api.get(url);

            this.setState({isUnread: response.data});
            if (!this.state.isUnread) {
                this.timeout = setTimeout(() => {
                    this.checkIfUnreadMessages()
                }, 10000);
            }
        } catch (e) {
            alert(`Something went wrong while checking for unread messages: \n${handleError(e)}`);
        }
    }

    componentWillUnmount(): void {
        clearTimeout(this.timeout);
    }

    changeColor(value) {
        this.setState({isFriend: value});
        if (value === true) {
            this.addFriend();
        } else {
            this.deleteFriend();
        }
    }

    async deleteFriend() {
        try {
            const url = '/users/friends/' + localStorage.getItem('userId') + '/' + this.props.user.id;

            await api.delete(url);

            this.setState({isFriend: false});
        } catch (e) {
            alert(`Something went wrong while deleting this friend: \n${handleError(e)}`);
        }
    }

    async addFriend() {
        try {
            const url = '/users/friends/' + localStorage.getItem('userId') + '/' + this.props.user.id;

            await api.put(url);

            this.setState({isFriend: true});
        } catch (e) {
            alert(`Something went wrong while adding this friend: \n${handleError(e)}`);
        }
    }

    render() {
        return (
            <Container>
                <AvatarContainer>
                    <img src={avatarArray[this.props.user.avatarNr]} style={imgStyle}/>
                    {this.state.isFriend && this.state.isUnread ?
                        <NotificationContainer>
                            <img src={RedCircle} height="100%" width="100%"/>
                        </NotificationContainer>
                        : null}
                </AvatarContainer>
                <Title>{this.props.user.username} </Title>
                <ButtonContainer>
                    {this.state.isFriend ? <ProfilePageButton
                            variant="primary"
                            width="100%"
                            onClick={() => {
                                this.props.goToProfile(this.props.user.id);
                            }}>
                            Chat with {this.props.user.username}
                        </ProfilePageButton> :
                        <ProfilePageButton
                            variant="primary"
                            width="100%"
                            onClick={() => {
                                this.props.goToProfile(this.props.user.id);
                            }}>
                            Visit {this.props.user.username}'s profile
                        </ProfilePageButton>
                    }
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


export default UserListItem;
