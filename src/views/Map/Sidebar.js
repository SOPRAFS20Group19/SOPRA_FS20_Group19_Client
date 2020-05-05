import React from "react";
import {useState} from "react";
import styled from "styled-components";
import {BaseContainer} from "../../helpers/layout";
import {Button} from "../variables/Button";
import {RoundButton} from "../variables/RoundButton";
import {Nav} from "react-bootstrap";
import {UserIcon} from "../variables/UserIcon";
import {FilterIcon} from "../variables/FilterIcon";
import {PlusIcon} from "../variables/PlusIcon";
import { api, handleError } from '../../helpers/api';
import UserIconComplete from "../UserInformation/UserIconComplete.svg"
import FilterIconComplete from "../Filter/FilterIconComplete.svg"
import PlusIconComplete from "./PlusIconComplete.svg"
import UsersIcon from "./UsersIcon.svg"
import Profile from "../UserInformation/Profile";
import Filter from "../../components/map/Filter";
import AddLocation from "../../components/addLocation/AddLocation";
import { withRouter } from 'react-router-dom';
import LogoutIcon from "../variables/LogoutIcon.svg"
import Popover from "react-bootstrap/Popover";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {ButtonForLogin} from "../variables/ButtonForLogin";


import avatarArray from "../Avatar/AvatarArray"

//Sidebar for the map -->Refactoring the name of the class later

const Container = styled.div`
  &:hover {
    opacity: 0.9;
    background: #003068;
  }
  height: 55%;
  min-height: 500px;
  width: 10%;
  background: #66A3E0;
  display: flex;
  justify-content: top;
  align-items: center;
  opacity: 0.4;
  position: absolute;
  top: 0;
  right: 0;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const HoverContainer = styled.div`
  display: flex;
  color: white;
  background: transparent;
  justify-content: center;
  margin-top: 5px;
  font-weight: bold;
  font-size: small;
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;
`;

const imgStyle = {
    "height": "100%",
    "width": "100%"
};

class Sidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showUser: false,
            showFilter: false,
            showAdd: false,
            showUserHover: false,
            showFilterHover: false,
            showAddHover: false,
            showAllUsersHover: false
        }
    }


    openUserProfile(){
        this.props.history.push('/userprofile');
    }

    applyFilterSidebar(){
        this.props.getFilteredLocations();
    }


    logout() {
        try{
            api.put('/logout/' + localStorage.getItem('userId')); //logs out user in database
            localStorage.removeItem('userId');
            localStorage.removeItem('showFountains');
            localStorage.removeItem('showFireplaces');
            localStorage.removeItem('showRecyclingStations');
            localStorage.removeItem('userAvatar');
            this.props.history.push('/login');
        }catch (error) {
            alert(`Something went wrong during the logout: \n${handleError(error)}`);
          }
    }

    toggleShowUserHover(value){
        this.setState({showUserHover: value})
    }

    toggleShowFilterHover(value){
        this.setState({showFilterHover: value})
    }

    toggleShowAddHover(value){
        this.setState({showAddHover: value})
    }

    toggleShowAllUsersHover(value){
        this.setState({showAllUsersHover: value})
    }

    render() {
        return (
            <Container>
                {localStorage.getItem("userId") != null ?
                    <OverlayTrigger
                        rootClose={true}
                        show={this.state.showUser}
                        onHide={() => this.setState({ showUser: false })}
                        trigger="click"
                        placement="left"
                        overlay={<Popover id="popover-basic">
                        <Popover.Content>
                            <ButtonContainer>
                                <Button
                                    width="100%"
                                    onClick={() => {this.openUserProfile();}}>Go to your profile
                                </Button>
                            </ButtonContainer>
                            <ButtonContainer>
                                <ButtonForLogin
                                    width="100%"
                                    onClick={() => {this.logout();}}>Logout
                                </ButtonForLogin>
                            </ButtonContainer>
                        </Popover.Content>
                    </Popover>}>
                        <div>
                    <ButtonContainer>
                        <RoundButton
                            width="75%"
                            onMouseOver={() => this.toggleShowUserHover(true)}
                            onMouseLeave={() => this.toggleShowUserHover(false)}
                        >
                            <img src={avatarArray[this.props.avatarNr]} style={imgStyle} />
                        </RoundButton>
                    </ButtonContainer>
                            {this.state.showUserHover ? <HoverContainer>Profile options</HoverContainer> : null}
                        </div>
                    </OverlayTrigger>
                    :
                    (<OverlayTrigger
                        rootClose={true}
                        show={this.state.showUser}
                        onHide={() => this.setState({ showUser: false })}
                        trigger="click"
                        placement="left"
                        overlay={<Popover id="popover-basic">
                            <Popover.Content>
                                Create a profile or login below.
                                <ButtonContainer>
                                    <Button
                                        width="75%"
                                        onClick={() => {this.props.history.push(`/registration`);}}>Register here
                                    </Button>
                                </ButtonContainer>
                                <ButtonContainer>
                                    <ButtonForLogin
                                        width="75%"
                                        onClick={() => {this.props.history.push(`/login`);}}>Login here
                                    </ButtonForLogin>
                                </ButtonContainer>
                            </Popover.Content>
                        </Popover>}>
                        <div>
                            <ButtonContainer>
                                <RoundButton
                                    width="75%"
                                    onMouseOver={() => this.toggleShowUserHover(true)}
                                    onMouseLeave={() => this.toggleShowUserHover(false)}
                                >
                                    <img src={avatarArray[this.props.avatarNr]} style={imgStyle} />
                                </RoundButton>
                            </ButtonContainer>
                            {this.state.showUserHover ? <HoverContainer>Profile options</HoverContainer> : null}
                        </div>
                    </OverlayTrigger>)
                }

                {localStorage.getItem("userId") != null ?
                    <OverlayTrigger
                        rootClose={true}
                        show={this.state.showFilter}
                        onHide={() => this.setState({ showFilter: false })}
                        trigger="click"
                        placement="left"
                        overlay={<Filter applyFilterSidebar={this.applyFilterSidebar.bind(this)}/>}>
                        <div>
                            <ButtonContainer>
                                <RoundButton
                                    width="75%"
                                    onMouseOver={() => this.toggleShowFilterHover(true)}
                                    onMouseLeave={() => this.toggleShowFilterHover(false)}
                                >
                                    <img src={FilterIconComplete}/>
                                </RoundButton>
                            </ButtonContainer>
                            {this.state.showFilterHover ? <HoverContainer>Filter</HoverContainer> : null}
                        </div>
                    </OverlayTrigger>
                    :
                    <OverlayTrigger
                        rootClose={true}
                        show={this.state.showFilter}
                        onHide={() => this.setState({ showFilter: false })}
                        trigger="click"
                        placement="left"
                        overlay={<Popover id="popover-basic">
                        <Popover.Title as="h3">You cannot access this feature!</Popover.Title>
                        <Popover.Content>
                            Please register or login first to use this feature.
                            <ButtonContainer>
                                <Button width="75%" onClick={() => {this.props.history.push(`/registration`);}}>Register here</Button>
                            </ButtonContainer>
                            <ButtonContainer>
                                <ButtonForLogin
                                    width="75%"
                                    onClick={() => {this.props.history.push(`/login`);}}>Login here
                                </ButtonForLogin>
                            </ButtonContainer>
                        </Popover.Content>
                    </Popover>}>
                        <div>
                        <ButtonContainer>
                            <RoundButton
                                width="75%"
                                onMouseOver={() => this.toggleShowFilterHover(true)}
                                onMouseLeave={() => this.toggleShowFilterHover(false)}
                            >
                                <img src={FilterIconComplete}/>
                            </RoundButton>
                        </ButtonContainer>
                        {this.state.showFilterHover ? <HoverContainer>Filter</HoverContainer> : null}
                        </div>
                    </OverlayTrigger>
                }


                {localStorage.getItem("userId") != null ?
                    <div>
                    <ButtonContainer>
                        <RoundButton
                            width="75%"
                            onMouseOver={() => this.toggleShowAddHover(true)}
                            onMouseLeave={() => this.toggleShowAddHover(false)}
                            onClick={() => {
                                this.props.history.push(`/map/addlocation`);
                            }}
                        >
                            <img src={PlusIconComplete}/>
                        </RoundButton>
                    </ButtonContainer>
                        {this.state.showAddHover ? <HoverContainer>Add new location</HoverContainer> : null}
                    </div>
                    :
                    <OverlayTrigger
                        rootClose={true}
                        show={this.state.showAdd}
                        onHide={() => this.setState({ showAdd: false })}
                        trigger="click"
                        placement="left"
                        overlay={<Popover id="popover-basic">
                    <Popover.Title as="h3">You cannot access this feature!</Popover.Title>
                    <Popover.Content>
                    Please register or login first to use this feature.
                    <ButtonContainer>
                    <Button width="75%" onClick={() => {this.props.history.push(`/registration`);}}>Register here</Button>
                    </ButtonContainer>
                        <ButtonContainer>
                            <ButtonForLogin
                                width="75%"
                                onClick={() => {this.props.history.push(`/login`);}}>Login here
                            </ButtonForLogin>
                        </ButtonContainer>
                    </Popover.Content>
                    </Popover>}>
                        <div>
                        <ButtonContainer>
                            <RoundButton
                                width="75%"
                                onMouseOver={() => this.toggleShowAddHover(true)}
                                onMouseLeave={() => this.toggleShowAddHover(false)}
                            >
                                <img src={PlusIconComplete}/>
                            </RoundButton>
                        </ButtonContainer>
                        {this.state.showAddHover ? <HoverContainer>Add new location</HoverContainer> : null}
                        </div>
                    </OverlayTrigger>
                }

                {localStorage.getItem("userId") != null ?
                    <div>
                        <ButtonContainer>
                            <RoundButton
                                width="75%"
                                onMouseOver={() => this.toggleShowAllUsersHover(true)}
                                onMouseLeave={() => this.toggleShowAllUsersHover(false)}
                                onClick={() => {
                                    this.props.history.push(`/users`);
                                }}
                            >
                                <img src={UsersIcon}/>
                            </RoundButton>
                        </ButtonContainer>
                        {this.state.showAllUsersHover ? <HoverContainer>All users</HoverContainer> : null}
                    </div>
                    :
                    null
                }

            </Container>
        );
    }
}

export default withRouter(Sidebar);