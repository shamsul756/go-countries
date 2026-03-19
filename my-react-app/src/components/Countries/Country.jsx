import React from 'react';

// Use lowercase 'country' to match how you pass it from the parent
const Country = ({ country }) => { 
  
    // Check if country.name exists before logging to avoid "undefined" crashes
    const handleMove =()=>{
        console.log("button click");
    }
    
    return (
      <div className='country'>
        <img src={country?.flags?.flags?.png} alt="" />
            <h3>Name: {country?.name?.common}</h3>
            <p>population:{country?.population?.population}</p>
            <p>area:{country?.area?.area} {country?.area?.area > 300000 ? "big country" : "small country" } </p>
            <button onClick={handleMove} className='btn'>Not Visited</button>
      </div>
    );
};

// Error was here: You were exporting 'Countries' (plural) instead of 'Country'
export default Country;