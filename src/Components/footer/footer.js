import React, { Component } from "react";
import "./footer.css";
import Slider from '../swiper/swiper';

export default class WeatherSlider extends Component {
  render() {
    

    return (
      <div className="footer">
        <Slider />
      </div>
    );
  }
}
