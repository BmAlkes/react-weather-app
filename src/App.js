import React from 'react';
import './App.css';
import Weather from './Weather/Weather';



class App extends React.Component {

    render() {
        return (
            <div className="App">
            <h1>React Weather App</h1>
            <Weather/>
           
            </div>
        );
    }

}

export default App;
