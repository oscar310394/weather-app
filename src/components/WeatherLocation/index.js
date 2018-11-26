import React, { Component } from 'react';
import Location from './Location';
import transformWeather from '../../services/transformWeather';
//if the export doesn't have the word default the import needs '{}'
import { api_weather } from './../../constants/api_url';
//React search for default the file index, it go to the specific folder and
//search for the component with the matching name (WeatherData)
import WeatherData from './WeatherData';
import './style.css';

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from '../../constants/weather';



const data = {
    temperature: 2,
    weatherState: SNOW,
    humidity: 2,
    wind: '10 m/s'
}

class WeatherLocation extends Component {

    constructor() {
        super();
        //this.state only works in the constructor
        this.state = {
            city: 'Buenos Aires',
            data: data
        }
    }

    handleUpdateClick = () => {

        //Fetch: get data from server
        fetch(api_weather).then(res => {

            return res.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            })
        });


    }
    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Update</button>
            </div>
        );
    }
};

export default WeatherLocation;