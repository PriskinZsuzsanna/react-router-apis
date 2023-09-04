import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Country from './Country'

const Countries = () => {

  const [countries, setCountries] = useState([])
  const [isCountryData, setIsCountryData] = useState(false)

  const fetchCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json ())
    .then(data => setCountries(data))
    .then(setIsCountryData(true))
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
   <section className="py-3">
    <Container className='py-2'>
        <h1 className='py-4'>Countries</h1>
        <div className="row row-gap-3">
            {countries.map((item) => (
                <Country
                key={item.cca2}
                item={item}
                isCountryData={isCountryData} />
            ))}
        </div>
    </Container>
   </section>
  )
}

export default Countries
