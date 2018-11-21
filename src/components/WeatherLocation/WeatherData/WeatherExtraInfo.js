import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WeatherExtraInfo = ({ humadity, wind }) => {
    return <div className="weatherExtraInfoCont">
        <span>{`${humadity} % - `}</span>
        <span>{`${wind} wind`} </span>
    </div>
};

WeatherExtraInfo.propTypes = {
    humadity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;