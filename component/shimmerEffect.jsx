import React from 'react'
import '../shimmer.css'
import '../Country.css'
export default function ShimmerEffect() {

    return (
        <>
            <div className="countries-container">
                {
                    Array.from({ length: 20 }).map((el,i) => {
                        return <div className="country-card shimmer-card" key={i}></div>
                    })
                }
            </div>


        </>)

}
