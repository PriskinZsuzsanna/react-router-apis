import React from 'react'
import Joke from './Joke';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const RandomJoke = () => {

    const [joke, setJoke] = useState({})
    const [isData, setIsData] = useState(false)

    const fetchData = () => {
        fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
            .then(res => res.json())
            .then(data => setJoke(data))
            .then(setIsData(true))
    }

    return (
        <>
            <section className='py-3'>
                <Container>
                    <h1>Get a random Joke!</h1>
                    <Button className='my-3 btn btn-info text-light' onClick={fetchData}>Get Joke</Button>
                </Container>
            </section>
            <section>
                <Container>
                    <Joke
                        joke={joke}
                        isData={isData} />
                </Container>
            </section>
        </>
    );
}


export default RandomJoke
