import React from 'react'
import { Button } from 'react-bootstrap'

const RecipeTags = ({item}) => {

  return (
    <Button className='btn btn-info'>{item}</Button>
  )
}
export default RecipeTags
