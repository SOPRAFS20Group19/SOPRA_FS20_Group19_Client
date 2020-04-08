import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const Container = styled.div`
  height: 40%;
  width: 43%;
  display: flex;
  justify-content: top;
  border-color: black;
  border-width: thick;
  border-style: solid;
  align-items: left;
  position: absolute;
  top: 55%;
  left:2%;
  flex-direction: column;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: xx-large;
  position: absolute;
  top: 1%;
  left: 2%;
`;

const ChatContainer = styled.div`
  height: 75%;
  width: 100%;
  display: flex;
  justify-content: top;
  background: #66A3E0;
  opacity: 0.2;
  align-items: left;
  position: absolute;
  top: 13%;
  left:0%;
  flex-direction: column;
`;

const UserChatConatainer = styled.div`
  height: 10%;
  width: 98%;
  display: flex;
  justify-content: top;
  align-items: left;
  position: absolute;
  top: 89%;
  left:1%;
  flex-direction: column;
`;


class Chatbox extends React.Component {
    constructor() {
        super();
        this.state = {
            message: null,
            messageSent:null,
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
                <UserChatConatainer>
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
                                    size='sm'
                                    onClick={() => {
                                        this.sendMessage();
                                    }}
                            >
                                Send Message</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </UserChatConatainer>
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
