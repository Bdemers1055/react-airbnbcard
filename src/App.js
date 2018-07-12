import React, { Component } from 'react';
import SocialCard from './SocialCard';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  this.state = {
    imageUrls: [
      "https://via.placeholder.com/250x251",
      "https://via.placeholder.com/250x249",
      "https://via.placeholder.com/250x252",
      "https://via.placeholder.com/250x253",
      "https://via.placeholder.com/250x248",
      "https://via.placeholder.com/250x247"
    ]
  };  
  }
  render() {
    const cards = this.state.imageUrls.map((url) => <SocialCard imageSrc={url} key={url} />)
    return (
      <div className="App">
      {cards}
      </div>
    );
  }
}

export default App;
