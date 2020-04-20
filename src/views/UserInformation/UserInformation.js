import React from "react";
import {Spinner} from "../design/Spinner";
import {withRouter} from "react-router-dom";
import User from "../../components/shared/models/User";
import styled from "styled-components";
import {Button} from "../../views/design/Button";

const GridContainer =styled.div`
  color: black;
  flex-direction: row;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto auto;
  justify-content: left;
  grid-column-gap: 0px;
`;

const Container = styled.div`
  height: flex;
  width: 100%;
  display: flex;
  justify-content: top;
  align-items: left;
  padding: 0.5%
  flex-direction: column;
  margin-left: 20px;
  grid-column: 1;
  grid-row: 2;
  margin-top: 20px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: x-large;
  margin-bottom: 0.25%;
  flex-direction: row;
  grid-column: 1;
  grid-row: 1;
`;


const Text = styled.div`
  font-weight: normal;
  font-size: large;
  width: 100%;
  list-style-type: none;
  grid-column: 1;
  grid-row: 2;

`;

const ButtonContainer = styled.div`
  justify-content: left;
  width: 50%;
  margin-top: 10px;
  flex-direction: column;
  grid-column: 1;
  grid-row: 3;
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
                        <GridContainer>
                        <Title>name:</Title>
                        <Text>{this.props.name}</Text>
                        </GridContainer>
                        <GridContainer>
                        <Title>username:<Text>{this.props.username}</Text>
                        </Title>
                        </GridContainer>
                        <GridContainer>
                        <Title>using Know Your City since: <Text>{this.props.creationDate}</Text></Title>
                        </GridContainer>
                        <GridContainer>
                        <Title>birth date: <Text> {this.props.birthDate != null ? (this.props.birthDate) : ("You haven't set a birth date yet!")}</Text></Title>
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