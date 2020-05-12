import React from "react";
import {withRouter} from "react-router-dom";
import SidebarAddLocationtoStart from "./SidebarAddLocationtoStart";
import Spinner from "react-bootstrap/Spinner";
import {ButtonYesNo} from "./ButtonYesNo";
import {Button} from "../variables/Button";
import styled from "styled-components";

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

const ImageContainer = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 3;
  margin-top: 15px;
`;

const Container2 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 4;
  margin-top: 15px;
`;
const Container3 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 6;
  margin-top: 15px;
`;
const Container4 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 7;
  margin-top: 15px;
`;

const Container5 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 8;
  margin-top: 15px;
`;

const Container6 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 9;
  margin-top: 15px;
`;

const Container7 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 10;
  margin-top: 15px;
`;

const Container8 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 11;
  margin-top: 15px;
`;

const Container9 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 12;
  margin-top: 15px;
`;

const Container10 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 13;
  margin-top: 15px;
`;

const Container11 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 14;
  margin-top: 15px;
`;

const Container12 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 15;
  margin-top: 15px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: x-large;
  flex-direction: row;
`;

const InputFieldBaujahr = styled.input`
  &::placeholder {
    color: black;
  }
  height: 35px;
  width: 35%;
  border: 2px solid #003068;
  border-color: #66A3E0;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
`;

const InfoSchrift = styled.div`
  font-weight: normal;
  font-size: large;
  flex-direction: row;
`;

const ButtonContainerYesNo = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
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



class AddFireplace extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <MainContainer>
                <SidebarAddLocationtoStart avatarNr={localStorage.getItem("userAvatar")}/>
                <QuestionContainer>
                    <Question>Location information: </Question>
                </QuestionContainer>
                <ImageContainer>
                    <img src={this.props.getImage()} alt={this.props.getTypeAsString()} width="96px" height="96px"/>
                </ImageContainer>
                <Container2>
                    <Title>Coordinates</Title>
                    {!this.props.latitude && !this.props.longitude ? (<Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>) : (
                        <InfoSchrift>{this.props.latitude}, {this.props.longitude}</InfoSchrift>)}
                </Container2>
                <Container3>
                    <Title>Firewood available? </Title>
                    <ButtonContainerYesNo>
                        <ButtonYesNo
                            disabled={this.props.holz === "X"}
                            onClick={() => {this.props.setState({holz: "X"});}}>Yes
                        </ButtonYesNo>
                        <ButtonYesNo
                            disabled={this.props.holz === "Y"}
                            onClick={() => {this.props.setState({holz: "Y"});}}>No
                        </ButtonYesNo>
                    </ButtonContainerYesNo>
                </Container3>
                <Container4>
                    <Title>Cooking grate available? </Title>
                    <ButtonContainerYesNo>
                        <ButtonYesNo
                            disabled={this.props.rost === "X"}
                            onClick={() => {this.props.setState({rost: "X"});}}>Yes
                        </ButtonYesNo>
                        <ButtonYesNo
                            disabled={this.props.rost === "Y"}
                            onClick={() => {this.props.setState({rost: "Y"});}}>No
                        </ButtonYesNo>
                    </ButtonContainerYesNo>
                </Container4>
                <Container5>
                    <Title>Table available? </Title>
                    <ButtonContainerYesNo>
                        <ButtonYesNo
                            disabled={this.props.tisch === "X"}
                            onClick={() => {this.props.setState({tisch: "X"});}}>Yes
                        </ButtonYesNo>
                        <ButtonYesNo
                            disabled={this.props.tisch === "Y"}
                            onClick={() => {this.props.setState({tisch: "Y"});}}>No
                        </ButtonYesNo>
                    </ButtonContainerYesNo>
                </Container5>
                <Container6>
                    <Title>Water available? </Title>
                    <ButtonContainerYesNo>
                        <ButtonYesNo
                            disabled={this.props.trinkwasser === "X"}
                            onClick={() => {this.props.setState({trinkwasser: "X"});}}>Yes
                        </ButtonYesNo>
                        <ButtonYesNo
                            disabled={this.props.trinkwasser === "Y"}
                            onClick={() => {this.props.setState({trinkwasser: "Y"});}}>No
                        </ButtonYesNo>
                    </ButtonContainerYesNo>
                </Container6>
                <Container7>
                    <Title>Trash can available? </Title>
                    <ButtonContainerYesNo>
                        <ButtonYesNo
                            disabled={this.props.abfall === "X"}
                            onClick={() => {this.props.setState({abfall: "X"});}}>Yes
                        </ButtonYesNo>
                        <ButtonYesNo
                            disabled={this.props.abfall === "Y"}
                            onClick={() => {this.props.setState({abfall: "Y"});}}>No
                        </ButtonYesNo>
                    </ButtonContainerYesNo>
                </Container7>
                <Container8>
                    <Title>Parking available? </Title>
                    <ButtonContainerYesNo>
                        <ButtonYesNo
                            disabled={this.props.parkplatz === "X"}
                            onClick={() => {this.props.setState({parkplatz: "X"});}}>Yes
                        </ButtonYesNo>
                        <ButtonYesNo
                            disabled={this.props.parkplatz === "Y"}
                            onClick={() => {this.props.setState({parkplatz: "Y"});}}>No
                        </ButtonYesNo>
                    </ButtonContainerYesNo>
                </Container8>
                <Container9>
                    <Title>Swimming possible? </Title>
                    <ButtonContainerYesNo>
                        <ButtonYesNo
                            disabled={this.props.baden === "X"}
                            onClick={() => {this.props.setState({baden: "X"});}}>Yes
                        </ButtonYesNo>
                        <ButtonYesNo
                            disabled={this.props.baden === "Y"}
                            onClick={() => {this.props.setState({baden: "Y"});}}>No
                        </ButtonYesNo>
                    </ButtonContainerYesNo>
                </Container9>
                <Container10>
                    <Title>Dogs allowed? </Title>
                    <ButtonContainerYesNo>
                        <ButtonYesNo
                            disabled={this.props.hunde === "X"}
                            onClick={() => {this.props.setState({hunde: "X"});}}>Yes
                        </ButtonYesNo>
                        <ButtonYesNo
                            disabled={this.props.hunde === "Y"}
                            onClick={() => {this.props.setState({hunde: "Y"});}}>No
                        </ButtonYesNo>
                    </ButtonContainerYesNo>
                </Container10>
                <Container11>
                    <Title>Stroller-friendly? </Title>
                    <ButtonContainerYesNo>
                        <ButtonYesNo
                            disabled={this.props.kinderwagen === "X"}
                            onClick={() => {this.props.setState({kinderwagen: "X"});}}>Yes
                        </ButtonYesNo>
                        <ButtonYesNo
                            disabled={this.props.kinderwagen === "Y"}
                            onClick={() => {this.props.setState({kinderwagen: "Y"});}}>No
                        </ButtonYesNo>
                    </ButtonContainerYesNo>
                </Container11>
                <Container12>
                    <ButtonContainer>
                        <Button
                            disabled={!this.props.holz || !this.props.rost || !this.props.tisch || !this.props.trinkwasser || !this.props.abfall || !this.props.parkplatz || !this.props.baden || !this.props.hunde || !this.props.kinderwagen}
                            onClick={() => {this.props.saveChangesFireplace()}}>Save Location
                        </Button>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button
                            onClick={() => {this.props.setToNullState();}}>Cancel
                        </Button>
                    </ButtonContainer>
                </Container12>
            </MainContainer>)
    }
}

export default withRouter(AddFireplace);
