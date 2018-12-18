import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';
import transformForecast from './../services/transformForecast';

/*
const days = [
    'Monday',
    'Tuesday',
    'wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal'
};
*/

export const api_key = "893839dda4fb3761c1aa65bc991aaa89";
export const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtenden extends Component {

    constructor() {
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
        // fetch or axios
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(data =>
            (data.json())
        ).then(weather_data => {
            console.log(weather_data);
            const forecastData = transformForecast(weather_data);
            console.log(forecastData);
            this.setState({ forecastData });
        });
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => (
            <ForecastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}>
            </ForecastItem>));
    }

    renderProgress() {
        return <h3>Loading Forecast Extended</h3>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forecast-title'>Forecast Extended for {city}</h2>
                {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
            </div>);
    }
}

ForecastExtenden.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtenden;