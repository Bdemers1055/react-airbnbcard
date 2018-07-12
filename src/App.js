import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <section>
         <div className="card">
              <img src="https://via.placeholder.com/250x250" alt="card"/>
              <div className="preheading">
                <span className="category">River Rafting</span>
                <span className="state"> Colorado</span>
              </div>
              <div className="heading">
                <h3>title goes here</h3>
              </div>  
              <div className="postheading">
                <small><span className="price">$00</span> per person</small>
              </div>              
              <div className="ratings">
              <span className="rate stars">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              </span>
              <span className="reviewCount"> 10</span>
              </div>
         </div>
       </section>
      </div>
    );
  }
}

export default App;
