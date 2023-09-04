import React, { useEffect, useState } from 'react'
import RecipeItem from './RecipeItem'
import Container from 'react-bootstrap/Container'
import { FormGroup } from 'react-bootstrap'

const RecipePage = () => {

  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('')
  const [isRecipeData, setIsRecipeData] = useState(false)

  const fetchUponQuery = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + query)
    .then(res => res.json())
    .then(data => {
      if (data.meals) {
        setIsRecipeData(true)
        setRecipes(data.meals)
      } 
    })
  }

  const queryForRecipe = (value) => {
    setQuery(value)
  }

  useEffect(() => {
    fetchUponQuery ()
  },[query])

  return (
    <>
      <section className='py-3 w-100'>
        <Container className=''>
          <h1>Find Recipes</h1>
          <FormGroup className='w-100'>
            <label htmlFor="" className='w-100 my-2'>Enter the ingredient</label>
            <input type="text" className='w-75 p-2 rounded bg-info text-light' placeholder='Search for ingredients...'
             value={query} onChange={(e) => queryForRecipe(e.target.value)}/>
          </FormGroup>
        </Container>
      </section>
      {
        isRecipeData &&
        <section>
          <Container>
            <div className="row  row-gap-4 my-3">
              {
                recipes.map((item) => (
                  <RecipeItem 
                  key={item.idMeal}
                  item={item}/>
                ))
              }
            </div>
          </Container>
        </section>
      }
    </>
  )
}

export default RecipePage
