import React from 'react';
import styled from 'styled-components';
import {api, handleError} from '../../helpers/api';
import {Button} from '../../views/variables/Button';
import {withRouter} from 'react-router-dom';
import SidebarEditUserInformation from "../../views/UserInformation/SidebarEditUserInformation";
import UserEditHeader from "../../views/UserInformation/UserEditHeader";
import EditPicture from "../../views/UserInformation/EditPicture";
import {Spinner} from "../../views/variables/Spinner";
import User from "../shared/models/User";
import TitleEdit from "../../views/UserInformation/TitleEdit";

const MainContainer = styled.div`
  color: black;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto 10%;
  grid-template-rows: auto auto auto auto auto auto auto;
  justify-content: space-between;
  grid-column-gap: 30px;
  @media only screen and (max-width: 1215px){
    grid-column-gap: 10px;
  }
  
  @media only screen and (max-width: 900px){
    max-width: 800;
    display: block;
  }
  @media only screen and (max-width: 500px){
    max-width: 500;
    display: block;
  }
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
  @media only screen and (max-width: 700px){
    width: 90%;
  }
  @media only screen and (max-width: 500px){
    width: 80%
  }

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
  align-items: center;
  grid-column: 1;
  margin-top: 10px;
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  flex-direction: row;
  @media only screen and (max-width: 700px){
    font-size: 15px
  }
  @media only screen and (max-width: 500px){
    font-size: 15px
  }
`;

const ErrorMessage = styled.div`
  font-weight: normal;
  font-size: 13px;
  margin-left: 0px;
  letter-spacing: 0.1em;
  margin-top: 0px;
  color: red;
`;

function ValidationMessage(props) {
    if (!props.valid) {
        return (
            <ErrorMessage className='error-msg'>{props.message}</ErrorMessage>
        )
    }
    return null;
}

// This component is responsible for the edit profile page
class EditProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedInUserId: localStorage.getItem("userId"),
            loggedInUser: null,
            name: null,
            username: null,
            password: null,
            passwordConfirm: null,
            changesSaved: false,
            testThing: false,
            formValid: false,
            usernameValid: null,
            nameValid: null,
            passwordValid: null,
            passwordConfirmValid: null,
            errorMsg: {},
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

    async componentDidMount() {
    }

    validateForm = () => {
        const {usernameValid, nameValid, passwordValid, passwordConfirmValid} = this.state;
        if (passwordValid === null && passwordConfirmValid === null) {
            if (usernameValid === null){
                this.setState({
                    formValid: nameValid
                })
            }
            else if (nameValid === null){
                this.setState({formValid: usernameValid})
            }
            else{
                this.setState({formValid: nameValid && usernameValid})
            }

        }
        else{
            if ((usernameValid===true || usernameValid ===null) && (nameValid===true || nameValid ===null))
                this.setState({
                    formValid: passwordConfirmValid && passwordValid
                });
            else{
                this.setState({formValid: false})
            }
        }
    };

    validateUsername = () => {
        const {username} = this.state;
        let usernameValid = true;
        let errorMsg = {...this.state.errorMsg}

        if (username.length < 4) {
            usernameValid = false;
            errorMsg.username = 'Must be at least 4 characters long'
        }
        this.setState({usernameValid, errorMsg}, this.validateForm)
    };

    validateName = () => {
        const {name} = this.state;
        let nameValid = true;
        let errorMsg = {...this.state.errorMsg}

        if (name.length < 4) {
            nameValid = false;
            errorMsg.name = 'Must be at least 4 characters long';
        }
        this.setState({nameValid, errorMsg}, this.validateForm);
    };

    validatePassword = () => {
        const {password} = this.state;
        let passwordValid = true;
        let errorMsg = {...this.state.errorMsg};

        if (password.length < 6) {
            passwordValid = false;
            errorMsg.password = 'Must be at least 6 characters long';
        }
        this.setState({passwordValid, errorMsg}, this.validateForm);
    };

    validatePasswordConfirm = () => {
        const {passwordConfirm, password} = this.state;
        let passwordConfirmValid = true;
        let errorMsg = {...this.state.errorMsg}

        if (password !== passwordConfirm) {
            passwordConfirmValid = false;
            errorMsg.passwordConfirm = 'Passwords do not match'
        }

        this.setState({passwordConfirmValid, errorMsg}, this.validateForm);
    };

    updatePassword = (password) => {
        this.setState({password}, this.validatePassword);
    };

    updateUsername = (username) => {
        this.setState({username}, this.validateUsername)
    };

    updateName = (name) => {
        this.setState({name}, this.validateName)
    };

    updatePasswordConfirm = (passwordConfirm) => {
        this.setState({passwordConfirm}, this.validatePasswordConfirm)
    };

    // renders the page
    render() {
        return (

            <div>
                {!this.state.loggedInUser ? (<Spinner/>) : (
                    <MainContainer>
                        <TitleEdit/>
                        <UserEditHeader username={this.state.loggedInUser.username}
                                        avatarNr={this.state.loggedInUser.avatarNr}/>
                        <SidebarEditUserInformation column={3}/>
                        <Container column={1}>
                            <Title>Username: </Title>
                            <InputField
                                onKeyPress={e => {
                                    if (e.key === 'Enter') {
                                        if (this.state.formValid === true) {
                                            this.saveChanges();
                                        }
                                    }
                                }}
                                placeholder="Enter new username here"
                                onChange={e => {
                                    this.updateUsername(e.target.value);
                                }}
                            />
                            <ValidationMessage valid={this.state.usernameValid} message={this.state.errorMsg.username}/>
                        </Container>
                        <Container column={1}>
                            <Title>Name: </Title>
                            <InputField
                                onKeyPress={e => {
                                    if (e.key === 'Enter') {
                                        if (this.state.formValid === true) {
                                            this.saveChanges();
                                        }
                                    }
                                }}
                                placeholder="Enter new name here"
                                onChange={e => {
                                    this.updateName(e.target.value);
                                }}
                            />
                            <ValidationMessage valid={this.state.nameValid} message={this.state.errorMsg.name}/>
                        </Container>
                        <Container column={1}>
                            <Title>Password: </Title>
                            <InputField
                                onKeyPress={e => {
                                    if (e.key === 'Enter') {
                                        if (this.state.formValid === true) {
                                            this.saveChanges();
                                        }
                                    }
                                }}
                                type="password"
                                placeholder="Enter new password here"
                                onChange={e => {
                                    this.updatePassword(e.target.value);
                                }}
                            />
                            <ValidationMessage valid={this.state.passwordValid} message={this.state.errorMsg.password}/>
                        </Container>
                        <Container column={1}>
                            <Title>Password: </Title>
                            <InputField
                                onKeyPress={e => {
                                    if (e.key === 'Enter') {
                                        if (this.state.formValid === true) {
                                            this.saveChanges();
                                        }
                                    }
                                }}
                                type="password"
                                placeholder="Enter new password again"
                                onChange={e => {
                                    this.updatePasswordConfirm(e.target.value);
                                }}
                            />
                            <ValidationMessage valid={this.state.passwordConfirmValid}
                                               message={this.state.errorMsg.passwordConfirm}/>
                        </Container>
                        <Container column={1}>
                            <ButtonContainer>
                                <Button
                                    disabled={!this.state.formValid}
                                    width="80%"
                                    onClick={() => {
                                        this.saveChanges();
                                    }}
                                >
                                    Save Changes
                                </Button>
                            </ButtonContainer>
                            <ButtonContainer>
                                <Button
                                    width="80%"
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
            </div>
        );
    }
}

export default withRouter(EditProfile);
