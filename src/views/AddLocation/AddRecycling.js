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

const ErrorMessage = styled.div`
  font-weight: normal;
  font-size: medium;
  flex-direction: row;
  color: red;
  margin-top: 5px;
`;

function ValidationMessage(props) {
    if (!props.valid) {
        return(
            <ErrorMessage className='error-msg'>{props.message}</ErrorMessage>
        )
    }
    return null;
}

class AddRecycling extends React.Component {
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
                    <Title>Address: </Title>
                    <InputFieldBaujahr
                        placeholder="enter address here"
                        onChange={e => {
                            this.props.updateAdresse(e.target.value);
                        }}
                    />
                    <ValidationMessage valid={this.props.adresseValid} message={this.props.errorMsg.adresse}/>
                </Container3>
                <Container4>
                    <Title>Zip code: </Title>
                    <InputFieldBaujahr
                        placeholder="enter zip code here"
                        onChange={e => {
                            this.props.updatePlz(e.target.value);
                        }}
                    />
                    <ValidationMessage valid={this.props.plzValid} message={this.props.errorMsg.plz}/>
                </Container4>
                <Container5>
                    <Title>City: </Title>
                    <InputFieldBaujahr
                        placeholder="enter city here"
                        onChange={e => {
                            this.props.updateOrt(e.target.value);
                        }}
                    />
                    <ValidationMessage valid={this.props.ortValid} message={this.props.errorMsg.ort}/>
                </Container5>
                <Container6>
                    <Title>Metal disposable? </Title>
                    <ButtonContainerYesNo>
                        <ButtonYesNo
                            disabled={this.props.metall === "X"}
                            onClick={() => {this.props.setState({metall: "X"});}}>Yes
                        </ButtonYesNo>
                        <ButtonYesNo
                            disabled={this.props.metall === "Y"}
                            onClick={() => {this.props.setState({metall: "Y"});}}>No
                        </ButtonYesNo>
                    </ButtonContainerYesNo>
                </Container6>
                <Container7>
                    <Title>Glass disposable? </Title>
                    <ButtonContainerYesNo>
                        <ButtonYesNo
                            disabled={this.props.glas === "X"}
                            onClick={() => {this.props.setState({glas: "X"});}}>Yes
                        </ButtonYesNo>
                        <ButtonYesNo
                            disabled={this.props.glas === "Y"}
                            onClick={() => {this.props.setState({glas: "Y"});}}>No
                        </ButtonYesNo>
                    </ButtonContainerYesNo>
                </Container7>
                <Container8>
                    <Title>Oil disposable? </Title>
                    <ButtonContainerYesNo>
                        <ButtonYesNo
                            disabled={this.props.oel === "X"}
                            onClick={() => {this.props.setState({oel: "X"});}}>Yes
                        </ButtonYesNo>
                        <ButtonYesNo
                            disabled={this.props.oel === "Y"}
                            onClick={() => {this.props.setState({oel: "Y"});}}>No
                        </ButtonYesNo>
                    </ButtonContainerYesNo>
                </Container8>
                <Container9>
                    <ButtonContainer>
                        <Button
                            disabled={this.props.adresseValid===false || this.props.plzValid===false || this.props.ortValid===false || !this.props.metall || !this.props.glas || !this.props.oel}
                            onClick={() => {this.props.saveChangesRecycling()}}>Save Location
                        </Button>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button
                            onClick={() => {this.props.setToNullState();}}>Cancel
                        </Button>
                    </ButtonContainer>
                </Container9>
            </MainContainer>)
    }
}
export default withRouter(AddRecycling);
