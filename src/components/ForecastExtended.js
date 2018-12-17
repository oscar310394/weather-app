import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

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

class ForecastExtenden extends Component {

    constructor() {
        super();
        this.state = { forecastData: null }
    }

    renderForecastItemDays() {
        return "";
        //return days.map(day => (<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>));
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
                {forecastData ? this.renderForecastItemDays() : this.renderProgress()}
            </div>);
    }
}

ForecastExtenden.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtenden;