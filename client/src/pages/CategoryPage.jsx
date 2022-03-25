import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import allEndPoints from '../services/api/api'
import axiosInstance from '../services/api/axios/axios'

function CategoryPage() {

  let { slugUrl } = useParams()
  // const categoryArr = useSelector(state => state.category.catalog)

  // const[catalogArr, setCatalogArr] = useState([])
  const[catalogId, setCatalogId] = useState('')
  const[products, setProducts] = useState([])
  


  useEffect(async() => {
    const response = await allEndPoints.category.getCategory()
    const products = await axiosInstance.get('/api/category/' + FindId(slugUrl, response.data.categories))
    console.log('useEffect', products.data);
    setProducts(products.data)
  }, [slugUrl])
  
  function FindId(slug, arr) {
    const resultArr = arr.filter((item) => item.slug == slug)
    return resultArr[0]._id
  }
  
  console.log('CategoryPage');

  return (
    <div>
      CategoryPage

      <h1>Slug:  {slugUrl}</h1>

      {
        products.map((item, index) => (
          <div key={index}>
            <h2>Имя: {item.name}</h2>
            <p>Описание {item.description}</p>
            <img src={"http://localhost:3000/products/" + item.mainPicture} alt="photo product" />
            {process.env.PUBLIC_URL}
          </div>)
        ) 
      }
      
    </div>
  )
}

export default CategoryPage