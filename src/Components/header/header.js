import React, { Component } from "react";
import "./header.css";
import moment from "moment";

class Header extends Component {

  render() {
     
    console.log("header-props",this.props);
    if(!this.props.geoObject && !this.props.yesterday){
      return null;
    }

    return (
      <div className="header container">
        <p> {this.props.geoObject.district.name}, {this.props.geoObject.locality.name}</p>
        <p>Сейчас {moment().format('HH:mm')}. Вчера в это время {this.props.yesterday.temp}<span>&#176;</span></p>
      </div>
    );
  }
}

export default Header;
