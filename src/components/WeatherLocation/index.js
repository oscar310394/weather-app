import React, { Component } from 'react';
import Location from './Location';
import transformWeather from '../../services/transformWeather';
//if the export doesn't have the word default the import needs '{}'
import { api_weather } from './../../constants/api_url';
//React search for default the file index, it go to the specific folder and
//search for the component with the matching name (WeatherData)
import WeatherData from './WeatherData';
import './style.css';


class WeatherLocation extends Component {

    constructor() {
        super();
        //this.state only works in the constructor
        this.state = {
            city: 'Buenos Aires',
            data: null
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    //no use it - UNSAFE
    /*
    componentWillMount() {
        console.log("UNSAFE componentWillMount");
    }
    //no use it -  UNSAFE
    componentWillUpdate(nextProps, nextState) {
        console.log("UNSAFE componentWillUpdate");
    }
    */

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
        console.log("render");
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : "Cargando"}
            </div>
        );
    }
};

export default WeatherLocation;