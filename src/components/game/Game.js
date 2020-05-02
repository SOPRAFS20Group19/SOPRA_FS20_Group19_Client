import React from 'react';
import styled from 'styled-components';
import { BaseContainer } from '../../helpers/layout';
import { api, handleError } from '../../helpers/api';
import Player from '../../views/variables/Player';
import { Spinner } from '../../views/variables/Spinner';
import { Button } from '../../views/variables/Button';
import { withRouter } from 'react-router-dom';

const Container = styled(BaseContainer)`
  color: white;
  text-align: center;
`;

const Users = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PlayerContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null,
      loggedInUserToken: localStorage.getItem("token"),
      loggedInUserId: localStorage.getItem("userId")
    };
  }

  // this method logs the user out by removing the token and his ID from the localStorage
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.setState({ loggedInUserToken: null });
    this.setState({ loggedInUserId: null });
    this.props.history.push('/login');
  }

  // this method is called when clicking on the show profile page
  showProfile(id) {
    // the ID of the user that should be shown is stored in the localStorage and the user is redirected to the user profile
    localStorage.setItem('showUserId', id);
    this.props.history.push({pathname: '/game/dashboard/user', userId: id});
  }

  async componentDidMount() {
    try {
      const response = await api.get('/users');
      // delays continuous execution of an async operation for 1 second.
      // This is just a fake async call, so that the spinner can be displayed
      // feel free to remove it :)
      // await new Promise(resolve => setTimeout(resolve, 1000));

      // Get the returned users and update the state.
      this.setState({ users: response.data });

      // This is just some data for you to see what is available.
      // Feel free to remove it.
      console.log('request to:', response.request.responseURL);
      console.log('status code:', response.status);
      console.log('status text:', response.statusText);
      console.log('requested data:', response.data);

      // See here to get more data.
      console.log(response);
    } catch (error) {
      alert(`Something went wrong while fetching the users: \n${handleError(error)}`);
    }
  }

  render() {
    return (
      <Container>
        <h2>Happy Coding! </h2>
        <p>Get all users from secure end point:</p>
        {!this.state.users ? (
          <Spinner />
        ) : (
          <div>
            <Users>
              {this.state.users.map(user => {
                return (
                  <PlayerContainer key={user.id}>
                    <Player user={user}/>
                    <Button
                        onClick={() => {this.showProfile(user.id)}}
                        style={{width: 300}}
                    >
                      Show Profile of {user.username}
                    </Button>
                  </PlayerContainer>
                );
              })}
            </Users>
            <Button
              width="100%"
              onClick={() => {
                this.logout();
              }}
            >
              Logout
            </Button>
            <Button
                width="100%"
                onClick={() => {
                  this.props.history.push('/map');
                }}
            >
              Show map
            </Button>
          </div>
        )}
      </Container>
    );
  }
}

export default withRouter(Game);