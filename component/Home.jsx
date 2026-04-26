import React from 'react'
import React, { useState } from 'react'
import Searchbar from './Searchbar'
import Filter from './Filter'
import CardContainer from './CardContainer'
import  '../App.css'
import ShimmerEffect from './shimmerEffect'


export default function Home() {
    const [query, setquery] = useState('')
    return (
        <>
            <main>
                <div className="search-filter-container">
                    <Searchbar setquery={setquery} />
                    <Filter setquery={setquery} />
                </div>
              
                <CardContainer query={query} />
            </main>
        </>
    )
}
