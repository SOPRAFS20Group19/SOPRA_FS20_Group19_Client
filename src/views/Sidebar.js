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
import FilterIconComplete from "./FilterIconComplete.svg"
import PlusIconComplete from "./PlusIconComplete.svg"
import Profile from "./Profile";
import Filter from "../components/maps/Filter";
import AddLocation from "../components/LocationManagement/AddLocation";
import { withRouter } from 'react-router-dom';

const Container = styled.div`
  &:hover {
    opacity: 1;
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
            showAddLocationError: false,
            showFilterError: false,
            showUserError: false
        }
    }

    openUserProfile(){
    }

    openFilter(){
    }

    openAddLocation(){
        this.setState({ showAddLocationError: true });
        //if (localStorage.getItem("token")== null){
            //this.setState({ showAddLocationError: true });
        //}
        //else {
            //this.props.history.push(`/map/addlocation`);
        //}
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
                        this.openFilter();
                    }}
                >
                    <img src={FilterIconComplete}/>
                </RoundButton>
                </ButtonContainer>
                <ButtonContainer>
                <RoundButton
                    width="75%"
                    onClick={() => {
                        this.openAddLocation();
                    }}
                >
                    <img src={PlusIconComplete}/>
                </RoundButton>
                </ButtonContainer>
                {this.state.showAddLocationError === true ?
                    <ButtonContainer>
                        <Button onClick={() => {this.props.history.push(`/registration`)}}>
                            Please register first to use this feature
                        </Button>
                    </ButtonContainer>
                    : null}
            </Container>
        );
    }
}

export default Sidebar;