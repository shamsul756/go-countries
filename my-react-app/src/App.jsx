
import { Suspense } from 'react';
import './App.css'
import Counter from './counter'
const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json());
function App() {
  return (
    <>
 
   <Suspense fallback ={<p>waiting for data...</p>}>
         <Counter countriesPromise={countriesPromise}></Counter>
   </Suspense>

    </>
  )
}

export default App;
