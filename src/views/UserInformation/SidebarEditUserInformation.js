import styled from "styled-components";
import React from "react";
import {RoundButton} from "../variables/RoundButton";
import LogoutIcon from "../variables/LogoutIcon.svg";
import {withRouter} from "react-router-dom";

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
  margin-left: -10%;
  @media only screen and (max-width: 800px){
    width: 100%;
    margin-left: 0%;
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

class Sidebar extends React.Component{
    constructor() {
        super();
        this.state = {
            showReturnHover: false
        }
    }

    //Return to previous Page
    returnToPage() {
        this.props.history.push(`/userprofile`);
    }

    toggleShowReturnHover(value){
        this.setState({showReturnHover: value})
    }

    render() {
        return (
            <div>
            <Container>
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
                {this.state.showReturnHover ? <HoverContainer>Return to profile</HoverContainer> : null}
                </div>
            </Container>
                <Container2>
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
                    {this.state.showReturnHover ? <HoverContainer>Return to profile</HoverContainer> : null}
                    </div>
                </Container2>
            </div>
        );
    }
}

export default withRouter(Sidebar);