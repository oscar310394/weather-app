import React from 'react';
import Location from './Location';
//React search for default the file index, it go to the specific folder and
//search for the component with the matching name (WeatherData)
import WeatherData from './WeatherData';

const WeatherLocation = () => (
    <div>
        <Location city={"Turín"}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;