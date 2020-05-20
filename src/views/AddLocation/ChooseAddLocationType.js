import React from "react";
import {withRouter} from "react-router-dom";
import styled from "styled-components";
import SidebarAddLocation from "./SidebarAddLocation";
import {RoundButton} from "../variables/RoundButton";
import FireplaceCircle from "../MapMarkers/FireplaceCircle.png"
import RecyclingCircle from "../MapMarkers/RecyclingCircle.png"
import FountainCircle from "../MapMarkers/FountainCircle.png"
import TableTennisCircle from "../MapMarkers/PingPongCircle.png"
import ToiletCircle from "../MapMarkers/PublicToiletCircle.png"
import BenchCircle from "../MapMarkers/BenchCircle.png"

const MainContainer =styled.div`
  color: black;
  flex-direction: row;
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto auto;
  justify-content: center;
  @media only screen and (max-width: 800px){
    overflow: scroll;
  }
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
  margin-top: 15px;
  font-weight: bolder;
  font-size: 30px;
  letter-spacing: 0.2em;
  line-height: 1.1em;
  text-transform: uppercase;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 700px){
    font-size: 20px;
  }
  @media only screen and (max-width: 500px){
    font-size: 15px
  }
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

const ButtonContainerToiletCircle = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 1;
  margin-top: 15px;
  width: 100%;
`;
const ButtonContainerTableTennisCircle = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 2;
  margin-top: 15px;
  width: 100%;
`;
const ButtonContainerBenchCircle = styled.div`
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

const ButtonContainer2 = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 4;
  margin-top: 15px;
  width: 100%;
`;

class ChooseAddLocationType extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
            <SidebarAddLocation avatarNr={localStorage.getItem("userAvatar")}/>
            <MainContainer>
                <QuestionContainer>
                    <Question>What location type do you want to add?</Question>
                </QuestionContainer>
                <ButtonContainer>
                    <ButtonContainerFountainCircle>
                        <RoundButton>
                            <img src={FountainCircle} alt={"FOUNTAIN"} width="100%" height="100%"
                                 onClick={() => {this.props.setLocationType("FOUNTAIN");}}/>
                        </RoundButton>
                    </ButtonContainerFountainCircle>
                    <ButtonContainerFireplaceCircle>
                        <RoundButton>
                            <img src={FireplaceCircle} alt={"FIREPLACE"} width="100%" height="100%"
                                 onClick={() => {this.props.setLocationType("FIREPLACE");}}/>
                        </RoundButton>
                    </ButtonContainerFireplaceCircle>
                    <ButtonContainerRecyclingCircle>
                        <RoundButton>
                            <img src={RecyclingCircle} alt={"RECYCLING_STATION"} width="100%" height="100%"
                                 onClick={() => {this.props.setLocationType("RECYCLING_STATION");}}/>
                        </RoundButton>
                    </ButtonContainerRecyclingCircle>
                </ButtonContainer>
                <ButtonContainer2>
                <ButtonContainerToiletCircle>
                    <RoundButton>
                        <img src={ToiletCircle} alt={"TOILET"} width="100%" height="100%"
                             onClick={() => {this.props.setLocationType("TOILET");}}/>
                    </RoundButton>
                    </ButtonContainerToiletCircle>
                    <ButtonContainerTableTennisCircle>
                        <RoundButton>
                            <img src={TableTennisCircle} alt={"TABLE_TENNIS"} width="100%" height="100%"
                                 onClick={() => {this.props.setLocationType("TABLE_TENNIS");}}/>
                        </RoundButton>
                    </ButtonContainerTableTennisCircle>
                    <ButtonContainerBenchCircle>
                        <RoundButton>
                            <img src={BenchCircle} alt={"BENCH"} width="100%" height="100%"
                                 onClick={() => {this.props.setLocationType("BENCH");}}/>
                        </RoundButton>
                    </ButtonContainerBenchCircle>
                </ButtonContainer2>
            </MainContainer>
            </div>)
    }
}

export default withRouter(ChooseAddLocationType);
