import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WeatherExtraInfo = ({ humadity, wind }) => {
    return <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`Humidity: ${humadity} % - `}</span>
        <span className="extraInfoText">{`Wind: ${wind} wind`} </span>
    </div>
};

WeatherExtraInfo.propTypes = {
    humadity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;