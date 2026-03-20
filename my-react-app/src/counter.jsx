import React, { use, useState } from 'react';

// Import it as Country to match the file's export
import Country from './components/Countries/Country'; 

const counter = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [count, setCount] = useState(0);
   
    
    const handleVisitedCountries = (country)=>{
        console.log('hello handle visited', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
        setCount(count + 1);
        
    }
   

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div className='country'>
            <h3>total country visited:{count} </h3>
            
      
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country?.name?.common}</li>)
                }
            </ol>
          
              <div className='countryGrid'>
    
            {
                countries.map(country => (
                    /* Always add a 'key' prop when mapping in React */
                    <Country key={country.cca3 || country.name.common} country={country}
                       handleVisitedCountries={handleVisitedCountries} 
                      
                       />
                 
                ))
            }
            </div>
        </div>
    );
};

export default counter;