import React from 'react';
import styled from 'styled-components';
import {api, handleError} from '../../helpers/api';
import User from '../shared/models/User';
import {withRouter} from 'react-router-dom';
import {Button} from '../../views/variables/Button';
import '../../views/Map/BackgroundMap.css';
import '../../views/variables/ZurichEmblem.css';
import {ButtonForLogin} from "../../views/variables/ButtonForLogin";
import HeaderForLogin from "../../views/UserInformation/HeaderForLogin";
import {RoundButton} from "../../views/variables/RoundButton";
import avatarArray from "../../views/Avatar/AvatarArray";
import AboutUsQuestion1 from '../../views/AboutUs/AboutUsQuestion1.png';

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 20px;
  align-content: center;
`;

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 620px;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 768px;
  min-width: 1366px;
  margin-bottom: fill;
  @media only screen and (max-width: 1215px){
    
  }
  
  @media only screen and (max-width: 900px){
    min-width: 700px;
  }
  @media only screen and (max-width: 500px){
    min-width: 300px;
    min-height: 100px;
  }
`;

const EmblemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 620px;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: 400px;
  background-position: center;
  @media only screen and (max-width: 1215px){
    max-width: 1000;
    display: center;
  }
    
  @media only screen and (max-width: 900px){
    max-width: 800;
    display: center;
  }
  
  @media only screen and (max-width: 500px){
    max-width: 300;
    background-size: 320px;
    display: center;
   
  }
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
  min-width: 240px;
`;

const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    min-width: 240px;
`;

const AboutUsButton = styled.div`
  &:hover {
    transform: translateY(-2px);
  }
  padding: 0px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  transition: all 0.3s ease;
`;

const ErrorMessage = styled.div`
  font-weight: normal;
  font-size: medium;
  flex-direction: row;
  color: red;
  margin-top: 5px;
  max-width: 200px;
  text-align: center;
`;

/*const TextHover = styled.p`
    color: #000;
    :hover {
        color: pink;
        cursor: mouse; 
    }
`*/

function ValidationMessage(props) {
    if (props.valid) {
        return(
            <ErrorMessage className='error-msg'>{props.message}</ErrorMessage>
        )
    }
    return null;
}

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
            loggedInUser: null,
            hasErrorMessage: false,
            errorMessage: ""
        };
    }

    handleErrorDesigned(error){

        const response = error.response;

        // catch 4xx and 5xx status codes

        if (response && !!`${response.status}`.match(/^[4|5]\d{2}$/)) {
            if (response.data.status) {
                this.setState({errorMessage: response.data.message})
            } else {
                this.setState({errorMessage: response.data})
            }
        }
        else {
            if (error.message.match(/Network Error/)) {
                alert('The server cannot be reached. Did you start it?');
            }
            console.log('Something else happened.', error);
        }
    }



    /**
     * HTTP POST request is sent to the backend.
     * If the request is successful, a new user is returned to the front-end
     * and its token is stored in the localStorage.
     */
    async login() {
        try {
            const requestBody = JSON.stringify({
                username: this.state.username,
                password: this.state.password
            });
            const response = await api.put('/login', requestBody);

            // Get the returned user and update a new object.
            const user = new User(response.data);

            //check whether there already was a user in the local storage, if yes, logout this user
            if (localStorage.getItem('userId')) {
                api.put('/logout/' + localStorage.getItem('userId'));
            }

            // Store the id into the local storage.
            localStorage.setItem('userId', user.id);

            // Login successfully worked --> navigate to the the route /map in the GameRouter
            this.props.history.push(`/map`);
        } catch (error) {
            this.handleErrorDesigned(error);
            this.setState({hasErrorMessage: true});
            //alert(`Something went wrong during the login: \n${handleError2(error)}`);
        }
    }

    toggleShowAboutUsHover(value){
        this.setState({showAboutUsHover: value})
    }

    /**
     *  Every time the user enters something in the input field, the state gets updated.
     * @param key (the key of the state for identifying the field that needs to be updated)
     * @param value (the value that gets assigned to the identified state key)
     */
    handleInputChange(key, value) {
        // Example: if the key is username, this statement is the equivalent to the following one:
        // this.setState({'username': value});
        this.setState({[key]: value});
    }

    /**
     * componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
     * Initialization that requires DOM nodes should go here.
     * If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
     * You may call setState() immediately in componentDidMount().
     * It will trigger an extra rendering, but it will happen before the browser updates the screen.
     */
    componentDidMount() {
    }

    render() {
        return (
            <BackgroundContainer className={'html'}>
                <HeaderForLogin/>
                <EmblemContainer className={'container'}>
                    <FormContainer>
                        <Form>
                            <InputField
                                onKeyPress={e => {
                                    if (e.key === 'Enter') {
                                        if (this.state.username && this.state.password) {
                                            this.login();
                                        }
                                    }
                                }}
                                placeholder="Enter your username here"
                                onChange={e => {
                                    this.handleInputChange('username', e.target.value);
                                }}
                            />
                            <InputField
                                onKeyPress={e => {
                                    if (e.key === 'Enter') {
                                        if (this.state.username && this.state.password) {
                                            this.login();
                                        }
                                    }
                                }}
                                placeholder="Enter your password here"
                                type="password"
                                onChange={e => {
                                    this.handleInputChange('password', e.target.value);
                                }}
                            />
                            <ErrorContainer>
                                <ValidationMessage valid={this.state.hasErrorMessage} message={this.state.errorMessage}/>
                            </ErrorContainer>
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
                            <ButtonContainer>
                                <AboutUsButton
                                    onClick={() => {
                                        localStorage.setItem('cameToAboutUsFrom', 'login');
                                        this.props.history.push(`/aboutus`);
                                    }}
                                >
                                    <img src={AboutUsQuestion1} width="40%" heigth= "40%"/>
                                </AboutUsButton>
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
