import React from "react";
import styled from "styled-components";
import {BaseContainer} from "../../helpers/layout";
import {Button} from "../design/Button";
import {RoundButton} from "../design/RoundButton";
import {Nav} from "react-bootstrap";
import {UserIcon} from "../design/UserIcon";
import {FilterIcon} from "../design/FilterIcon";
import {PlusIcon} from "../design/PlusIcon";
import UserIconComplete from "../UserIconComplete.svg"
import FilterIconComplete from "../Filter/FilterIconComplete.svg"
import PlusIconComplete from "../PlusIconComplete.svg"
import Profile from "../Profile";
import Filter from "../../components/maps/Filter";
import AddLocation from "../../components/LocationManagement/AddLocation";
import { withRouter } from 'react-router-dom';
import LogoutIcon from "../LogoutIcon.svg"
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {ButtonForLogin} from "../design/ButtonForLogin";
import {api, handleError} from "../../helpers/api";
import avatarArray from "../AvatarArray";

//Sidebar for Information Page and Add Location

const Container = styled.div`
  &:hover {
    opacity: 0.9;
    background: #003068;
  }
  height: 100%;
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

class SidebarAddLocation extends React.Component{
    constructor() {
        super();
        this.state = {
            showUser: false,
            showUserHover: false,
            showReturnHover: false
        }
    }

    //Open the profile of the logged in User
    openUserProfile(){
        this.props.history.push('/userprofile');
    }


    //Return to previous Page
    returnToPage() {
        this.props.history.push(`/map`);
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

    toggleShowReturnHover(value){
        this.setState({showReturnHover: value})
    }

    render() {
        return (
            <Container>
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
                <div>
                    <ButtonContainer>
                        <RoundButton
                            width="75%"
                            onMouseOver={() => this.toggleShowReturnHover(true)}
                            onMouseLeave={() => this.toggleShowReturnHover(false)}
                            onClick={() => {
                                this.returnToPage();
                            }}
                        >
                            <img src={LogoutIcon}/>
                        </RoundButton>
                    </ButtonContainer>
                    {this.state.showReturnHover ? <HoverContainer>Return to map</HoverContainer> : null}
                </div>
            </Container>
        );
    }
}

export default withRouter(SidebarAddLocation);