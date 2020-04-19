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

class Sidebar extends React.Component{
    constructor() {
        super();
        this.state = {
        }
    }

    //Return to previous Page
    returnToPage() {
        this.props.history.push(`/userprofile`);
    }

    render() {
        return (
            <Container>
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