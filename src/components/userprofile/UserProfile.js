import React from 'react';
import styled from 'styled-components';
import {BaseContainer} from '../../helpers/layout';
import {api, handleError} from '../../helpers/api';
import {Button} from '../../views/design/Button';
import {withRouter} from 'react-router-dom';
import User from "../shared/models/User";
import Profile from "../../views/Profile";

const Container = styled(BaseContainer)`
  color: white;
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

// this component is responsible for the user profile
class UserProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedInUserId: localStorage.getItem("userId"),
            userToBeShownId: localStorage.getItem("showUserId"),
            userToBeShown: null
        };
        this.getUser();
    }

    // this method sends a get request to the server and saves the received user data in the component's state
    async getUser() {
        try {
            const url = '/users/' + this.state.userToBeShownId;

            const response = await api.get(url);

            const user = new User(response.data);

            this.setState({userToBeShown: user});
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
        localStorage.removeItem("showUserID")
        this.setState({userToBeShownId: null});
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

    render() {
        return (
            <BaseContainer>
                <Container>
                    <h2>User: {this.state.userToBeShown ? this.state.userToBeShown.username : null} </h2>
                    <div>
                    {this.state.userToBeShown != null ? (
                        <Profile user={this.state.userToBeShown}/>
                    ) : null}
                    </div>
                    <div>
                    {this.state.loggedInUserId === this.state.userToBeShownId ?
                        <ButtonContainer>
                            <Button onClick={() => {this.editProfile()}}>
                                Edit your profile
                            </Button>
                        </ButtonContainer>
                        : null}
                    </div>
                    <div>
                        <ButtonContainer>
                            <Button
                                width="100%"
                                onClick={() => {
                                    this.returnToDashboard();
                                }}
                            >
                                Return to the Dashboard
                            </Button>
                        </ButtonContainer>
                    </div>
                </Container>
            </BaseContainer>
        );
    }
}

export default withRouter(UserProfile);
