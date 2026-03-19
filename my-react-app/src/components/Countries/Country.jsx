import React from 'react';

// Use lowercase 'country' to match how you pass it from the parent
const Country = ({ country }) => { 
    // Check if country.name exists before logging to avoid "undefined" crashes
    
    
    return (
        <div style={{border: '1px solid gray', margin: '10px', padding: '10px'}}>
            <img src={country?.flags?.flags?.png} alt="" />
            <h1>Name: {country?.name?.common}</h1>
            <p>population :{country?.population?.population}</p>
            
        </div>
    );
};

// Error was here: You were exporting 'Countries' (plural) instead of 'Country'
export default Country;