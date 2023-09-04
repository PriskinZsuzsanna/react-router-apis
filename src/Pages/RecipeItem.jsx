import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecipeItem = ({item}) => {

  let navigate = useNavigate()

  return (
    <div className='col-12 col-lg-4 col-xl-3'>
      <div className=" h-100 card food-card bg-info d-flex flex-column justify-content-between"
      onClick={() => navigate('/recipes/' + item.idMeal)}>
        <h2 className='card-body pt-4'>{item.strMeal}</h2>
        <div className='img-div'>
          <img className='card-img-top p-2 food' src={item.strMealThumb} alt="" />
          <button className='btn btn-info'>Recipe</button>
        </div>
      </div>
    </div>
  )
}

export default RecipeItem
