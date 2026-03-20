import React, { useState } from 'react';

// Use lowercase 'country' to match how you pass it from the parent
const Country = ({ country, handleVisitedCountries}) => {
  const [Visited, setVisited] = useState(false)
  // Check if country.name exists before logging to avoid "undefined" crashes
  const handleMove = () => {
    setVisited(!Visited);
    handleVisitedCountries(country);
  }
  return (
    <div className={`country ${Visited && 'country-visited'}`}>
      <img src={country?.flags?.flags?.png} alt="" />
      <h3>Name: {country?.name?.common}</h3>
      <p>population:{country?.population?.population}</p>
      <p>area:{country?.area?.area} {country?.area?.area > 300000 ? "big country" : "small country"} </p>
      <button onClick={handleMove} className='btn'>{Visited ? 'not-visited' : 'visited'}</button>
    </div>
  );
};

// Error was here: You were exporting 'Countries' (plural) instead of 'Country'
export default Country;