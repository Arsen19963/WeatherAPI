import React, { Component } from "react";
import "./body.css";
import Celestial from "../icons/moon.svg";
import "../design/container.css";
 
class Body extends Component {
  render() {
    const {fact, feels} = this.props;
    if (!fact && !feels) {
      return null;
    }
    
    return (
      <div className="body container">
        <div className="rigthPart">
          <div className="bigDegree">
            <p>
              {fact.temp}
              <span>&#176;</span>
            </p>
          </div>
          <div className="celestial">
            <img src={Celestial} />
          </div>
        </div>

        <div className="leftPart">
          <p className="atmospheric">Облачно с проясне</p>
          <p className="humidity">
            Ощущается как {fact.temp}
            <span>&#176;</span>
          </p>
        </div>
      </div>
    );
  }
}
export default Body;
