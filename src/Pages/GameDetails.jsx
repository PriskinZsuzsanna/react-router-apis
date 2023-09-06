import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { useNavigate, useParams } from 'react-router-dom'

const GameDetails = () => {

    let navigate = useNavigate()
    let {id} = useParams()
    const [details, setDetails] = useState({
        info: {
            title: ''
        },
        cheapestPriceEver: {
            price: ''
        },
        deals: []
    })

    useState(() => {
        console.log(id)
        axios.get('https://www.cheapshark.com/api/1.0/games?id=' + id)
            .then(data => {
                console.log(data)
                setDetails(data.data)
            })
    }, [])

    useState(() => {
        console.log(details)
    }, [])

    return (
        <section>
            <Container>
                <h1>{details.info.title}</h1>
                <p>Cheapest Price Ever: {details.cheapestPriceEver.price} $</p>
                {details.deals.map((item => (
                    <Button className='btn btn-info text-white m-2'>Get for: {item.price} $</Button>
                )))}
                <div className='my-4'>
                    <Button onClick={() => navigate('/games')} className='btn btn-secondary'>Back to Games</Button>
                </div>
            </Container>
        </section>
    )
}

export default GameDetails
