import styled from "styled-components";
import React from "react";
import {withRouter} from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import {api, handleError} from "../../helpers/api";
import User from "../../components/shared/models/User";
import Spinner from "react-bootstrap/Spinner";
import UserListItem from "../Users/UserListItem";
import ProfilePageListItemNarrow from "./ProfilePageListItemNarrow";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2;
  grid-row: 2;
  margin-top: 20px;
  margin-left: 20px;
  align-content: left;
`;

const Title = styled.div`
  font-weight: bolder;
  font-size: 30px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  margin-top: 30px;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  margin-top: 20px;
`;

const ListContainer = styled.div`
  max-height: 300px;
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


class FriendsProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friendsList: null,
            friends: null
        };
        //this.getFriends();
    }

    componentDidMount(): void {
        this.getFriends();
    }

    goToInfoPageSavedLocations(locationId){
        this.props.history.push(`/map/informationpage/` + locationId);
    }

    async getFriends(){
        try {
            const url = '/users/friends/' + this.props.userId;

            const response = await api.get(url);

            this.setState({friends: response.data});

            //const friendsList = response.data.map((friend) => <LocationListItem friend={friend} refreshPage={this.refreshPage.bind(this)} goToInfoPageSavedLocations={this.goToInfoPageSavedLocations.bind(this)}/>);
            //this.setState({friendsList: friendsList});
        } catch (e) {
            alert(`Something went wrong while getting the friends: \n${handleError(e)}`);
        }
    }

    refreshPage(){
        window.location.reload();
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
                                        <ProfilePageListItemNarrow user={friend} goToProfile={this.goToProfile.bind(this)} refresh={this.getFriends.bind(this)}/>
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


export default withRouter(FriendsProfilePage);