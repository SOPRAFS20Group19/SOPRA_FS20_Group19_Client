import styled from "styled-components";
import React from "react";
import {Redirect, withRouter} from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import {api, handleError} from "../../helpers/api";
import User from "../../components/shared/models/User";
import {Spinner} from "../variables/Spinner";
import FireplaceCircle from "../MapMarkers/FireplaceCircle.png"
import RecyclingCircle from "../MapMarkers/RecyclingCircle.png"
import FountainCircle from "../MapMarkers/FountainCircle.png"
import HeartUnfilled from "../InformationPage/HeartUnfilled.png"
import TrashCan from "./TrashCan.png"
import HeartRed from "../InformationPage/HeartRed.png"
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {Button} from "../variables/Button";
import {RoundButton} from "../variables/RoundButton";
import avatarArray from "../Avatar/AvatarArray";

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
  grid-column: 1;
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

const Delete = styled.div`
  grid-column: 2;
  grid-row: 1;
  padding-right: 15px;
`;

const TrashButton = styled.button`
  &:hover {
    transform: translateY(-2px);
  }
  padding: 0px;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 100%;
  background: transparent;
  transition: all 0.3s ease;
  margin: -5px;
`;


const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const imgStyle = {
    "height": "10px",
    "width": "10px"
};

export default class Message extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    async deleteMessage(){
        try {
            const url = '/locations/chats/' + this.props.locationId + '/' + this.props.messageId;

            await api.delete(url);

            this.props.getChat();
        } catch (e) {
            alert(`Something went wrong while deleting the message: \n${handleError(e)}`);
        }
    }

    // DO NOT CHANGE == to ===!!!
    render(){
        return (
            <Container>
                <Username>{this.props.senderUsername}</Username>
                <Timestamp>{this.props.timestamp}</Timestamp>
                <Text>{this.props.content}</Text>
                {localStorage.getItem("userId") == this.props.senderId ? (
                <Delete>
                    <ButtonContainer>
                        <TrashButton
                            width="75%"
                            onClick={() => {
                                this.deleteMessage();
                            }}
                        >
                            <img src={TrashCan} style={imgStyle}/>
                        </TrashButton>
                    </ButtonContainer>
                </Delete>) : null}
            </Container>
        )
    }

}