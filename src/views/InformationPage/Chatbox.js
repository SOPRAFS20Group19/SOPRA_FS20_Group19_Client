import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import {api, handleError} from "../../helpers/api";
import Location from "../../components/shared/models/Location";
import Message from "./Message";
import Player from "../Player";

const Container = styled.div`
  height: 260px;
  width: 90%;
  display: grid;
  grid-template-rows: 40px 175px 35px;
  border-color: black;
  border-width: thick;
  border-style: solid;
  align-content: top;
  flex-direction: column;
  grid-column: 2;
  grid-row: 3/ span 2;
  margin-top: 30px;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 25px;
  padding-left: 15px;
  grid-row: 1;
  background: #66A3E066;
`;

const ChatContainer = styled.div`
  min-height: 175px;
  max-height: 175px;
  width: 100%;
  justify-content: left;
  background: white;
  align-items: left;
  flex-direction: column;
  grid-row: 2;
  overflow: scroll;
  border-bottom: 2px solid black;
`;

const MessagesList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const MessageContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  padding-left: 15px;
`;

const EmptyChatContainer = styled.div`
  min-height: 175px;
  max-height: 175px;
  width: 100%;
  justify-content: left;
  background: #66A3E033;
  align-items: left;
  flex-direction: column;
  grid-row: 2;
  overflow: scroll;
  border-bottom: 2px solid black;
`;

const UserChatContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: top;
  align-items: top;
  grid-row: 3;
  grid-template-columns: auto 150px;
`;

const InputField = styled.input`
  &::placeholder {
    color: black;
  }
  height: 35px;
  width: 100%;
  background: white;
  color: #000000;
  border: 2px transparent;
  grid-column: 1;
  font-weight: normal;
  font-size: 15px;
  padding-left: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: left;
  grid-column: 2;
  width: 150px;
`;

const Button = styled.button`
  padding: 6px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  color: black;
  width: 150px;
  height: 35px;
  border-bottom: 2px solid black;
  border: 2px transparent;
  border-radius: 0px;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  background: white;
  transition: all 0.3s ease;
`;


class Chatbox extends React.Component {
    constructor() {
        super();
        this.state = {
            oldMessages: null,
            message: null
        };
    }

    async getChat(){
        try {
            const url = '/locations/chats/' + this.props.locationId;

            const response = await api.get(url);

            //const oldMessages = response.data.map((message) => <Message sender={message.senderId} content={message.content} timestamp={message.timestamp}/>);
            this.setState({oldMessages: response.data.reverse()});
        } catch (e) {
            alert(`Something went wrong while getting the chat: \n${handleError(e)}`);
        }
    }

    componentDidMount(){
        this.getChat();
    }

    handleInputChange(key, value) {
        // Example: if the key is username, this statement is the equivalent to the following one:
        // this.setState({'username': value});
        this.setState({ [key]: value });
    }

    /*componentDidUpdate(){
        this.getChat();
    }*/

    async sendMessage(){
        try {
            const url = '/locations/chats/' + this.props.locationId;
            const requestBody = JSON.stringify({
                senderId: localStorage.getItem('userId'),
                content: this.state.message
            });

            await api.put(url, requestBody);

            this.setState({message: null});
            this.getChat();
        } catch (e) {
            alert(`Something went wrong while posting the message: \n${handleError(e)}`);
        }
    }

    handleClick(){
        this.sendMessage();
        this.setState({message: ''});
    }

    render() {
        return ( <Container>
            <Text>Comments</Text>
                {!this.state.oldMessages ? <EmptyChatContainer/> :
                <ChatContainer>
                    <MessagesList>
                        {this.state.oldMessages.map(message => {
                            return (
                                <MessageContainer>
                                    <Message sender={message.senderId} content={message.content} timestamp={message.timestamp}/>
                                </MessageContainer>
                            );
                        })}
                    </MessagesList>
                </ChatContainer>}
                <UserChatContainer>
                    <InputField
                        placeholder="Enter your message here"
                        value={this.state.message}
                        onChange={e => {
                            this.handleInputChange('message', e.target.value);
                        }}
                    />
                    <ButtonContainer>
                    <Button
                        disabled={!this.state.message}
                        variant="outline-secondary"
                            height="100%"
                            onClick={() => {
                                this.handleClick();
                            }}
                    >
                        Send Message</Button>
                    </ButtonContainer>
                </UserChatContainer>
                </Container>
        );
    }


}

export default withRouter(Chatbox);

/*
<InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">Button</Button>
    </InputGroup.Append>
  </InputGroup>
*/
