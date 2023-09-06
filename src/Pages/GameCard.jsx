import React from 'react'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'

const GameCard = ({item}) => {
    let navigate = useNavigate()

  const navToGame = (id) => {
    navigate('/games/' + id)
  }  

  return (
    <div className="col-12 col-lg-4 col-xl-3 mx-auto">
        <Card className="game-card h-100 bg-info text-white p-3">
            <h2 className='fs-3'>{item.external}</h2>
            <div className="img-div">
                <img src={item.thumb} alt="" />
            </div>
                <button onClick={() => navToGame(item.gameID)} className='bg-info text-white py-1 px-2 rounded-1'>Details</button>
        </Card>
    </div>
  )
}

export default GameCard
