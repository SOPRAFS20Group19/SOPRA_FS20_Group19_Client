import React from "react";
import styled from "styled-components";
import {Button} from "../variables/Button";
import {RoundButton} from "../variables/RoundButton";
import { api, handleError } from '../../helpers/api';
import FilterIconComplete from "../Filter/FilterIconComplete.svg"
import PlusIconComplete from "./PlusIconComplete.svg"
import UsersIcon from "./UsersIcon.svg"
import Filter from "../../components/map/Filter";
import { withRouter } from 'react-router-dom';
import CurrentLocationIcon from "./CurrentLocationIcon.svg"
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {ButtonForLogin} from "../variables/ButtonForLogin";


import avatarArray from "../Avatar/AvatarArray"

//Sidebar for the map

const Container = styled.div`
  &:hover {
    opacity: 0.9;
    background: #003068;
  }
  padding: 10px;
  padding-bottom: 15px;
  min-width: 10%;
  background: #66A3E0;
  display: flex;
  justify-content: top;
  align-items: center;
  opacity: 0.4;
  position: absolute;
  right: 0;
  flex-direction: column;
  @media only screen and (max-width: 800px){
    width: 100%;
    height: 12%;
    position: absolute;
    bottom: 5%;
    flex-direction: row;
    background: white;
    opacity: 0;
    &:hover {
    opacity: 0;
    background: white;
  }
  }
  @media only screen and (min-width: 800px){
    top: 0;
  }
`;

const Container2 = styled.div`
  &:hover {
    opacity: 0;
    background: #003068;
  }
  padding: 10px;
  padding-bottom: 15px;
  min-width: 10%;
  background: #66A3E0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 0;
  position: absolute;
  bottom: 0%;
  flex-direction: column;
  margin-left: -10%;
  @media only screen and (max-width: 800px){
    width: 100%;
    height: 12%;
    margin-left: 0%;
    position: absolute;
    bottom: 5%;
    flex-direction: row;
    background: white;
    opacity: 1;
    &:hover {
    opacity: 1;
    background: white;
  }
  }
  @media only screen and (min-width: 800px){
    top: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  @media only screen and (max-width: 800px){
      margin-top: 0px;
      margin-left: 0px;
`;

const ButtonContainerPopup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  @media only screen and (max-width: 800px){
      margin-top: 10px;
`;

const HoverContainer = styled.div`
  display: flex;
  color: white;
  background: transparent;
  justify-content: center;
  margin-top: 5px;
  align-self: center;
  font-weight: bold;
  font-size: small;
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;
  @media only screen and (max-width: 800px){
    color: black;
    margin-bottom: 20px;
    font-size: 10px;
  }
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
            showAllUsers: false,
            showCenterMap: false,
            showUserHover: false,
            showFilterHover: false,
            showAddHover: false,
            showAllUsersHover: false,
            centerMapHover: false
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
            localStorage.removeItem('userAvatar');
            localStorage.setItem('showFountains', true);
            localStorage.setItem('showFireplaces', true);
            localStorage.setItem('showRecyclingStations', true);
            localStorage.setItem('showToilets', true);
            localStorage.setItem('showTableTennis', true);
            localStorage.setItem('showBenches', true);
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

    toggleCenterMap(value){
        this.setState({centerMapHover: value})
    }

    render() {
        return (
            <div>
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
                            <ButtonContainerPopup >
                                <Button
                                    width="100%"
                                    onClick={() => {this.openUserProfile();}}>Go to your profile
                                </Button>
                            </ButtonContainerPopup>
                            <ButtonContainerPopup >
                                <ButtonForLogin
                                    width="100%"
                                    onClick={() => {this.logout();}}>Logout
                                </ButtonForLogin>
                            </ButtonContainerPopup>
                        </Popover.Content>
                    </Popover>}>
                        <div>
                    <ButtonContainer >
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
                                <ButtonContainerPopup >
                                    <Button
                                        width="75%"
                                        onClick={() => {this.props.history.push(`/registration`);}}>Register here
                                    </Button>
                                </ButtonContainerPopup>
                                <ButtonContainerPopup >
                                    <ButtonForLogin
                                        width="75%"
                                        onClick={() => {this.props.history.push(`/login`);}}>Login here
                                    </ButtonForLogin>
                                </ButtonContainerPopup>
                            </Popover.Content>
                        </Popover>}>
                        <div>
                            <ButtonContainer >
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
                        overlay={<Filter filterSpinner={this.props.filterSpinner} applyFilterSidebar={this.applyFilterSidebar.bind(this)}/>}>
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
                            <ButtonContainerPopup>
                                <Button width="75%" onClick={() => {this.props.history.push(`/registration`);}}>Register here</Button>
                            </ButtonContainerPopup>
                            <ButtonContainerPopup>
                                <ButtonForLogin
                                    width="75%"
                                    onClick={() => {this.props.history.push(`/login`);}}>Login here
                                </ButtonForLogin>
                            </ButtonContainerPopup>
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
                    <ButtonContainerPopup>
                    <Button width="75%" onClick={() => {this.props.history.push(`/registration`);}}>Register here</Button>
                    </ButtonContainerPopup>
                        <ButtonContainerPopup>
                            <ButtonForLogin
                                width="75%"
                                onClick={() => {this.props.history.push(`/login`);}}>Login here
                            </ButtonForLogin>
                        </ButtonContainerPopup>
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
                    <OverlayTrigger
                        rootClose={true}
                        show={this.state.showAllUsers}
                        onHide={() => this.setState({ showAllUsers: false })}
                        trigger="click"
                        placement="left"
                        overlay={<Popover id="popover-basic">
                            <Popover.Title as="h3">You cannot access this feature!</Popover.Title>
                            <Popover.Content>
                                Please register or login first to use this feature.
                                <ButtonContainerPopup>
                                    <Button width="75%" onClick={() => {this.props.history.push(`/registration`);}}>Register here</Button>
                                </ButtonContainerPopup>
                                <ButtonContainerPopup>
                                    <ButtonForLogin
                                        width="75%"
                                        onClick={() => {this.props.history.push(`/login`);}}>Login here
                                    </ButtonForLogin>
                                </ButtonContainerPopup>
                            </Popover.Content>
                        </Popover>}>
                        <div>
                            <ButtonContainer>
                                <RoundButton
                                    width="75%"
                                    onMouseOver={() => this.toggleShowAllUsersHover(true)}
                                    onMouseLeave={() => this.toggleShowAllUsersHover(false)}
                                >
                                    <img src={UsersIcon}/>
                                </RoundButton>
                            </ButtonContainer>
                            {this.state.showAllUsersHover ? <HoverContainer>All users</HoverContainer> : null}
                        </div>
                    </OverlayTrigger>
                }

                {localStorage.getItem("userId") != null ?
                    <div>
                        <ButtonContainer>
                            <RoundButton
                                width="75%"
                                onMouseOver={() => this.toggleCenterMap(true)}
                                onMouseLeave={() => this.toggleCenterMap(false)}
                                onClick={() => {
                                    this.props.centerMapAtCurrentLocation();
                                }}
                            >
                                <img src={CurrentLocationIcon}/>
                            </RoundButton>
                        </ButtonContainer>
                        {this.state.centerMapHover ? <HoverContainer>Current location</HoverContainer> : null}
                    </div>
                    :
                    <OverlayTrigger
                        rootClose={true}
                        show={this.state.showCenterMap}
                        onHide={() => this.setState({ showCenterMap: false })}
                        trigger="click"
                        placement="left"
                        overlay={<Popover id="popover-basic">
                            <Popover.Title as="h3">You cannot access this feature!</Popover.Title>
                            <Popover.Content>
                                Please register or login first to use this feature.
                                <ButtonContainerPopup>
                                    <Button width="75%" onClick={() => {this.props.history.push(`/registration`);}}>Register here</Button>
                                </ButtonContainerPopup>
                                <ButtonContainerPopup>
                                    <ButtonForLogin
                                        width="75%"
                                        onClick={() => {this.props.history.push(`/login`);}}>Login here
                                    </ButtonForLogin>
                                </ButtonContainerPopup>
                            </Popover.Content>
                        </Popover>}>
                        <div>
                            <ButtonContainer>
                                <RoundButton
                                    width="75%"
                                    onMouseOver={() => this.toggleCenterMap(true)}
                                    onMouseLeave={() => this.toggleCenterMap(false)}
                                >
                                    <img src={CurrentLocationIcon}/>
                                </RoundButton>
                            </ButtonContainer>
                            {this.state.centerMapHover ? <HoverContainer>Current location</HoverContainer> : null}
                        </div>
                    </OverlayTrigger>
                }

            </Container>
                <Container2>
                    {localStorage.getItem("userId") != null ?
                        <OverlayTrigger
                            rootClose={true}
                            show={this.state.showUser}
                            onHide={() => this.setState({ showUser: false })}
                            trigger="click"
                            placement="top"
                            overlay={<Popover id="popover-basic">
                                <Popover.Content>
                                    <ButtonContainerPopup >
                                        <Button
                                            width="100%"
                                            onClick={() => {this.openUserProfile();}}>Go to your profile
                                        </Button>
                                    </ButtonContainerPopup>
                                    <ButtonContainerPopup >
                                        <ButtonForLogin
                                            width="100%"
                                            onClick={() => {this.logout();}}>Logout
                                        </ButtonForLogin>
                                    </ButtonContainerPopup>
                                </Popover.Content>
                            </Popover>}>
                            <div>
                                <ButtonContainer >
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
                            placement="top"
                            overlay={<Popover id="popover-basic">
                                <Popover.Content>
                                    Create a profile or login below.
                                    <ButtonContainerPopup >
                                        <Button
                                            width="75%"
                                            onClick={() => {this.props.history.push(`/registration`);}}>Register here
                                        </Button>
                                    </ButtonContainerPopup>
                                    <ButtonContainerPopup >
                                        <ButtonForLogin
                                            width="75%"
                                            onClick={() => {this.props.history.push(`/login`);}}>Login here
                                        </ButtonForLogin>
                                    </ButtonContainerPopup>
                                </Popover.Content>
                            </Popover>}>
                            <div>
                                <ButtonContainer >
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
                            placement="top"
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
                            placement="top"
                            overlay={<Popover id="popover-basic">
                                <Popover.Title as="h3">You cannot access this feature!</Popover.Title>
                                <Popover.Content>
                                    Please register or login first to use this feature.
                                    <ButtonContainerPopup>
                                        <Button width="75%" onClick={() => {this.props.history.push(`/registration`);}}>Register here</Button>
                                    </ButtonContainerPopup>
                                    <ButtonContainerPopup>
                                        <ButtonForLogin
                                            width="75%"
                                            onClick={() => {this.props.history.push(`/login`);}}>Login here
                                        </ButtonForLogin>
                                    </ButtonContainerPopup>
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
                            placement="top"
                            overlay={<Popover id="popover-basic">
                                <Popover.Title as="h3">You cannot access this feature!</Popover.Title>
                                <Popover.Content>
                                    Please register or login first to use this feature.
                                    <ButtonContainerPopup>
                                        <Button width="75%" onClick={() => {this.props.history.push(`/registration`);}}>Register here</Button>
                                    </ButtonContainerPopup>
                                    <ButtonContainerPopup>
                                        <ButtonForLogin
                                            width="75%"
                                            onClick={() => {this.props.history.push(`/login`);}}>Login here
                                        </ButtonForLogin>
                                    </ButtonContainerPopup>
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
                        <OverlayTrigger
                            rootClose={true}
                            show={this.state.showAllUsers}
                            onHide={() => this.setState({ showAllUsers: false })}
                            trigger="click"
                            placement="top"
                            overlay={<Popover id="popover-basic">
                                <Popover.Title as="h3">You cannot access this feature!</Popover.Title>
                                <Popover.Content>
                                    Please register or login first to use this feature.
                                    <ButtonContainerPopup>
                                        <Button width="75%" onClick={() => {this.props.history.push(`/registration`);}}>Register here</Button>
                                    </ButtonContainerPopup>
                                    <ButtonContainerPopup>
                                        <ButtonForLogin
                                            width="75%"
                                            onClick={() => {this.props.history.push(`/login`);}}>Login here
                                        </ButtonForLogin>
                                    </ButtonContainerPopup>
                                </Popover.Content>
                            </Popover>}>
                            <div>
                                <ButtonContainer>
                                    <RoundButton
                                        width="75%"
                                        onMouseOver={() => this.toggleShowAllUsersHover(true)}
                                        onMouseLeave={() => this.toggleShowAllUsersHover(false)}
                                    >
                                        <img src={UsersIcon}/>
                                    </RoundButton>
                                </ButtonContainer>
                                {this.state.showAllUsersHover ? <HoverContainer>All users</HoverContainer> : null}
                            </div>
                        </OverlayTrigger>
                    }

                    {localStorage.getItem("userId") != null ?
                        <div>
                            <ButtonContainer>
                                <RoundButton
                                    width="75%"
                                    onMouseOver={() => this.toggleCenterMap(true)}
                                    onMouseLeave={() => this.toggleCenterMap(false)}
                                    onClick={() => {
                                        this.props.centerMapAtCurrentLocation();
                                    }}
                                >
                                    <img src={CurrentLocationIcon}/>
                                </RoundButton>
                            </ButtonContainer>
                            {this.state.centerMapHover ? <HoverContainer>Current location</HoverContainer> : null}
                        </div>
                        :
                        <OverlayTrigger
                            rootClose={true}
                            show={this.state.showCenterMap}
                            onHide={() => this.setState({ showCenterMap: false })}
                            trigger="click"
                            placement="top"
                            overlay={<Popover id="popover-basic">
                                <Popover.Title as="h3">You cannot access this feature!</Popover.Title>
                                <Popover.Content>
                                    Please register or login first to use this feature.
                                    <ButtonContainerPopup>
                                        <Button width="75%" onClick={() => {this.props.history.push(`/registration`);}}>Register here</Button>
                                    </ButtonContainerPopup>
                                    <ButtonContainerPopup>
                                        <ButtonForLogin
                                            width="75%"
                                            onClick={() => {this.props.history.push(`/login`);}}>Login here
                                        </ButtonForLogin>
                                    </ButtonContainerPopup>
                                </Popover.Content>
                            </Popover>}>
                            <div>
                                <ButtonContainer>
                                    <RoundButton
                                        width="75%"
                                        onMouseOver={() => this.toggleCenterMap(true)}
                                        onMouseLeave={() => this.toggleCenterMap(false)}
                                    >
                                        <img src={CurrentLocationIcon}/>
                                    </RoundButton>
                                </ButtonContainer>
                                {this.state.centerMapHover ? <HoverContainer>Current location</HoverContainer> : null}
                            </div>
                        </OverlayTrigger>
                    }

                </Container2>
            </div>
        );
    }
}

export default withRouter(Sidebar);