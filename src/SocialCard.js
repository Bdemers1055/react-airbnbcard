import React, { Component } from 'react';
import "./SocialCard.css";

class SocialCard extends Component {
  render() {
    const { imageSrc } = this.props;
    return (
      <div className="card">
        <img src={imageSrc} alt="card"/>
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
    );
  }
}

export default SocialCard;

