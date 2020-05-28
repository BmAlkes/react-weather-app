import React, { Component } from "react";
import WeatherWeek from "./WeatherWeek/WeatherWeek";
import './Weather.css'

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daysWeek: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://my-json-server.typicode.com/evyros/react-weather-app/forecast"
    )
      .then((data) => data.json())
      .then((daysWeek) => this.setState({ daysWeek }));
  }

  render() {
    return (
      <div className="week">
        {this.state.daysWeek.map((day) => {
          return (
            <WeatherWeek className="weather"
              key={day.day}
              day={day.day}
              temperature={day.temperature}
              icon={day.icon}
              description={day.description}
            />
          );
        })}
      </div>
    );
  }
}
