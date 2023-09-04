import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import RecipeTags from './RecipeTags'
import Card from 'react-bootstrap/Card'

const Recipe = () => {

  const recipe = useParams()
  const [details, setDetails] = useState([])
  const [tags, setTags] = useState([])
  let tagArray

  const fetchDetails = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.id}`)
      .then(res => res.json())
      .then(data => {
        setDetails(data.meals[0])
      })

  }

  useEffect(() => {
    fetchDetails()
  }, [])


  useEffect(() => {
    tagArray = (details.strTags)?.split(',')
    setTags(tagArray)
  }, [details])



  return (
    <section>
      <Container>
        <Card className='recipe-card p-5 my-5 bg-info'>
          <h1>{details.strMeal}</h1>
          <h2>{details.strCategory}</h2>
          <p>{details.strInstructions}</p>
          <img src={details.strMealThumb} alt="" />
          <div className='d-flex justify-content-center align-items-center gap-3 mt-4'>
            {tags?.map((item) => (
              <RecipeTags
                key={item}
                item={item} />
            ))}
          </div>
        </Card>
      </Container>
    </section>
  )
}

export default Recipe

