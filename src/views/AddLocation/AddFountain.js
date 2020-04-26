import React from "react";
import {withRouter} from "react-router-dom";
import {Spinner} from "../design/Spinner";
import TitleEdit from "../UserInformation/TitleEdit";
import UserEditHeader from "../UserInformation/UserEditHeader";
import SidebarEditUserInformation from "../UserInformation/SidebarEditUserInformation";
import InfoEditProfile from "../UserInformation/InfoEditProfile";
import {Button} from "../design/Button";
import EditPicture from "../UserInformation/EditPicture";
import styled from "styled-components";
import {BaseContainer} from "../../helpers/layout";

const MainContainer =styled.div`
  color: black;
  flex-direction: row;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto auto;
  justify-content: center;
  grid-column-gap: 30px;
`;


const Container = styled(BaseContainer)`
  color: white;
  text-align: center;
  flex-direction: column;
  margin-top: 15px;
`;
const Container1 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 0.5%
  flex-direction: column;
  margin-left: 20px;
  grid-column: 1;
  grid-row: 3;
  margin-top: 15px;
`;

const Container2 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 0.5%
  flex-direction: column;
  margin-left: 20px;
  grid-column: 1;
  grid-row: 4;
  margin-top: 15px;
`;
const Container3 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 0.5%
  flex-direction: column;
  margin-left: 20px;
  grid-column: 1;
  grid-row: 6;
  margin-top: 15px;
`;
const Container4 = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 0.5%
  flex-direction: column;
  margin-left: 20px;
  grid-column: 1;
  grid-row: 7;
  margin-top: 15px;
`;


const InputField = styled.input`
  &::placeholder {
    color: black;
  }
  height: 35px;
  width: 80%;
  border: 2px solid #003068;
  border-color: #66A3E0;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 4;
  margin-top: 15px;
  width: 80%;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: x-large;
  flex-direction: row;
`;

class AddFountain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude : null,
            longitude: null,
            baujahr: null,
            art_txt: null,
            brunnenart_txt: null
        };
    }

    render(){
        return(
            <MainContainer>
            {this.props.locationType==="FOUNTAIN" ?
                (<MainContainer>
                        <Container1>
                            <Title>Latitude: </Title>
                            <InputField
                                placeholder="enter latitude here"
                                onChange={e => {
                                    this.handleInputChange('latitude', e.target.value);
                                }}
                            />
                        </Container1>
                        <Container2>
                            <Title>Longitude: </Title>
                            <InputField
                                placeholder="enter longitude here"
                                onChange={e => {
                                    this.handleInputChange('longitude', e.target.value);
                                }}
                            />
                        </Container2>
                    <Container3>
                        <Title>Baujahr: </Title>
                        <InputField
                            placeholder="enter Baujahr here"
                            onChange={e => {
                                this.handleInputChange('baujahr', e.target.value);
                            }}
                        />
                    </Container3>
                    <Container4>
                        <Title>Trinkwasser? </Title>
                        <InputField
                            placeholder="enter Baujahr here"
                            onChange={e => {
                                this.handleInputChange('baujahr', e.target.value);
                            }}
                        />
                    </Container4>


                </MainContainer>) : (this.props.locationType==="FIREPLACE" ? (<MainContainer></MainContainer>) : (<MainContainer></MainContainer>))}
                </MainContainer>
        );
    }
}

export default withRouter(AddFountain);
