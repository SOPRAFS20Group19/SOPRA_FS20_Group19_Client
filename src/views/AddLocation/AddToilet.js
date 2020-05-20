import React from "react";
import {withRouter} from "react-router-dom";
import SidebarAddLocationtoStart from "./SidebarAddLocationtoStart";
import Spinner from "react-bootstrap/Spinner";
import {ButtonYesNo} from "./ButtonYesNo";
import {Button} from "../variables/Button";
import styled from "styled-components";

const MainContainer =styled.div`
  color: black;
  flex-direction: column;
  max-height: 93%;
  overflow: scroll;
  width: 80%;
  left: 10%;
  display: block;
  justify-content: center;
  position: absolute;
  top: 7%;
  @media only screen and (max-width: 800px){
    display: block;
    max-height: 80%;
    overflow: scroll;
    width: 100%;
    left: 0%;
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

const Picture = styled.div`
  height: 110px;
  width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 0.5%
  flex-direction: column;
  margin-left: 0px;
  grid-column: 1;
  grid-row: 3;
  margin-top: 15px;
  @media only screen and (max-width: 900px){
    font-size: 10px;
    width: 95px;
    height: 95px;
  }
  @media only screen and (max-width: 800px){
    width: 90px;
    height: 90px;
  }
  @media only screen and (max-width: 500px){
    width: 80px;
    height: 80px;
  }
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
  letter-spacing: 0.2em;
  line-height: 1.1em;
  text-transform: uppercase;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 5px;
  @media only screen and (max-width: 700px){
    font-size: 20px;
  }
  @media only screen and (max-width: 500px){
    font-size: 15px
  }
`;

const InputField = styled.input`
  &::placeholder {
    color: black;
  }
  height: 35px;
  width: 40%;
  border: 2px solid #003068;
  border-color: #66A3E0;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  text-align: center;
  @media only screen and (max-width: 700px){
    font-size: 10px;
    height: 25px;
  }
`;

const InfoSchrift = styled.div`
  font-weight: normal;
  font-size: 20px;
  flex-direction: row;
  @media only screen and (max-width: 700px){
    font-size: 15px;
  }
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
  @media only screen and (max-width: 700px){
    font-size: small;
  }
`;

function ValidationMessage(props) {
    if (!props.valid) {
        return(
            <ErrorMessage className='error-msg'>{props.message}</ErrorMessage>
        )
    }
    return null;
}

class AddToilet extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <SidebarAddLocationtoStart avatarNr={localStorage.getItem("userAvatar")}/>
            <MainContainer>
                <QuestionContainer>
                    <Question>Location information: </Question>
                </QuestionContainer>
                <ImageContainer>
                    <Picture>
                        <img src={this.props.getImage()} alt={this.props.getTypeAsString()} width="100%" height="100%"/>
                    </Picture>
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
                    <InputField
                        placeholder="Enter address here"
                        onChange={e => {
                            this.props.updateAdresse(e.target.value);
                        }}
                    />
                    <ValidationMessage valid={this.props.adresseValid} message={this.props.errorMsg.adresse}/>
                </Container3>
                <Container4>
                    <Title>Zip code: </Title>
                    <InputField
                        placeholder="Enter ZIP code here"
                        onChange={e => {
                            this.props.updatePlz(e.target.value);
                        }}
                    />
                    <ValidationMessage valid={this.props.plzValid} message={this.props.errorMsg.plz}/>
                </Container4>
                <Container5>
                    <Title>City: </Title>
                    <InputField
                        placeholder="Enter city here"
                        onChange={e => {
                            this.props.updateOrt(e.target.value);
                        }}
                    />
                    <ValidationMessage valid={this.props.ortValid} message={this.props.errorMsg.ort}/>
                </Container5>
                <Container6>
                    <Title>Opening hours (optional): </Title>
                    <InputField
                        placeholder="Enter opening hours here"
                        onChange={e => {
                            this.props.handleInputChange('openinghours', e.target.value);
                        }}
                    />
                </Container6>
                <Container7>
                    <Title>Cost (optional): </Title>
                    <InputField
                        placeholder="Enter cost here"
                        onChange={e => {
                            this.props.handleInputChange('cost', e.target.value);
                        }}
                    />
                </Container7>
                <Container8>
                    <Title>Suitable for disabled people? </Title>
                    <ButtonContainerYesNo>
                        <ButtonYesNo
                            disabled={this.props.category === "X"}
                            onClick={() => {this.props.setState({category: "X"});}}>Yes
                        </ButtonYesNo>
                        <ButtonYesNo
                            disabled={this.props.category === "Y"}
                            onClick={() => {this.props.setState({category: "Y"});}}>No
                        </ButtonYesNo>
                    </ButtonContainerYesNo>
                </Container8>
                <Container9>
                    <ButtonContainer>
                        <Button
                            disabled={this.props.adresseValid===false || this.props.plzValid===false || this.props.ortValid===false || !this.props.category}
                            onClick={() => {this.props.saveChangesToilet()}}>Save Location
                        </Button>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button
                            onClick={() => {this.props.setToNullState();}}>Cancel
                        </Button>
                    </ButtonContainer>
                </Container9>
            </MainContainer>
            </div>)
    }
}

export default withRouter(AddToilet);
