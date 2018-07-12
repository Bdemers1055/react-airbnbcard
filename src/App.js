import React, { Component } from 'react';
import SocialCard from './SocialCard';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
      <SocialCard imageSrc="https://via.placeholder.com/250x250" />
      <SocialCard imageSrc="https://via.placeholder.com/250x250" />
      <SocialCard imageSrc="https://via.placeholder.com/250x250" />
      <SocialCard imageSrc="https://via.placeholder.com/250x250" />
      <SocialCard imageSrc="https://via.placeholder.com/250x250" />
      </div>
    );
  }
}

export default App;
