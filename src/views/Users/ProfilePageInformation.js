import React from "react";
import {Spinner} from "../variables/Spinner";
import {withRouter} from "react-router-dom";
import User from "../../components/shared/models/User";
import styled from "styled-components";
import {Button} from "../variables/Button";

const Container = styled.div`
  height: flex;
  width: 100%;
  min-width: 500px;
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
  grid-row: 4;
`;

const GridContainerStatus =styled.div`
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

const TitleStatus = styled.div`
  font-weight: bold;
  font-size: x-large;
  width: 100%;
  grid-column: 1;
  grid-row: 1;
`;


const TextStatus = styled.div`
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

const GridContainer =styled.div`
  color: black;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  justify-content: left;
  align-content: center;
  grid-column-gap: 10px;
  grid-column: 1;
  grid-row: ${props => props.row};
  font-size: x-large;
  @media only screen and (max-width: 700px){
    font-size: 22px
  }
  @media only screen and (max-width: 500px){
    font-size: 14px;
  }
`;




const Title = styled.div`
  width: 100%;
  grid-column: 1;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  flex-direction: row;
  @media only screen and (max-width: 700px){
    font-size: 15px
  }
  @media only screen and (max-width: 500px){
    font-size: 15px
  }
`;


const Text = styled.div`
  grid-column: 2;
  font-weight: normal;
  font-size: 20px;
  width: 100%;
  list-style-type: none;
  @media only screen and (max-width: 700px){
    font-size: 15px
  }
  @media only screen and (max-width: 500px){
    font-size: 15px
  }
`;


class ProfilePageInformation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render() {
        return (
            <Container>
                {!this.props.user ? (<Spinner/>) :(<div>
                        <GridContainer row={1}>
                            <Title>Name:</Title>
                            <Text>{this.props.user.name}</Text>
                        </GridContainer>
                        <GridContainer row={2}>
                            <Title>Username:</Title>
                            <Text>{this.props.user.username}</Text>
                        </GridContainer>
                        <GridContainer row={3}>
                            <Title>KYC-user since:</Title>
                            <Text>{this.props.user.creationDate}</Text>
                        </GridContainer>
                    </div>
                )}
            </Container>
        );
    }
}

export default withRouter(ProfilePageInformation);