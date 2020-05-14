import React from 'react';
import styled from 'styled-components';
import {BaseContainer} from '../../helpers/layout';
import {api, handleError} from '../../helpers/api';
import {withRouter} from 'react-router-dom';
import User from "../shared/models/User";
import UserHeader from '../../views/UserInformation/UserHeader';
import UserInformation from '../../views/UserInformation/UserInformation';
import SidebarUserInformation from "../../views/UserInformation/SidebarUserInformation";
import SavedLocations from "../../views/UserInformation/SavedLocations";
import {Spinner} from "../../views/variables/Spinner";
import TitleProfile from "../../views/UserInformation/TitleProfile";
import Location from "../shared/models/Location";
import ProfilePageInformation from "../../views/Users/ProfilePageInformation";
import ProfilePageHeader from "../../views/Users/ProfilePageHeader";
import SavedLocationsProfilePage from "../../views/Users/SavedLocationsProfilePage";
import HeartUnfilled from "../../views/InformationPage/HeartUnfilled.png";
import HeartRed from "../../views/InformationPage/HeartRed.png";
import AddFriend from "../../views/Users/AddFriend.png";
import FriendAdded from "../../views/Users/FriendAdded.png";
import FriendsUser from "../../views/UserInformation/FriendsUser";
import FriendsProfilePage from "../../views/Users/FriendsProfilePage";
import ChatboxFriends from "../../views/Users/ChatboxFriends";
import SidebarProfilePage from "../../views/Users/SidebarProfilePage";

const BackgroundContainer = styled(BaseContainer)`
  min-height: 620px;
`;

const MainContainer =styled.div`
  color: black;
  flex-direction: row;
  width: 80%;
  height: 93%;
  position: absolute;
  top: 0%;
  left: 10%
  align-content: flex-start;
  margin-top: 5%;
  display: grid;
  grid-template-columns: auto auto 10%;
  grid-template-rows: auto auto auto auto;
  justify-content: center;
  grid-column-gap: 30px;
  @media only screen and (max-width: 1215px){
    grid-column-gap: 20px;
  }
  
  @media only screen and (max-width: 1100px){
    max-width: 1000;
    display: block;
    justify-content: center;
  }
  @media only screen and (max-width: 800px){
    height: 81%
    position: absolute;
    top: 7%;
    overflow: scroll;
    width: 100%;
    left: 0%;
    margin-top: 0%;
  }
  @media only screen and (max-width: 500px){
    max-width: 500;
    display: block;
  }
`;

const Container =styled.div`
  color: black;
  flex-direction: row;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto auto;
  justify-content: center;
  grid-column-gap: 30px;
`;

const ImageContainer= styled.div`
  justify-content: start;
  flex-direction: row;
  color: black;
  align-content: center;
  grid-row: 4;
  grid-column: 1;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  text-transform: uppercase;
  margin-left: 10px;
`;

const ImageContainer2= styled.div`
  display: grid;
  justify-content: start;
  align-content: left;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
`;

const Text = styled.div`
  grid-column: 2;
  align-self: center;
  font-size: 15px;
  @media only screen and (max-width: 700px){
    font-size: 12px;
  }
`;

const Picture= styled.div`
  height: 70px;
  width: 70px;
  grid-column: 1;
  @media only screen and (max-width: 700px){
    width: 55px;
    height: 55px;
  }
  @media only screen and (max-width: 500px){
    width: 45px;
    height: 45px;
  }
`;

// this component is responsible for the user profile
class ProfilePage extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedInUserId: localStorage.getItem('userId'),
            shownUserId: null,
            shownUser: null,
            loading: false,
            isFriend: false,
        };
    }

    // this method sends a get request to the server and saves the received user data in the component's state
    async getUser() {
        try {
            this.setState({loading: true});
            const url = '/users/' + this.props.match.params.userId;

            const response = await api.get(url);

            const user = new User(response.data);

            this.setState({shownUser: user});
            this.setState({loading: false});
        } catch (e) {
            alert(`Something went wrong while displaying the user profile: \n${handleError(e)}`);
        }
    }

    async checkFriend() {
        try {
            const url = '/users/friends/' + localStorage.getItem('userId') + '/' + this.props.match.params.userId;

            const response = await api.get(url);

            this.setState({isFriend: response.data});
        } catch (e) {
            alert(`Something went wrong while checking if this user is a friend: \n${handleError(e)}`);
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
            const url = '/users/friends/' + localStorage.getItem('userId') + '/' + this.props.match.params.userId;

            await api.delete(url);

            this.setState({isFriend: false});

            //this.props.refresh();
        } catch (e) {
            alert(`Something went wrong while deleting this friend: \n${handleError(e)}`);
        }
    }

    async addFriend(){
        try {
            const url = '/users/friends/' + localStorage.getItem('userId') + '/' + this.props.match.params.userId;

            await api.put(url);

            this.setState({isFriend: true});
        } catch (e) {
            alert(`Something went wrong while adding this friend: \n${handleError(e)}`);
        }
    }

    checkIfOwnProfile(){
        if (localStorage.getItem('userId') == this.props.match.params.userId){
            this.props.history.push('/userprofile');
            //window.location.reload();
        }
    }

    componentDidMount() {
        this.getUser();
        this.checkFriend();
        this.setState({shownUserId: this.props.match.params.userId});
        this.checkIfOwnProfile();
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        if (this.props.match.params.userId !== prevProps.match.params.userId){
            if (localStorage.getItem('userId') == this.props.match.params.userId){
                this.props.history.push('/userprofile');
            }
            else {
                window.location.reload();
            }
        }
    }

    render(){
        return(
            <div>
                {!this.state.shownUser ? (<Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>) : (
                    <div>
                        <SidebarProfilePage avatarNr={localStorage.getItem("userAvatar")} column={3}/>
                        <TitleProfile/>
                    <MainContainer>
                        <ProfilePageHeader username={this.state.shownUser.username} avatarNr={this.state.shownUser.avatarNr}/>
                        <ProfilePageInformation
                            user={this.state.shownUser}
                            username={this.state.shownUser.username}
                            name={this.state.shownUser.name}
                            creationDate={this.state.shownUser.creationDate}
                        />
                        <ImageContainer>
                            {this.state.isFriend === false ?
                                <ImageContainer2>
                                    <Picture>
                                    <img src={AddFriend} alt="Add Friend" height="100%" width="100%"
                                         onClick={() => {
                                             this.changeColor(true);
                                         }}
                                    />
                                    </Picture>
                                    <Text>
                                    Add this user as a friend
                                    </Text>
                                </ImageContainer2>
                                :
                                <ImageContainer2>
                                    <Picture>
                                    <img src={FriendAdded} alt="FriendAdded" height="100%" width="100%"
                                         onClick={() => {
                                             this.changeColor(false);
                                         }}
                                    />
                                    </Picture>
                                    <Text>
                                    Unfriend this user
                                    </Text>
                                </ImageContainer2>
                            }
                        </ImageContainer>
                        <SavedLocationsProfilePage userId={this.state.shownUser.id}/>
                        <FriendsProfilePage userId={this.state.shownUser.id}/>
                        {this.state.isFriend ? <ChatboxFriends friendId={this.state.shownUser.id}/> : null}

                    </MainContainer>
                    </div>
                ) }
            </div>
        )
    }
}

export default withRouter(ProfilePage);