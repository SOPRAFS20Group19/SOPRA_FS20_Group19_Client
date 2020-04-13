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

class Sidebar extends React.Component{
    constructor() {
        super();
        this.state = {
            filterExpanded: false
        }
    }

    //Open the profile of the logged in User
    openUserProfile(){
    }


    //Return to previous Page
    returnToPage() {
        this.props.history.back();
    }

    render() {
        return (
            <Container>
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
                    <ButtonContainer>
                        <RoundButton
                            width="75%"
                            onClick={() => {
                                this.returnToPage();
                            }}
                        >
                            <img src={LogoutIcon}/>
                        </RoundButton>
                    </ButtonContainer>
            </Container>
        );
    }
}

export default withRouter(Sidebar);