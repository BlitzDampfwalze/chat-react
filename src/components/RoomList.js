import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      newRoomName: ''
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');

  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {      
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) });      
    });
  }

  handleChange(e) {
    this.setState({ newRoomName: e.target.value })    
  }


  createRoom(e) {
    if (!this.state.newRoomName) { return }
    e.preventDefault();
    const newRoom = this.state.newRoomName;
    this.roomsRef.push({ name: newRoom });
    this.setState({ newRoomName: '' });
  }

  render() { 
    return (
      <section className="room-list">
          { 
            this.state.rooms.map( (room, index) =>            
              <div key={index}>
              {room.name}
              </div>)
          }
        <form onSubmit={ (e) => this.createRoom(e) }>
          <input type="text" value={ this.state.newRoomName } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
      </section>

    );
  }
}
  
export default RoomList;
