import styled from "styled-components";
import React from "react";
import {Redirect, withRouter} from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import {api, handleError} from "../../helpers/api";
import User from "../../components/shared/models/User";
import {Spinner} from "../design/Spinner";
import FireplaceCircle from "../MapMarkers/FireplaceCircle.png"
import RecyclingCircle from "../MapMarkers/RecyclingCircle.png"
import FountainCircle from "../MapMarkers/FountainCircle.png"
import HeartUnfilled from "../InformationPage/HeartUnfilled.png"
import HeartRed from "../InformationPage/HeartRed.png"
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {Button} from "../design/Button";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: 20px;
  align-content: left;
  margin-top: 10px;
  justify-content: space-between;
`;

const Username = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 0.2em;
`;

const Text = styled.div`
  font-weight: normal;
  font-size: 15px;
  grid-column: 1;
  grid-row: 2;
`;

const Timestamp = styled.div`
  font-weight: normal;
  font-size: 15px;
  color: #838383;
  grid-column: 2;
  grid-row: 2;
  padding-right: 15px;
`;

export default class Message extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <Container>
                <Username>{this.props.sender}</Username>
                <Timestamp>{this.props.timestamp}</Timestamp>
                <Text>{this.props.content}</Text>
            </Container>
        )
    }

}