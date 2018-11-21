import React from 'react';
import PropTypes from 'prop-types';

//example of destructuring
const Location = ({ city }) =>
    //const { city } = props;
    //const city = props.city;
    (
        <div>
            <h1>
                {city}
            </h1>
        </div>
    );

Location.propTypes = {
    city: PropTypes.string.isRequired
}

export default Location;