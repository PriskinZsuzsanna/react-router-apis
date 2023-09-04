import React from 'react'
import { Button } from 'react-bootstrap'

const RecipeTags = ({item}) => {

  return (
    <div >
      <Button className='btn btn-dark text-info'>{item}</Button>
    </div>
  )
}
export default RecipeTags
