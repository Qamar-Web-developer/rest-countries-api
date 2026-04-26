import React from 'react'


export default function Card({name,flage,population,region,capital}) {
  return (
   <a className="country-card" href={`/${name}`}>
  <img src={flage} alt="Hong Kong flag" />
  <div className="card-text">
    <h3 className="card-title">{name}</h3>
    <p>
      <b>Population: </b>{population}
    </p>
    <p>
      <b>Region: </b>{region}
    </p>
    <p>
      <b>Capital: </b>{capital}
    </p>
  </div>
</a>
  )
}
