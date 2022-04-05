import React, { useEffect, useState } from 'react'
import st from './productpage.module.scss'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import axiosInstance from '../services/api/axios/axios'
import allEndPoints from '../services/api/api'

import { breadCrumbs } from '../services/category/category.service'
import Product from '../components/Product'
import BreadCrumbs from '../components/BreadCrumbs'
import RandomCarousel from '../components/RandomCarousel'
import SkeletonProduct from '../components/SkeletonProduct'

function ProductPage() {
  let allCategory = useSelector(state => state.category.catalog) 
  let { id } = useParams()

  const [productItem, setProductItem] = useState({})
  const [breadCrumbsArr, setBreadCrumbsArr] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(async() => {
    window.scrollTo(0, 0)
    setIsLoading(true)
    if(allCategory.length == 0){
      const response = await allEndPoints.category.getCategory()
      allCategory = response.data.categories
    }
    let findProduct = await axiosInstance.get('/api/product/' + id)
    setBreadCrumbsArr(breadCrumbs(findProduct.data.category, allCategory))
    setProductItem(findProduct.data)
    setIsLoading(false)
  }, [id])

  return (
      <div className={st.productpage}>
          <div className="container">
            <BreadCrumbs breadCrumbsArr={breadCrumbsArr}/>  
            {
              isLoading && <SkeletonProduct />
            }
            {
              !isLoading && <Product productItem={productItem} />
            }
            <RandomCarousel />            
          </div>
      </div>    
      
  )
}

export default ProductPage