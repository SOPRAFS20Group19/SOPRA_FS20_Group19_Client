import React from 'react';
import styled from 'styled-components';
import { api, handleError } from '../../helpers/api';
import {Button} from "../../views/variables/Button";
import { withRouter } from 'react-router-dom';
import '../../views/Map/BackgroundMap.css';
import '../../views/variables/ZurichEmblem.css';
import Spinner from "react-bootstrap/Spinner";
import UserListItem from "../../views/Users/UserListItem";
import Header from "../../views/Map/Header";
import SidebarUsers from "../../views/Users/SidebarUsers";

const UsersList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const UserContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: center;
`;

const ScrollContainer = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  max-height: 550px;
  overflow: scroll;
  width: 100%;
  grid-column: 1;
  grid-row: 3;
  @media only screen and (max-width: 800px){
    max-height: 60%;
    overflow: scroll;
  }
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  align-items: top;
  justify-content: center;
  margin-top: 75px;
  @media only screen and (max-width: 800px){
    display: block;
    max-height: 80%;
    overflow: scroll;
    position: absolute;
    top: 8%;
    margin-top: 0px;
  }
`;

const Title = styled.div`
  font-weight: bolder;
  font-size: 25px;
  letter-spacing: 0.1em;
  line-height: 1.1em;
  grid-column: 1;
  grid-row: 1;
  text-align: center;
  @media only screen and (max-width: 900px){
    font-size: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
  @media only screen and (max-width: 800px){
    margin-bottom: 7px;
  }
  @media only screen and (max-width: 500px){
    font-size: 15px
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  grid-column: 1;
  grid-row: 2;
`;

const SearchBar = styled.input`
  &::placeholder {
    color: black;
  }
  height: 35px;
  width: 50%;
  padding-left: 15px;
  border: 2px solid #003068;
  background: white;
  color: #000000;
  @media only screen and (max-width: 800px){
    font-size: 15px;
    margin-left: 15px;
    margin-right: 15px;
    max-width: 300px;
    height: 25px;
    padding-left: 5px;
  }
  @media only screen and (max-width: 500px){
    font-size: 12px;
    max-width: 200px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  @media only screen and (max-width: 800px){
    width: 200px;
  }
`;

class Users extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            searchValue: null,
            filterFriends: false,
        };
    }

    componentDidMount(): void {
        this.getUsers();
    }

    async getUsers() {
        try {
            const response = await api.get('/users');

            this.setState({ users: response.data });
        } catch (error) {
            alert(`Something went wrong while fetching the users: \n${handleError(error)}`);
        }
    }

    async getFriends(){
        try {
            const url = '/users/friends/' + localStorage.getItem('userId');

            const response = await api.get(url);

            this.setState({users: response.data});
        } catch (e) {
            alert(`Something went wrong while getting the friends: \n${handleError(e)}`);
        }
    }

    goToProfile(userId){
        this.props.history.push(`/user/` + userId);
    }

    handleInputChange(key, value) {
        this.setState({ [key]: value });
    }

    filterFriends(value){
        this.setState({ filterFriends: value });
        if (value){
            this.getFriends();
        }
        else {
            this.getUsers();
        }
    }

    // DO NOT CHANGE != to !==
    render() {
        return (
            <div>
                <SidebarUsers avatarNr={localStorage.getItem("userAvatar")} />
                <Header/>
            <MainContainer>
                <Title>Find other people to get to Know Your City with!</Title>
                <SearchContainer>
                    <SearchBar
                        placeholder="Search other users..."
                        onChange={e => {this.handleInputChange('searchValue', e.target.value);}}
                    />
                    <ButtonContainer>
                        {this.state.filterFriends ?
                            <Button
                                variant="outline-secondary"
                                height="100%"
                                onClick={() => {
                                    this.filterFriends(false);
                                }}
                            >
                                Show all users</Button>
                            :
                            <Button
                                variant="outline-secondary"
                                height="100%"
                                onClick={() => {
                                    this.filterFriends(true);
                                }}
                            >
                                Show your friends</Button>
                        }
                    </ButtonContainer>
                </SearchContainer>
                {!this.state.users ? (
                    <ScrollContainer>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    </ScrollContainer>
                ) : (
                    <ScrollContainer>
                        <UsersList>
                            {this.state.users.map(user => {
                                if (this.state.searchValue === null && user.id != localStorage.getItem("userId")){
                                    return (
                                        <UserContainer key={user.id}>
                                            <UserListItem user={user} goToProfile={this.goToProfile.bind(this)}/>
                                        </UserContainer>
                                    );
                                }
                                else if (this.state.searchValue !== null){
                                    if (user.username.toLowerCase().includes(this.state.searchValue.toLowerCase()) && user.id != localStorage.getItem("userId")){
                                        return (
                                            <UserContainer key={user.id}>
                                                <UserListItem user={user} goToProfile={this.goToProfile.bind(this)}/>
                                            </UserContainer>
                                        );
                                    }
                                }
                            })}
                        </UsersList>
                    </ScrollContainer>
                )}
            </MainContainer>
    </div>
        );
    }

}

export default withRouter(Users);