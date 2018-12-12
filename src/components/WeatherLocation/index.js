import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import Location from './Location';
import transformWeather from '../../services/transformWeather';
//if the export doesn't have the word default the import needs '{}'
//React search for default the file index, it go to the specific folder and
//search for the component with the matching name (WeatherData)
import WeatherData from './WeatherData';
import './style.css';


class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;
        //this.state only works in the constructor
        this.state = {
            city,
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
        const api_weather = getUrlWeatherByCity(this.state.city);
        //Fetch: get data from server
        fetch(api_weather).then(res => {

            return res.json();
        }).then(data => {
            console.log(data);
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            })
        });


    }
    render() {
        const { onWeatherLocationClick } = this.props;
        console.log("render");
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : <CircularProgress />}
            </div>
        );
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;