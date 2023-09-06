import axios from 'axios'
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import GameCard from './GameCard'

const GamesPage = () => {

  const [games, setGames] = useState([])  
  const [inputValue, setInputValue] = useState('')
  const [isData, setIsData] = useState(false)

  const getGames = () => {
    axios.get('https://www.cheapshark.com/api/1.0/games?title=' + inputValue)
    .then(data => {
        setGames(data.data)
        setInputValue('')
        setIsData(true)
    })
  }

  return (
    <>
    <section className="py-3">
        <Container className="py-2">
            <h1>Search for Games</h1>
            <p>Find your favourite game!</p>
            <input type="text" className='bg-info text-white py-1 px-2 w-75 rounded-1 mb-2' placeholder='type a game name...'
            value={inputValue} onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    getGames()
                }
            }}/>
            <button onClick={getGames} className='btn btn-info px-4 py-1 ms-2 w-25'>Find</button>
        </Container>
    </section>
    {
        isData && (
            <section className='py-5'>
                <Container>
                    <div className="row row-gap-5 ">
                        {games.map((item) => (
                            <GameCard 
                            key={item.gameID}
                            item={item} />
                        ))}
                    </div>
                </Container>
            </section>
        )
    }
    </>
  )
}

export default GamesPage
