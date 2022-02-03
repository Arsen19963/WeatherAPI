import React, { Component } from "react";
import "./atmospheric.css";
import Humididy from "../icons/humidity.svg";
import Wind from "../icons/wind.svg";
import Pressure from "../icons/pressure.svg";

class Atmospheric extends Component {
  render() {
    return (
      <div className="atmospheric container">
        <div>
          <img src={Wind} className="iconCalm" />
          <span>Штиль</span>
        </div>
        <div>
          <img src={Humididy} className="iconWind" />
          <span>74%</span>
        </div>
        <div>
          <img src={Pressure} className="iconWind" />
          <span>678 мм рт. ст.</span>
        </div>
    
      </div>
    );
  }
}

export default Atmospheric;
