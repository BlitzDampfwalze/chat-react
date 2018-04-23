import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import * as firebase from 'firebase';
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';

var config = {
    apiKey: "AIzaSyAOajXC0v78rbn1eWLADymIx5oqKDZAlIo",
    authDomain: "chat-react-fb94b.firebaseapp.com",
    databaseURL: "https://chat-react-fb94b.firebaseio.com",
    projectId: "chat-react-fb94b",
    storageBucket: "chat-react-fb94b.appspot.com",
    messagingSenderId: "49502538566"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeRoom: []
      };
    
    this.selectRoom = this.selectRoom.bind(this);

    }
  
  

  selectRoom (room) {
    const selectedRoom = room;
    this.setState({ activeRoom: selectedRoom });
  }

  render() {
    return ( 
      <div className="App">
        <header>
          <h1>Chat React</h1>
        </header>
          <main>
            <RoomList selectRoom={this.selectRoom} firebase={firebase}/>
            <MessageList activeRoom={this.state.activeRoom} firebase={firebase}/>
          </main>
      </div>
    );
  }
}

export default App;
