import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import { Button } from '../../views/variables/Button';
import { withRouter } from 'react-router-dom';
import SidebarEditUserInformation from "../../views/UserInformation/SidebarEditUserInformation";
import UserEditHeader from "../../views/UserInformation/UserEditHeader";
import InfoEditProfile from "../../views/UserInformation/InfoEditProfile";
import EditPicture from "../../views/UserInformation/EditPicture";
import {Spinner} from "../../views/variables/Spinner";
import User from "../shared/models/User";
import HeaderForLogin from "../../views/UserInformation/HeaderForLogin";
import TitleEdit from "../../views/UserInformation/TitleEdit";

const MainContainer =styled.div`
  color: black;
  width: 100%;
  display:grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto auto auto auto;
  justify-content: center;
  grid-column-gap: 30px;
`;


const Container = styled.div`
margin-top: 10px;
width: 100%;
display: flex;
justify-content: top;
align-items: left;
flex-direction: column;
margin-left: 20px;
grid-column: ${props => props.column};
`;




const InputField = styled.input`
  &::placeholder {
    color: black;
  }
  margin-top: 10px;
  height: 35px;
  width: 90%;
  border: 2px solid #003068;
  border-color: #66A3E0;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
`;

const ButtonContainer = styled.div`
  justify-content: center;
  grid-column: 1;
  margin-top: 10px;
  width: 90%;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: large;
  flex-direction: row;
`;

// This component is responsible for the edit profile page
class ProfileEdit extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedInUserId: localStorage.getItem("userId"),
            loggedInUser: null,
            name: null,
            username: null,
            birthDate: null,
            changesSaved: false,
            testThing: false,
            password: null
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

    // when the save changes button is clicked, the new data is sent to the server via put request
    saveChanges() {
        try {
            const requestBody = JSON.stringify({
                name: this.state.name,
                username: this.state.username,
                password: this.state.password
            });

            const url = '/users/' + this.state.loggedInUserId;
            api.put(url, requestBody);

            // after successfully saving the changes, the user is redirected to his profile page
            this.props.history.push('/userprofile');
        } catch (e) {
            alert(`Something went wrong while editing the profile: \n${handleError(e)}`);
        }
    }

    // this method handles the given user input and changes the component's state
    handleInputChange(key, value) {
        // Example: if the key is username, this statement is the equivalent to the following one:
        // this.setState({'username': value});
        this.setState({[key]: value});
    }

    async componentDidMount() {}

    // renders the page
    render() {
        return (

            <MainContainer>
                {!this.state.loggedInUser ? (<Spinner/>) : (
                    <MainContainer>
                        <TitleEdit/>
                        <UserEditHeader username={this.state.loggedInUser.username} avatarNr={this.state.loggedInUser.avatarNr}/>
                <SidebarEditUserInformation/>
                <Container column={1}>
                    <Title>Name: </Title>
                    <InputField
                        placeholder="enter your new name here"
                        onChange={e => {
                            this.handleInputChange('name', e.target.value);
                        }}
                    />
                </Container>
                <Container column={1}>
                <Title>Username: </Title>
                    <InputField
                        placeholder="enter your new username here"
                        onChange={e => {
                            this.handleInputChange('username', e.target.value);
                        }}
                    />
                </Container>
                <Container column={1}>
                    <Title>Password: </Title>
                    <InputField
                        placeholder="enter your new password here"
                        onChange={e => {
                            this.handleInputChange('password', e.target.value);
                        }}
                    />
                </Container>
                <Container column={1}>
                        <ButtonContainer>
                            <Button
                                disabled={!this.state.name && !this.state.username && !this.state.password}
                                width="100%"
                                onClick={() => {
                                    this.saveChanges();
                                }}
                            >
                                Save Changes
                            </Button>
                        </ButtonContainer>
                        <ButtonContainer>
                            <Button
                                width="100%"
                                onClick={() => {
                                    this.props.history.push('/userprofile');
                                }}
                            >
                                Cancel
                            </Button>
                        </ButtonContainer>
                </Container>
                <EditPicture user={this.state.loggedInUser} loggedInUserId={this.state.loggedInUserId}/>
                    </MainContainer>
                    )}
            </MainContainer>
        );
    }
}

export default withRouter(ProfileEdit);
