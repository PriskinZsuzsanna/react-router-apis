import React from 'react'

const Country = ({ item, isCountryData }) => {
    return (
        isCountryData &&
        
        <div className="col-12 col-lg-4 col-xl-3 mx-auto">
            <div className='card h-100 py-5 px-3 bg-info text-light d-flex flex-column justify-content-between'>
                <h2>{item.name.common}</h2>
                <h3>{item.capital}</h3>
                <p>{item.region}</p>
                <img src={item.flags.svg} alt="" />
            </div>
        </div>
    )
}

export default Country
