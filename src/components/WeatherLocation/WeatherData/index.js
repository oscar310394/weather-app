import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './style.css';

// Params data = double destructuring
const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => (
    <div className="weatherDataCont">
        <WeatherTemperature
            temperature={temperature}
            weatherState={weatherState}>
        </WeatherTemperature>
        <WeatherExtraInfo humadity={humidity} wind={wind}></WeatherExtraInfo>
    </div>
);

WeatherData.proptypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    }),
}

export default WeatherData;