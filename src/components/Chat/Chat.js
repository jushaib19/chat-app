import React, { Component } from 'react';
import MessageList from './MessageList';
import Title from './Title';
import SendMessageForm from './SendMessageForm';

class Chat extends Component {

  state= {
        messages: [
              {
                name: "Hamza",
                text: "How are you all?"  
            },
            {
              name: "Ali",
              text: "I am fine. What about you?"
            }
            ]
          }

          onSendMessage = (message) =>
          {
            const messages= this.state.messages;
            messages.push({text: message,
               name: this.props.loggedInUser });
            this.setState({messages: messages});
          }

          onRandomMessage = (message) =>
          {
            const messages= this.state.messages;
            messages.push({text: message.msg,
            name: message.username});
            this.setState({messages: messages});
          }

          randomMessage = () =>
          {
            const arrOfMsg = [
                  {username: "Sameed", msg: "I am from Qatar"},
                  {username: "Salar",  msg: "I am from Pir Piai"},
                  {username: "Ahmed", msg: "I am from Peshawar"},
                  {username: "Shaka", msg: "I am from chiniot"},
                  {username: "Bhatti", msg: "I am from Lahore"},
                  {username: "Harris", msg: "I am from Karachi"},
                  {username: "Shawal", msg: "I am from Faislabad"},
                  {username: "Jamali", msg: "I am from Hyderabad"},
                  {username: "Safi", msg: "I am from Islamabad"},
                  {username: "Saad", msg: "I am from Dera Ismail Khan"}
              ];
              const index = Math.floor(Math.random() * 10);
              
              const user = arrOfMsg[index];

              this.onRandomMessage(user);
          }

          componentDidMount = () => {
            setInterval(this.randomMessage, 15000)
          }

render(){

    return (
      <div>
      <Title  loggedInUser={this.props.loggedInUser}/>
      <MessageList  message={this.state.messages}
      />
      <SendMessageForm onSendMessage={this.onSendMessage} />
      </div>
    );

}
}

export default Chat;