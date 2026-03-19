import React, { use } from 'react';

// Import it as Country to match the file's export
import Country from './components/Countries/Country'; 

const counter = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div className='countryGrid'>
            
            {
                countries.map(country => (
                    /* Always add a 'key' prop when mapping in React */
                    <Country key={country.cca3 || country.name.common} country={country} />
                ))
            }
        </div>
    );
};

export default counter;