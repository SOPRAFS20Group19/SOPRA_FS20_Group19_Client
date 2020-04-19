import React from "react";
import {Spinner} from "../design/Spinner";
import {withRouter} from "react-router-dom";
import User from "../../components/shared/models/User";
import styled from "styled-components";
import {Button} from "../../views/design/Button";

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
`;


const Text = styled.div`
  font-weight: normal;
  font-size: large;
  width: 100%;
  list-style-type: none;
`;

const ButtonContainer = styled.div`
  justify-content: left;
  width: 50%;
  margin-top: 10px;
  flex-direction: column;
  grid-column: 1;
  grid-row: 4;
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
                        <Title>name:</Title>
                        <Text>{this.props.name}</Text>
                        <Title>username:
                            <Text>{this.props.username}</Text>
                        </Title>
                        <Title>creation date: <Text>{this.props.creationDate}</Text></Title>

                    </div>
                )}
                <ButtonContainer>
                    <Button
                        variant="primary"
                        width="40%"
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