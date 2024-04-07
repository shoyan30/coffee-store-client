

import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './component/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffee] = useState(loadedCoffees)
  return (
    <>

      <div className='text-center mt-20'>
      <Link to="/addcoffee"><button className="btn btn-active btn-neutral w-full">Add Coffee</button></Link>

      </div>

      <h1 className='text-6xl text-center my-24 text-[#f59e0b]'>Hot Hot Coffe: {coffees.length}</h1>

      <div className='grid sm:grid-cols-2 md: grid-cols-1 lg:grid-cols-2 gap-8 px-24'>
        {
          coffees.map(coffee => <CoffeeCard

            key={coffee._id}
            coffee={coffee}
            coffees = {coffees}
            setCoffee = {setCoffee}

          ></CoffeeCard>)
        }
      </div>

    </>
  )
}

export default App
