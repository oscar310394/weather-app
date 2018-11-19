import React from 'react';

const WeatherExtraInfo = ({ humadity, wind }) => {
    return <div>
        <span>{`${humadity} % - `}</span>
        <span>{`${wind} wind`} </span>
    </div>
};

export default WeatherExtraInfo;