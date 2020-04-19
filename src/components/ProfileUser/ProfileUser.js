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
            <BaseContainer>
                <UserHeader username={"joggeli"}/>
                <SidebarUserInformation/>
                <UserInformation
                    username={"joggeli"}
                    name={"Chasper"}
                    creationDate={"01.01."}
                    birthDate={null}
                />
                <SavedLocations/>
            </BaseContainer>
        )
    }
}

export default withRouter(ProfileUser);