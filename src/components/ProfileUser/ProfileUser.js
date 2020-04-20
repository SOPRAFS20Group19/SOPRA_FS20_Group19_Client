import React from 'react';
import styled from 'styled-components';
import {BaseContainer} from '../../helpers/layout';
import {api, handleError} from '../../helpers/api';
import {Button} from '../../views/design/Button';
import {withRouter} from 'react-router-dom';
import User from "../shared/models/User";
import Profile from "../../views/Profile";
import UserHeader from '../../views/UserInformation/UserHeader';
import UserInformation from '../../views/UserInformation/UserInformation';
import SidebarUserInformation from "../../views/UserInformation/SidebarUserInformation";
import SavedLocations from "../../views/UserInformation/SavedLocations";
import {Spinner} from "../../views/design/Spinner";
import HeaderForLogin from "../../views/HeaderForLogin";
import TitleProfile from "../../views/UserInformation/TitleProfile";

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 620px;
  justify-content: center;
`;

const MainContainer =styled.div`
  color: black;
  flex-direction: row;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto auto;
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

// this component is responsible for the user profile
class ProfileUser extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedInUserId: localStorage.getItem('userId'),
            loggedInUser: null,
            //userToBeShownId: localStorage.getItem("showUserId"),
            //userToBeShown: null
        };
        this.getUser();
    }

    // this method sends a get request to the server and saves the received user data in the component's state
    async getUser() {
        try {
            const url = '/users/' + this.state.loggedInUserId;

            const response = await api.get(url);

            const user = new User(response.data);

            this.setState({loggedInUser: user});
        } catch (e) {
            alert(`Something went wrong while displaying the user profile: \n${handleError(e)}`);
        }
    }

    // this method redirects the user to the edit user page upon successfully clicking the corresponding button
    editProfile() {
        this.props.history.push('/game/dashboard/user/edit');
    }

    // if the user wants to return to the user overview the items are removed from the local storage and the user is redirected
    returnToDashboard(){
        //localStorage.removeItem("showUserID")
        //this.setState({userToBeShownId: null});
        this.setState({userToBeShown: null});
        this.props.history.push('/game/dashboard');
    }


    async componentDidMount() {
        this.getUser();
    }

    // when the page is updated the user data is requested again so the changes from the edit profile page are immediately displayed
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.getUser();
    }

    render(){
        return(
            <MainContainer>
                {!this.state.loggedInUser ? (<Spinner/>) : (
                        <MainContainer>
                            <TitleProfile/>
                            <UserHeader username={this.state.loggedInUser.username}/>
                <SidebarUserInformation/>
                <UserInformation
                    username={this.state.loggedInUser.username}
                    name={this.state.loggedInUser.name}
                    creationDate={this.state.loggedInUser.creationDate}
                    birthDate={this.state.loggedInUser.birthDate}
                />
                <SavedLocations/>
                </MainContainer>
                ) }
            </MainContainer>
        )
    }
}

export default withRouter(ProfileUser);