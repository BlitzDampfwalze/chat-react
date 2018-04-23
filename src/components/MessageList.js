import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        messages: []        
        };

    this.messagesRef = this.props.firebase.database().ref('Messages');
    
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })   
    });
  }
  
  render() { 

    const activeMessages = this.state.messages.filter(message => message.roomId == this.props.activeRoom.key)

    return (
        <section>            
            Message List stuff here
            <tbody>
          {activeMessages.map( (message, index) =>            
            <tr className="room" key={index}>
              <td>{message.content}</td>
            </tr>
            )
          }
      </tbody>
        </section>
    );
  }

}

export default MessageList;