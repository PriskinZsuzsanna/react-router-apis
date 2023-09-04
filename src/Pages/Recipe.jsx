import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import RecipeTags from './RecipeTags'

const Recipe = () => {

  const recipe = useParams()
  const [details, setDetails] = useState([])
  let tags = ''
  let newTag;
  let tagArray;

  const fetchDetails = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.id}`)
      .then(res => res.json())
      .then(data => setDetails(data.meals[0]))
  }

  useEffect(() => {
    console.log(recipe)
    fetchDetails()
  }, [])

  useEffect(() => {
    //tags = details.strTags
    //tagArray = tags.split(',')
  }, [])


  return (
    <section>
      <Container>
        <h1>{details.strMeal}</h1>
        <h2>{details.strCategory}</h2>
        <p>{details.strInstructions}</p>
        <img src={details.strMealThumb} alt="" />
        {/*tagArray?.map((item) => {
          return <RecipeTags
            key={item}
            item={item} />
        })*/}
      </Container>
    </section>
  )
}

export default Recipe

