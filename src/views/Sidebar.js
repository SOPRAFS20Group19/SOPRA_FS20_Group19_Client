import React from "react";
import styled from "styled-components";
import {BaseContainer} from "../helpers/layout";
import {Button} from "./design/Button";
import {RoundButton} from "./design/RoundButton";
import {Nav} from "react-bootstrap";
import {UserIcon} from "./design/UserIcon";
import {FilterIcon} from "./design/FilterIcon";
import {PlusIcon} from "./design/PlusIcon";
import UserIconComplete from "./UserIconComplete.svg"
import FilterIconComplete from "./Filter/FilterIconComplete.svg"
import PlusIconComplete from "./PlusIconComplete.svg"
import Profile from "./Profile";
import Filter from "../components/maps/Filter";
import AddLocation from "../components/LocationManagement/AddLocation";
import { withRouter } from 'react-router-dom';
import LogoutIcon from "./LogoutIcon.svg"
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

//Sidebar for the map -->Refactoring the name of the class later

const Container = styled.div`
  &:hover {
    opacity: 0.9;
    background: #003068;
  }
  height: 50%;
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

class Sidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    openUserProfile(){
    }

    applyFilterSidebar(){
        this.props.getFilteredLocations();
    }


    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('showFountains');
        localStorage.removeItem('showFireplaces');
        localStorage.removeItem('showRecyclingStations');
        this.props.history.push('/login');
    }

    render() {
        return (
            <Container>
                {localStorage.getItem("token") != null ?
                    <ButtonContainer>
                        <RoundButton
                            width="75%"
                            onClick={() => {
                                this.openUserProfile();
                            }}
                        >
                            <img src={UserIconComplete} alt="User Icon"/>
                        </RoundButton>
                    </ButtonContainer>
                    :
                    null
                }

                {localStorage.getItem("token") != null ?
                    <OverlayTrigger trigger="click" placement="left" overlay={<Filter applyFilterSidebar={this.applyFilterSidebar.bind(this)}/>}>
                        <ButtonContainer>
                            <RoundButton
                                width="75%"
                            >
                                <img src={FilterIconComplete}/>
                            </RoundButton>
                        </ButtonContainer>
                    </OverlayTrigger>
                    :
                    <OverlayTrigger trigger="click" placement="left" overlay={<Popover id="popover-basic">
                        <Popover.Title as="h3">You cannot access this feature!</Popover.Title>
                        <Popover.Content>
                            Please register first to use this feature.
                            <ButtonContainer>
                                <Button onClick={() => {this.props.history.push(`/registration`);}}>Register here</Button>
                            </ButtonContainer>
                        </Popover.Content>
                    </Popover>}>
                        <ButtonContainer>
                            <RoundButton
                                width="75%"
                            >
                                <img src={FilterIconComplete}/>
                            </RoundButton>
                        </ButtonContainer>
                    </OverlayTrigger>
                }


                {localStorage.getItem("token") != null ?
                    <ButtonContainer>
                        <RoundButton
                            width="75%"
                            onClick={() => {
                                this.props.history.push(`/map/addlocation`);
                            }}
                        >
                            <img src={PlusIconComplete}/>
                        </RoundButton>
                    </ButtonContainer>
                    :
                    <OverlayTrigger trigger="click" placement="left" overlay={<Popover id="popover-basic">
                    <Popover.Title as="h3">You cannot access this feature!</Popover.Title>
                    <Popover.Content>
                    Please register first to use this feature.
                    <ButtonContainer>
                    <Button onClick={() => {this.props.history.push(`/registration`);}}>Register here</Button>
                    </ButtonContainer>
                    </Popover.Content>
                    </Popover>}>
                        <ButtonContainer>
                            <RoundButton
                                width="75%"
                            >
                                <img src={PlusIconComplete}/>
                            </RoundButton>
                        </ButtonContainer>
                    </OverlayTrigger>
                }


                {localStorage.getItem("token") != null ?
                    <ButtonContainer>
                        <RoundButton
                            width="75%"
                            onClick={() => {
                                this.logout();
                            }}
                        >
                            <img src={LogoutIcon}/>
                        </RoundButton>
                    </ButtonContainer>
                    :
                    null
                }

            </Container>
        );
    }
}

export default withRouter(Sidebar);