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

const GridContainer =styled.div`
  color: black;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  justify-content: left;
  align-content: center;
  grid-column-gap: 20px;
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
  font-weight: bold;
  width: 100%;
  grid-column: 1;

`;


const Text = styled.div`
  font-weight: normal;
  width: 100%;
  list-style-type: none;
  grid-column: 2;
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
                        <GridContainer row={1}>
                            <Title>Name:</Title>
                            <Text>{this.props.name}</Text>
                        </GridContainer >
                        <GridContainer row={2}>
                            <Title>Username:</Title>
                            <Text>{this.props.username}</Text>
                        </GridContainer>
                        <GridContainer row={3}>
                            <Title>KYC-user since:</Title>
                            <Text>{this.props.creationDate}</Text>
                        </GridContainer>
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