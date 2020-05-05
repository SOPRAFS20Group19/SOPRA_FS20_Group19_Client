import React from "react";
import {withRouter} from "react-router-dom";
import SidebarAddLocationtoStart from "./SidebarAddLocationtoStart";
import Spinner from "react-bootstrap/Spinner";
import {ButtonYesNo} from "./ButtonYesNo";
import {Button} from "../variables/Button";
import styled from "styled-components";
import SidebarAddLocation from "./SidebarAddLocation";
import {RoundButton} from "../variables/RoundButton";
import FountainCircle from "../MapMarkers/FountainCircle.png";
import FireplaceCircle from "../MapMarkers/FireplaceCircle.png";
import RecyclingCircle from "../MapMarkers/RecyclingCircle.png";

const MainContainer =styled.div`
  color: black;
  flex-direction: row;
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto auto;
  justify-content: center;
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 2;
  margin-top: 15px;
  width: 100%;
`;

const Question = styled.div`
  font-weight: bolder;
  font-size: 30px;
  margin-left: 0px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  margin-top: 15px;
`;

const ButtonContainerFountainCircle = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 1;
  margin-top: 15px;
  width: 100%;
`;

const ButtonContainerFireplaceCircle = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 2;
  margin-top: 15px;
  width: 100%;
`;

const ButtonContainerRecyclingCircle = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 3;
  margin-top: 15px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 3;
  margin-top: 15px;
  width: 100%;
`;

class ChooseAddLocationType extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <MainContainer>
                <SidebarAddLocation avatarNr={localStorage.getItem("userAvatar")}/>
                <QuestionContainer>
                    <Question>What location type do you want to add?</Question>
                </QuestionContainer>
                <ButtonContainer>
                    <ButtonContainerFountainCircle>
                        <RoundButton>
                            <img src={FountainCircle} alt={"FOUNTAIN"} width="96px" height="96px"
                                 onClick={() => {this.props.setLocationType("FOUNTAIN");}}/>
                        </RoundButton>
                    </ButtonContainerFountainCircle>
                    <ButtonContainerFireplaceCircle>
                        <RoundButton>
                            <img src={FireplaceCircle} alt={"FIREPLACE"} width="96px" height="96px"
                                 onClick={() => {this.props.setLocationType("FIREPLACE");}}/>
                        </RoundButton>
                    </ButtonContainerFireplaceCircle>
                    <ButtonContainerRecyclingCircle>
                        <RoundButton>
                            <img src={RecyclingCircle} alt={"RECYCLING_STATION"} width="96px" height="96px"
                                 onClick={() => {this.props.setLocationType("RECYCLING_STATION");}}/>
                        </RoundButton>
                    </ButtonContainerRecyclingCircle>
                </ButtonContainer>
            </MainContainer>)
    }
}

export default withRouter(ChooseAddLocationType);
