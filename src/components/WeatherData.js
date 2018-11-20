import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from '../constants/weather';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={"20"} weatherState={RAIN}></WeatherTemperature>
        <WeatherExtraInfo humadity={80} wind={"10 m/s"}></WeatherExtraInfo>
    </div>
);

export default WeatherData;