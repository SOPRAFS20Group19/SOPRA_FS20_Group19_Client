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
  grid-row: 5;
  margin-top: 15px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: x-large;
  flex-direction: row;
`;


const Text = styled.div`
  font-weight: normal;
  font-size: large;
  width: 100%;
  list-style-type: none;
`;


class InfoEditProfile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Container>
                {!this.props.creationDate ? (<Spinner/>) :(<div>
                        <Title>KYC-user since: <Text>{this.props.creationDate}</Text></Title>
                    </div>
                )}
            </Container>
        );
    }
}

export default withRouter(InfoEditProfile);