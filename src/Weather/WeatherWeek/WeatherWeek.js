import React, { Component } from 'react'
import'./WeatherWeek.css'

export default class WeatherWeek extends Component {
    daysWeek ={

        2:'Tuesday',
        3:'Wednesday',
        4:'Thursday',
        5:'Friday',
        6:'Saturday'
    };

    render() {
        return (
            <div className="Day">
                <h3>{this.daysWeek[this.props.day]}</h3>
                <img src={require(`../icons/${this.props.icon}.png`)} alt={this.props.description}/>
                <p>
          <span>{this.props.temperature+"°"}</span> {this.props.description}
        </p>
            </div>
        )
    }
}
