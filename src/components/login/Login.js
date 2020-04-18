import React from 'react';
import styled from 'styled-components';
import { api, handleError } from '../../helpers/api';
import User from '../shared/models/User';
import { withRouter } from 'react-router-dom';
import { Button } from '../../views/design/Button';
import '../../views/BackgroundMap.css';
import '../../views/ZurichEmblem.css';
import Header from "../../views/Header";
import {ButtonForLogin} from "../../views/design/ButtonForLogin";

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
class Login extends React.Component {
  /**
   * If you don’t initialize the state and you don’t bind methods, you don’t need to implement a constructor for your React component.
   * The constructor for a React component is called before it is mounted (rendered).
   * In this case the initial state is defined in the constructor. The state is a JS object containing two fields: name and username
   * These fields are then handled in the onChange() methods in the resp. InputFields
   */
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      username: null,
      password: null,
      loggedInUser: null
    };
  }
  /**
   * HTTP POST request is sent to the backend.
   * If the request is successful, a new user is returned to the front-end
   * and its token is stored in the localStorage.
   */
  async login() {
    try {
      const requestBody = JSON.stringify({
        name: this.state.name,
        username: this.state.username,
        password: this.state.password
      });
      const response = await api.put('/login', requestBody);

      // Get the returned user and update a new object.
      const user = new User(response.data);

      // Store the token into the local storage.
      localStorage.setItem('token', user.token);
      localStorage.setItem('userId', user.id);

      // Login successfully worked --> navigate to the the route /map in the GameRouter
      this.props.history.push(`/map`);
    } catch (error) {
      alert(`Something went wrong during the login: \n${handleError(error)}`);
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
              placeholder="Enter your password here"
              onChange={e => {
                this.handleInputChange('password', e.target.value);
              }}
            />
            <ButtonContainer>
              <Button
                disabled={!this.state.username || !this.state.password}
                width="75%"
                onClick={() => {
                  this.login();
                }}
              >
                Login
              </Button>
            </ButtonContainer>
            <ButtonContainer>
              <ButtonForLogin
                  width="75%"
                  onClick={() => {
                    this.props.history.push(`/map`);
                  }}
              >
                Continue as a guest
              </ButtonForLogin>
            </ButtonContainer>
            <ButtonContainer>
              <ButtonForLogin
                  width="75%"
                  onClick={() => {
                    this.props.history.push(`/registration`);
                  }}
              >
                Register here
              </ButtonForLogin>
            </ButtonContainer>
          </Form>
        </FormContainer>
          </EmblemContainer>
        </BackgroundContainer>
    );
  }
}

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default withRouter(Login);
