import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import { Button } from '../../views/design/Button';
import { withRouter } from 'react-router-dom';
import SidebarEditUserInformation from "../../views/UserInformation/SidebarEditUserInformation";
import UserEditHeader from "../../views/UserInformation/UserEditHeader";
import InfoEditProfile from "../../views/UserInformation/InfoEditProfile";
import EditPicture from "../../views/UserInformation/EditPicture";

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

const Container = styled(BaseContainer)`
  color: white;
  text-align: center;
  flex-direction: column;
  margin-top: 15px;
`;
const Container1 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 0.5%
  flex-direction: column;
  margin-left: 20px;
  grid-column: 1;
  grid-row: 2;
  margin-top: 15px;
`;

const Container2 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 0.5%
  flex-direction: column;
  margin-left: 20px;
  grid-column: 1;
  grid-row: 3;
  margin-top: 15px;
`;
const Container3 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 0.5%
  flex-direction: column;
  margin-left: 20px;
  grid-column: 1;
  grid-row: 5;
  margin-top: 15px;
`;
const Container4 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 0.5%
  flex-direction: column;
  margin-left: 20px;
  grid-column: 1;
  grid-row: 6;
  margin-top: 15px;
`;


const InputField = styled.input`
  &::placeholder {
    color: black;
  }
  height: 35px;
  width: 30%;
  border: 2px solid #003068;
  border-color: #66A3E0;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 3;
  margin-top: 15px;
  width: 30%;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: x-large;
  flex-direction: row;
`;

// This component is responsible for the edit profile page
class ProfileEdit extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedInUserId: localStorage.getItem("userId"),
            name: null,
            username: null,
            birthDate: null,
            changesSaved: false,
            testThing: false
        };
    }

    // when the save changes button is clicked, the new data is sent to the server via put request
    saveChanges() {
        try {
            const requestBody = JSON.stringify({
                username: this.state.username,
                birthDate: this.state.birthDate
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
                <UserEditHeader username={"joggeli"}/>
                <SidebarEditUserInformation/>
                <Container1>
                    <Title>name: </Title>
                    <InputField
                        placeholder="enter your new name here"
                        onChange={e => {
                            this.handleInputChange('name', e.target.value);
                        }}
                    />
                </Container1>
                <Container2>
                <Title>username: </Title>
                    <InputField
                        placeholder="enter your new username here"
                        onChange={e => {
                            this.handleInputChange('username', e.target.value);
                        }}
                    />
                </Container2>
                <InfoEditProfile creationDate={"drüvordünnschiss"}/>
                <Container3>
                    <Title>birth date: </Title>
                    <InputField
                        placeholder="enter your birth date here"
                        onChange={e => {
                            this.handleInputChange('birthDate', e.target.value);
                        }}
                    />
                </Container3>
                <Container4>
                    <div>
                        <ButtonContainer>
                            <Button
                                width="100%"
                                onClick={() => {
                                    this.saveChanges();
                                }}
                            >
                                Save Changes
                            </Button>
                        </ButtonContainer>
                    </div>
                    <div>
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
                    </div>
                </Container4>
                <EditPicture/>
            </MainContainer>
        );
    }
}

export default withRouter(ProfileEdit);