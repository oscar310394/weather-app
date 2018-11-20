import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from '../constants/weather';

const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons name={icon} size="2x"></WeatherIcons>;
    else
        return <WeatherIcons name={"day-sunny"} size="2x"></WeatherIcons>;
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        <span>
            {
                getWeatherIcon(weatherState)
            }
            {`${temperature} C°`}
        </span>
    </div>
);

//Validate the type of the var
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;