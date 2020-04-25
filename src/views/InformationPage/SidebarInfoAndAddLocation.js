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
            this.props.history.push('/login');
        }catch (error) {
            alert(`Something went wrong during the logout: \n${handleError(error)}`);
        }
    }

    render() {
        return (
            <Container>
                <OverlayTrigger trigger="click" placement="left" overlay={<Popover id="popover-basic">
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
                    <ButtonContainer>
                        <RoundButton width="75%">
                            <img src={UserIconComplete} alt="User Icon"/>
                        </RoundButton>
                    </ButtonContainer>
                </OverlayTrigger>
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