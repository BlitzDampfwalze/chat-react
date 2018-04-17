import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';

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
  render() {
    return (
      <div className="App">
        <header>
          <h1>Chat React</h1>
        </header>
          <main>
            <RoomList firebase={firebase}/>
          </main>
      </div>
    );
  }
}

export default App;
