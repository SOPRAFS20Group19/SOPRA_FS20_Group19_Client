import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import User from '../shared/models/User';
import { withRouter } from 'react-router-dom';
import { Button } from '../../views/design/Button';
import '../../views/BackgroundMap.css';
import '../../views/ZurichEmblem.css';
import Header from "../../views/Header";
import { ButtonForLogin } from '../../views/design/ButtonForLogin';

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 620px;
  justify-content: center;
`;

const EmblemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 620px;
  justify-content: center;
`;


const FormContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  justify-content: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 110%;
  height: 400px;
  font-size: 16px;
  font-weight: 300;
  padding-left: 37px;
  padding-right: 37px;
  border-radius: 5px;
  background: none;
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

const InputField = styled.input`
  &::placeholder {
    color: black;
  }
  height: 35px;
  padding-left: 15px;
  margin-left: -4px;
  border: 2px solid #003068;
  margin-bottom: 20px;
  background: white;
  color: #000000;
`;

const Label = styled.label`
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

/**
 * Classes in React allow you to have an internal state within the class and to have the React life-cycle for your component.
 * You should have a class (instead of a functional component) when:
 * - You need an internal state that cannot be achieved via props from other parent components
 * - You fetch data from the server (e.g., in componentDidMount())
 * - You want to access the DOM via Refs
 * https://reactjs.org/docs/react-component.html
 * @Class
 */
class Registration extends React.Component {
    /**
     * If you don’t initialize the state and you don’t bind methods, you don’t need to implement a constructor for your React component.
     * The constructor for a React component is called before it is mounted (rendered).
     * In this case the initial state is defined in the constructor. The state is a JS object containing two fields: name and username
     * These fields are then handled in the onChange() methods in the resp. InputFields
     */
    constructor() {
        super();
        this.state = {
            username: null,
            name: null,
            password: null
        };
    }
    /**
     * HTTP POST request is sent to the backend.
     * If the request is successful, a new user is returned to the front-end
     * and its token is stored in the localStorage.
     */
    async registration() {
        try {
            const requestBody = JSON.stringify({
                username: this.state.username,
                name: this.state.name,
                password: this.state.password
            });
            const response = await api.post('/users', requestBody);

            // Get the returned user and update a new object.
            new User(response.data);

            // Registration successfully worked --> navigate to the route /login in the AppRouter
            this.props.history.push(`/login`);
        } catch (error) {
            alert(`Something went wrong during the registration: \n${handleError(error)}`);
        }
    }

    /**
     *  Every time the user enters something in the input field, the state gets updated.
     * @param key (the key of the state for identifying the field that needs to be updated)
     * @param value (the value that gets assigned to the identified state key)
     */
    handleInputChange(key, value) {
        // Example: if the key is username, this statement is the equivalent to the following one:
        // this.setState({'username': value});
        this.setState({ [key]: value });
    }

    /**
     * componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
     * Initialization that requires DOM nodes should go here.
     * If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
     * You may call setState() immediately in componentDidMount().
     * It will trigger an extra rendering, but it will happen before the browser updates the screen.
     */
    componentDidMount() {}


    render() {
        return (
            //className html (BackgroundMap.css) and container (ZurichEmblem.css) are css files with the background images in it (map and emblem)
                <BackgroundContainer className={'html'}>
                    <Header/>
                    <EmblemContainer className={'container'}>
                        <FormContainer>
                            <Form>
                                <InputField
                                    placeholder="Enter your username here"
                                    onChange={e => {
                                        this.handleInputChange('username', e.target.value);
                                    }}
                                />
                                <InputField
                                    placeholder="Enter your name here"
                                    onChange={e => {
                                        this.handleInputChange('name', e.target.value);
                                    }}
                                />
                                <InputField
                                    placeholder="Enter your password here"
                                    onChange={e => {
                                        this.handleInputChange('password', e.target.value);
                                    }}
                                />
                                <ButtonContainer>
                                    <Button
                                        disabled={!this.state.username || !this.state.password || !this.state.name}
                                        width="75%"
                                        onClick={() => {
                                            this.registration();
                                        }}
                                    >
                                        Register
                                    </Button>
                                </ButtonContainer>
                                <ButtonContainer>
                                    <ButtonForLogin
                                        width="75%"
                                        onClick={() => {
                                            this.props.history.push(`/login`);
                                        }}
                                    >
                                        Login here
                                    </ButtonForLogin>
                                </ButtonContainer>
                            </Form>
                        </FormContainer>
                    </EmblemContainer>
                </BackgroundContainer>

            /*
                <BaseContainer className="container">
                    <FormContainer>
                        <Form>
                            <Label>Username</Label>
                            <InputField
                                placeholder="Enter your username here"
                                onChange={e => {
                                    this.handleInputChange('username', e.target.value);
                                }}
                            />
                            <Label>Name</Label>
                            <InputField
                                placeholder="Enter your name here"
                                onChange={e => {
                                    this.handleInputChange('name', e.target.value);
                                }}
                            />
                            <Label>Password</Label>
                            <InputField
                                placeholder="Enter your password here"
                                onChange={e => {
                                    this.handleInputChange('password', e.target.value);
                                }}
                            />
                            <ButtonContainer>
                                <Button
                                    disabled={!this.state.username || !this.state.password || !this.state.name}
                                    width="75%"
                                    onClick={() => {
                                        this.registration();
                                    }}
                                >
                                    Register
                                </Button>
                            </ButtonContainer>
                            <ButtonContainer>
                                <Button
                                    width="75%"
                                    onClick={() => {
                                        this.props.history.push(`/login`);
                                    }}
                                >
                                    Login here
                                </Button>
                            </ButtonContainer>
                        </Form>
                    </FormContainer>
                </BaseContainer>
                */
        );
    }
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default withRouter(Registration);
