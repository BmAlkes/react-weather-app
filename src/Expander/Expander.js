import React, { Component } from 'react'
import Weather from '../Weather/Weather';
import './Expander.css'


export default class Expander extends Component {

    constructor(props){
        super(props);
        this.state={
            isShow:false
        };
    }
    toogle(){
        this.setState({
            isShow:!this.state.isShow
        })
    }

    render() {
        return (
            <div className="Weather">
                <button onClick={this.toogle.bind(this)}>Show Weather</button>{this.state.isShow ? <div><Weather/></div>:null}
            </div>
        )
    }
}
