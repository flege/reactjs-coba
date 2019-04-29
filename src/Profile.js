import React, { Component } from 'react';
import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  
  klik(){
    toast.notify('Hello world', {
      duration: 2000
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.klik()}>alert</button><br/><br/>
        <img src="apel.jpg"/>
      </div>
    );
  }
}

export default Profile;
