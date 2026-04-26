import React, { useEffect, useState } from 'react'
import Card from './Card'
import ShimmerEffect from './shimmerEffect';
// import countriesData npmfrom '../countriesData'

export default function CardContainer({query}) {
    const [countriesData,setCountriesData]=useState([])
useEffect(()=>{ fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region')
.then(x => x.json())
.then(y => setCountriesData(y));},[])
 

   const arry=countriesData.filter((data)=>{
        return data.name.common.toLowerCase().includes(query) || data.region.toLowerCase().includes(query)
    }).map((data,i) => {
   
        return <Card name={data.name.common} flage={data.flags.svg} population={data.population.toLocaleString('en-IN')} region={data.region} capital={data.capital?.[0]} key={i} />

    })
     
    if(!countriesData.length){
        return <ShimmerEffect />
    }

    return (
        <div className="countries-container">
            {arry}
        </div>
    )
}
