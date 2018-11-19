import React from 'react';

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

export default Location;