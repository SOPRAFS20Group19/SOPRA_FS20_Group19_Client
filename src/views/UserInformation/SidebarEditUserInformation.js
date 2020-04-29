import styled from "styled-components";
import React from "react";
import {RoundButton} from "../design/RoundButton";
import UserIconComplete from "../UserIconComplete.svg";
import LogoutIcon from "../LogoutIcon.svg";
import {withRouter} from "react-router-dom";

//Sidebar for UserInformationPage
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
            <Container>
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
            </Container>
        );
    }
}

export default withRouter(Sidebar);