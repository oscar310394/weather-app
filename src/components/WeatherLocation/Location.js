import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

//example of destructuring
const Location = ({ city }) =>
    //const { city } = props;
    //const city = props.city;
    (
        <div className="locationCont">
            <h1>
                {city}
            </h1>
        </div>
    );

Location.propTypes = {
    city: PropTypes.string.isRequired
}

export default Location;