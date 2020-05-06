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

const BackgroundContainer = styled(BaseContainer)`
  min-height: 620px;
`;

const MainContainer =styled.div`
  color: black;
  flex-direction: row;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto;
  justify-content: center;
  grid-column-gap: 30px;
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
  color: black;
  align-items: center;
  grid-row: 4;
  grid-column: 1;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  text-transform: uppercase;
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

            //this.props.refresh();
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
            //this.checkIfOwnProfile();
        }
    }

    // when the page is updated the user data is requested again so the changes from the edit profile page are immediately displayed

    render(){
        return(
            <div>
                {!this.state.shownUser ? (<Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>) : (
                    <MainContainer>
                        <TitleProfile/>
                        <ProfilePageHeader username={this.state.shownUser.username} avatarNr={this.state.shownUser.avatarNr}/>
                        <SidebarUserInformation/>
                        <ProfilePageInformation
                            user={this.state.shownUser}
                            username={this.state.shownUser.username}
                            name={this.state.shownUser.name}
                            creationDate={this.state.shownUser.creationDate}
                        />
                        <SavedLocationsProfilePage userId={this.state.shownUser.id}/>
                        <FriendsProfilePage userId={this.state.shownUser.id}/>
                        <ImageContainer>
                            {this.state.isFriend === false ?
                                <div>
                                <img src={AddFriend} alt="Add Friend" height="72px" width="72px"
                                     onClick={() => {
                                         this.changeColor(true);
                                     }}
                                /> Add this user as a friend
                                </div>
                                :
                                <div>
                                <img src={FriendAdded} alt="FriendAdded" height="72px" width="72px"
                                     onClick={() => {
                                         this.changeColor(false);
                                     }}
                                /> Unfriend this user
                                </div>
                            }
                        </ImageContainer>
                    </MainContainer>
                ) }
            </div>
        )
    }
}

export default withRouter(ProfilePage);