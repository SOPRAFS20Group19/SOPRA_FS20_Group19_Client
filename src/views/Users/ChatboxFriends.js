import React from "react";
import styled from "styled-components";
import {withRouter} from 'react-router-dom';
import {api, handleError} from "../../helpers/api";
import MessageFriends from "./MessageFriends";

const ButtonBlue = styled.button`
  padding: 6px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  color: #003068;
  width: 150px;
  height: 35px;
  border-bottom: 2px solid #003068;
  border: 2px transparent;
  border-radius: 0px;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  background: #66A3E0;
  transition: all 0.3s ease;
  @media only screen and (max-width: 700px){
    font-size: 10px;
  }
`;

const Container = styled.div`
  height: 260px;
  max-width: 400px;
  min-width: 325px;
  width: 90%;
  display: grid;
  grid-template-rows: 40px 175px 35px;
  border-color: black;
  border-width: thick;
  border-style: solid;
  align-content: top;
  flex-direction: column;
  grid-column: 2;
  grid-row: 5 / span 2;
  margin-top: 30px;
  margin-left: 20px;
  max-width: 400px;
  min-width: 325px;
  @media only screen and (max-width: 1100px){
      grid-column: 1;
      grid-row: 7;
      margin-bottom: 15px;
  }
  @media only screen and (max-width: 500px){
    min-width: 225px;
  }
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 25px;
  padding-left: 10px;
  padding-top: 5px;
  grid-row: 1;
  background: #66A3E066;
  font-size: 25px;
  letter-spacing: 0.15em;
  line-height: 1em;
  text-transform: uppercase;
  @media only screen and (max-width: 700px){
    font-size: 20px;
    padding-top: 10px;
  }
  @media only screen and (max-width: 500px){
    font-size: 20px
  }
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


class ChatboxFriends extends React.Component {
    constructor() {
        super();
        this.state = {
            oldMessages: null,
            message: null,
            interval: null
        };
    }

    async getChat() {
        try {
            const url = '/users/chats/' + localStorage.getItem('userId') + '/' + this.props.friendId;

            const response = await api.get(url);

            this.setState({oldMessages: response.data.reverse()});
            this.timeout = setTimeout(() => {
                this.getChat()
            }, 5000);
        } catch (e) {
            alert(`Something went wrong while getting the chat: \n${handleError(e)}`);
        }
    }

    componentDidMount() {
        this.getChat();
    }

    componentWillUnmount(): void {
        clearTimeout(this.timeout);
    }

    handleInputChange(key, value) {
        this.setState({[key]: value});
    }


    async sendMessage() {
        try {
            const url = '/users/chats/' + localStorage.getItem('userId') + '/' + this.props.friendId;
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

    handleClick() {
        this.sendMessage();
        this.setState({message: ''});
    }

    render() {
        return (<Container>
                <Text>Chat</Text>
                {!this.state.oldMessages ? <EmptyChatContainer/> :
                    <ChatContainer>
                        <MessagesList>
                            {this.state.oldMessages.map(message => {
                                return (
                                    <MessageContainer>
                                        <MessageFriends
                                            senderId={message.senderId}
                                            senderUsername={message.senderUsername}
                                            content={message.content}
                                            timestamp={message.timestamp}
                                            messageId={message.messageId}
                                            friendId={this.props.friendId}
                                            getChat={this.getChat.bind(this)}
                                        />
                                    </MessageContainer>
                                );
                            })}
                        </MessagesList>
                    </ChatContainer>}
                <UserChatContainer>
                    <InputField
                        placeholder="Enter your message..."
                        value={this.state.message}
                        onChange={e => {
                            this.handleInputChange('message', e.target.value);
                        }}
                        onKeyPress={e => {
                            if (e.key === 'Enter') {
                                if (this.state.message) {
                                    this.handleClick();
                                }
                            }
                        }}
                    />
                    <ButtonContainer>
                        <ButtonBlue
                            disabled={!this.state.message}
                            variant="outline-secondary"
                            height="100%"
                            onClick={() => {
                                this.handleClick();
                            }}
                        >
                            Send Message</ButtonBlue>
                    </ButtonContainer>
                </UserChatContainer>
            </Container>
        );
    }


}

export default withRouter(ChatboxFriends);
