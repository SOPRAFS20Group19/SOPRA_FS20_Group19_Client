import styled from "styled-components";
import React from "react";
import {withRouter} from "react-router-dom";
import {api, handleError} from "../../helpers/api";
import Spinner from "react-bootstrap/Spinner";
import UserListItemNarrow from "./UserListItemNarrow";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2;
  grid-row: 2 / span 3;
  margin-top: 20px;
  margin-left: 20px;
  align-content: left;
  @media only screen and (max-width: 1100px){
      grid-column: 1
      grid-row: 5
  }
`;

const Title = styled.div`
  font-weight: bolder;
  font-size: 30px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  margin-top: 30px;
  @media only screen and (max-width: 700px){
    font-size: 20px
  }
  @media only screen and (max-width: 500px){
    font-size: 15px
  }
`;

const ListContainer = styled.div`
  max-height: 400px;
  overflow: scroll;
  width: 100%;
`;

const UsersList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const UserContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: start;
  
`;


class FriendsUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friendsList: null,
            friends: null
        };
    }

    componentDidMount() {
        this.getFriends();
    }

    async getFriends(){
        try {
            const url = '/users/friends/' + this.props.userId;

            const response = await api.get(url);

            this.setState({friends: response.data});
        } catch (e) {
            alert(`Something went wrong while getting the friends: \n${handleError(e)}`);
        }
    }

    goToProfile(userId){
        this.props.history.push(`/user/` + userId);
    }

    render(){
        return (
            <Container>
                <Title>
                    FRIENDS
                </Title>
                {!this.state.friends ? (<Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>) : (
                    <ListContainer>
                        <UsersList>
                            {this.state.friends.map(friend => {
                                return (
                                    <UserContainer key={friend.id}>
                                        <UserListItemNarrow user={friend} goToProfile={this.goToProfile.bind(this)} refresh={this.getFriends.bind(this)}/>
                                    </UserContainer>
                                );
                            })}
                        </UsersList>
                    </ListContainer>
                )}
            </Container>
        )
    }
}


export default withRouter(FriendsUser);