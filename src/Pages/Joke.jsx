import React from 'react'
import Card from 'react-bootstrap/Card'

const Joke = ({ joke, isData }) => {

    return (
        <>
            {isData &&
                <Card className='p-5 bg-info text-light'>
                    <h2>{joke.joke}</h2>
                </Card>
            }
        </>
    )
}

export default Joke
