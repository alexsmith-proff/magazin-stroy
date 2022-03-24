import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

function CategoryPage() {

  const cat = useSelector(state => state.category.catalog)
  // const userdata = useSelector(state => state.user.user)

  let { slugUrl } = useParams()
  return (
    <div>
      CategoryPage
      <h1>Slug:  {slugUrl}</h1>
    </div>
  )
}

export default CategoryPage