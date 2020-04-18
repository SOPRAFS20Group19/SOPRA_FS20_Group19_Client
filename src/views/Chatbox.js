import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const Container = styled.div`
  height: 100%;
  width: 90%;
  display: grid;
  grid-template-rows: 20% 60% 20%;
  justify-content: bottom;
  border-color: black;
  border-width: thick;
  border-style: solid;
  align-items: top;
  flex-direction: column;
  grid-column: 2;
  grid-row: 4 / span 2;
  margin-top: 30px;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 25px;
  padding-left: 1.5%;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  grid-row: 1;
`;

const ChatContainer = styled.div`
  min-height: 100px;
  width: 100%;
  display: flex;
  justify-content: top;
  background: #66A3E033;
  align-items: left;
  padding-top: 0.5%
  flex-direction: column;
  grid-row: 2;
`;

const UserChatContainer = styled.div`
  width: 100%;
  justify-content: bottom;
  align-items: bottom;
  flex-direction: column;
  grid-row: 3;
`;


class Chatbox extends React.Component {
    constructor() {
        super();
        this.state = {
            message: null,
            messageSent: null,
        }
    }
    handleInputChange(key, value) {
        // Example: if the key is username, this statement is the equivalent to the following one:
        // this.setState({'username': value});
        this.setState({ [key]: value });
    }

    sendMessage(){
        //implement the send message method
        //next line is for testing purposes
        this.handleInputChange(`messageSent`,this.state.message)
    }

    render() {
        return ( <Container>
            <Text>Chat</Text>
                <ChatContainer>
                    {this.state.message != null ?
                        <Text>{this.state.messageSent}</Text>
                    :null
                    }
                </ChatContainer>
                <UserChatContainer>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Enter your message here"
                            aria-label="message"
                            aria-describedby="basic-addon2"
                            onChange={e => {
                                this.handleInputChange('message', e.target.value);
                            }}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary"
                                    height="100%"
                                    onClick={() => {
                                        this.sendMessage();
                                    }}
                            >
                                Send Message</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </UserChatContainer>
                </Container>
        );
    }


};

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
