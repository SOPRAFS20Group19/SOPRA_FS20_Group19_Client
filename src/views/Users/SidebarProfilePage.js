import styled from "styled-components";
import React from "react";
import {RoundButton} from "../variables/RoundButton";
import UserIconComplete from "../UserInformation/UserIconComplete.svg";
import LogoutIcon from "../variables/LogoutIcon.svg";
import {withRouter} from "react-router-dom";
import Popover from "react-bootstrap/Popover";
import {Button} from "../variables/Button";
import {ButtonForLogin} from "../variables/ButtonForLogin";
import avatarArray from "../Avatar/AvatarArray";
import {api, handleError} from "../../helpers/api";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

//Sidebar for UserInformationPage
const Container = styled.div`
  &:hover {
    opacity: 0.9;
    background: #003068;
  }
  padding: 10px;
  padding-bottom: 15px;
  width: 10%;
  height: 100%;
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
    bottom: 0%;
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
  @media only screen and (max-width: 800px){
    width: 100%;
    height: 12%;
    position: absolute;
    bottom: 0%;
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
  font-weight: bold;
  font-size: small;
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;
  align-self: center;
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

class SidebarProfilePage extends React.Component{
    constructor() {
        super();
        this.state = {
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

    toggleShowReturnHover(value){
        this.setState({showReturnHover: value})
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


    render() {
        return (
            <div>
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
                <Container2>
                    <OverlayTrigger
                        rootClose={true}
                        show={this.state.showUser}
                        onHide={() => this.setState({ showUser: false })}
                        trigger="click"
                        placement="top"
                        overlay={<Popover id="popover-basic">
                            <Popover.Content>
                                <ButtonContainerPopup>
                                    <Button
                                        width="100%"
                                        onClick={() => {this.openUserProfile();}}>Go to your profile
                                    </Button>
                                </ButtonContainerPopup>
                                <ButtonContainerPopup>
                                    <ButtonForLogin
                                        width="100%"
                                        onClick={() => {this.logout();}}>Logout
                                    </ButtonForLogin>
                                </ButtonContainerPopup>
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
                </Container2>
            </div>
        );
    }
}

export default withRouter(SidebarProfilePage);