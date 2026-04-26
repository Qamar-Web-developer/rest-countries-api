import React, { useEffect, useState } from 'react'
import '../Country.css'
import { useParams } from 'react-router-dom'


export default function CountryDetail() {

  const [countryData, setCountryData] = useState(null)
  // const countryName = new URLSearchParams(location.search).get('name') 
  const param = useParams()
  const country=param.Country

  useEffect(() => {
    // if (!param.country) return
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((res) => res.json())
      .then(([country]) => {

        setCountryData(

          {
            flage: country.flags.svg,
            name: country.name.common,

            nativeName: Object.values(country.name.nativeName)[0].common,
            population: country.population.toLocaleString('en-IN'),
            region: country.region,
            subRegion: country.subregion,
            capital: country.capital?.[0],
            tld: country.tld.join(', '),
            currency: Object.values(country.currencies)
              .map((currency) => currency.name)
              .join(', '),
            language: Object.values(country.languages).join(', '),
            borders:[]
          }
        )
        if(!country.borders){
          data.border=[]
        }
        Promise.all(country.borders.map((border)=>{
          return  fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => {
            return borderCountry.name.common
          }
        )})).then((borders)=>{
          setCountryData((prevState)=>({...prevState,borders}))
        })
      }).catch((err) => {

      })
  }, [country])


  return countryData === null ? (
    'loading...'
  ) :(
    
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => { return history.back() }} >
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flage } alt="flage not found" />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p><b>Native Name: </b><span className="native-name">{countryData.nativeName}</span></p>
              <p><b>Population: </b><span className="population">{countryData.population}</span></p>
              <p><b>Region: </b><span className="region">{countryData.region}</span></p>
              <p><b>Sub Region: </b><span className="sub-region">{countryData.subRegion}</span></p>
              <p><b>Capital: </b><span className="capital">{countryData.capital}</span></p>
              <p>
                <b>Top Level Domain: </b><span className="top-level-domain">{countryData.tld}</span>
              </p>
              <p><b>Currencies: </b><span className="currencies">{countryData.currency}</span></p>
              <p><b>Languages: </b><span className="languages">{countryData.language}</span></p>
            </div>
            <div className="border-countries"><b>Border Countries: </b>&nbsp;
            {countryData.borders.map((border)=>{
              return <a href={`/${border}`} key={border}>{border}</a>
            })}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
