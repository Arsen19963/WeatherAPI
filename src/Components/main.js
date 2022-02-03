import React, { Component } from "react";
import { getData } from "../axios";
import { Weather } from "./design/mainWeather";
import moment from "moment";
import Header from "./header/header";
import Body from "./body/body";
import Atmospheric from "./atmospheric/atmospheric";
import WeatherSlider from "./footer/footer"
class Main extends Component {
  state = {
    data: null,
  };
  componentDidMount() { 
   getData().then((data) => this.setState({ data }))
   console.log(moment().format("YYYY-MM-DD"));
  }
  todaysData = (data) => {
    const today = moment().format("YYYY-MM-DD");
    return data.find((elem, index) => {
      return today === elem.date;
    });
  };
  render() {
   
    if (this.state.data) {
      const todayData = this.todaysData(this.state.data.forecasts);
      console.log(todayData);
    }
    console.log(this.state.data);
    return(
    <Weather>
      <Header geoObject={this.state.data?.geo_object} yesterday={this.state.data?.yesterday}/>
      {/* <h1 className="h1"> {}</h1> */}
      <Body fact={this.state.data?.fact} feels={this.state.data?.feels}/>
      <Atmospheric />
      <WeatherSlider/>
    </Weather>);
  }
}

export default Main;
