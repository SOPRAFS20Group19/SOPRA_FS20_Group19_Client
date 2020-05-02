import React from "react";
import {Spinner} from "../variables/Spinner";
import {withRouter} from "react-router-dom";
import User from "../../components/shared/models/User";
import styled from "styled-components";
import {Button} from "../variables/Button";

const Container = styled.div`
  height: flex;
  width: 100%;
  min-width: 750px;
  display: grid;
  justify-content: top;
  align-items: left;
  padding: 0.5%;
  flex-direction: column;
  margin-left: 20px;
  grid-column: 1;
  grid-row: 3;
  margin-top: 20px;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto auto;
`;

const GridContainerName =styled.div`
  color: black;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  justify-content: left;
  align-content: center;
  grid-column-gap: 20px;
  grid-column: 1;
  grid-row: 1;
`;

const GridContainerUsername =styled.div`
  color: black;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  justify-content: left;
  align-content: center;
  grid-column-gap: 20px;
  grid-column: 1;
  grid-row: 2;
`;

const GridContainerCreationDate =styled.div`
  color: black;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  justify-content: left;
  align-content: center;
  grid-column-gap: 20px;
  grid-column: 1;
  grid-row: 3;
`;

const GridContainerBirthDate =styled.div`
  color: black;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  justify-content: left;
  align-content: center;
  grid-column-gap: 20px;
  grid-column: 1;
  grid-row: 4;
`;

const TitleName = styled.div`
  font-weight: bold;
  font-size: x-large;
  width: 100%;
  grid-column: 1;
  grid-row: 1;
`;


const TextName = styled.div`
  font-weight: normal;
  font-size: x-large;
  width: 100%;
  list-style-type: none;
  grid-column: 2;
  grid-row: 1;
`;

const TitleUsername = styled.div`
  font-weight: bold;
  font-size: x-large;
  width: 100%;
  grid-column: 1;
  grid-row: 1;
`;


const TextUsername = styled.div`
  font-weight: normal;
  font-size: x-large;
  width: 100%;
  list-style-type: none;
  grid-column: 2;
  grid-row: 1;

`;

const TitleCreationDate = styled.div`
  font-weight: bold;
  font-size: x-large;
  width: 100%;
  grid-column: 1;
  grid-row: 1;
`;


const TextCreationDate = styled.div`
  font-weight: normal;
  font-size: x-large;
  width: 100%;
  list-style-type: none;
  grid-column: 2;
  grid-row: 1;

`;

const TitleBirthDate = styled.div`
  font-weight: bold;
  font-size: x-large;
  width: 100%;
  grid-column: 1;
  grid-row: 1;
`;


const TextBirthDate = styled.div`
  font-weight: normal;
  font-size: x-large;
  width: 100%;
  list-style-type: none;
  grid-column: 2;
  grid-row: 1;

`;

const ButtonContainer = styled.div`
  justify-content: left;
  width: 50%;
  min-width: 175px;
  margin-top: 10px;
  flex-direction: column;
  grid-column: 1;
  grid-row: 5;
`;


class UserInformation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    goToEditProfile(){
        this.props.history.push(`/userprofile/edit`);
    }


    render() {
        return (
            <Container>
                {!this.props.username ? (<Spinner/>) :(<div>
                        <GridContainerName>
                            <TitleName>Name:</TitleName>
                            <TextName>{this.props.name}</TextName>
                        </GridContainerName>
                        <GridContainerUsername>
                            <TitleUsername>Username:</TitleUsername>
                            <TextUsername>{this.props.username}</TextUsername>
                        </GridContainerUsername>
                        <GridContainerCreationDate>
                            <TitleCreationDate>KYC-user since:</TitleCreationDate>
                            <TextCreationDate>{this.props.creationDate}</TextCreationDate>
                        </GridContainerCreationDate>
                    </div>
                )}
                <ButtonContainer>
                    <Button
                        variant="primary"
                        width="100%"
                        onClick={() => {
                        this.goToEditProfile();
                    }}>
                        Edit your Profile
                    </Button>
                </ButtonContainer>
            </Container>
        );
    }
}

export default withRouter(UserInformation);