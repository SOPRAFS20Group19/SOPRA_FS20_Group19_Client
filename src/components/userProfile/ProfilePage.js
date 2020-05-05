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

// this component is responsible for the user profile
class ProfilePage extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedInUserId: localStorage.getItem('userId'),
            shownUser: null,
            loading: false
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

    componentDidMount() {
        this.getUser();
    }

    // when the page is updated the user data is requested again so the changes from the edit profile page are immediately displayed
    componentDidUpdate() {
        if (!this.state.loading){
            this.getUser();
        }
    }

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
                    </MainContainer>
                ) }
            </div>
        )
    }
}

export default withRouter(ProfilePage);