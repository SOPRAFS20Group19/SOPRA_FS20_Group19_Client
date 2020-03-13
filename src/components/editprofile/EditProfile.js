import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import { Button } from '../../views/design/Button';
import { withRouter } from 'react-router-dom';

const Container = styled(BaseContainer)`
  color: white;
  text-align: center;
  flex-direction: column;
`;

const Label = styled.label`
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const InputField = styled.input`
  &::placeholder {
    color: rgba(255, 255, 255, 1.0);
  }
  height: 35px;
  width: 300px;
  padding-left: 15px;
  margin-left: 15px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

// This component is responsible for the edit profile page
class EditProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedInUserId: localStorage.getItem("userId"),
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
            this.props.history.push('/game/dashboard/user');
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
            <BaseContainer>
                <Container>
                    <div>
                    <Label>Username</Label>
                    <InputField
                        placeholder="Enter your new username here"
                        onChange={e => {
                            this.handleInputChange('username', e.target.value);
                        }}
                    />
                    </div>
                    <div>
                    <Label>Birth Date</Label>
                    <InputField
                        placeholder="Enter your birth date here"
                        onChange={e => {
                            this.handleInputChange('birthDate', e.target.value);
                        }}
                    />
                    </div>
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
                                    this.props.history.push('/game/dashboard/user');
                                }}
                            >
                                Cancel
                            </Button>
                        </ButtonContainer>
                    </div>
                </Container>
            </BaseContainer>
        );
    }
}

export default withRouter(EditProfile);
