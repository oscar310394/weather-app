import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({ humadity, wind }) => {
    return <div>
        <span>{`${humadity} % - `}</span>
        <span>{`${wind} wind`} </span>
    </div>
};

WeatherExtraInfo.propTypes = {
    humadity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;