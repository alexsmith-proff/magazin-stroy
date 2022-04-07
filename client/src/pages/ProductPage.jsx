import React, { useEffect, useState } from 'react'
import st from './productpage.module.scss'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router';
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
  const navigate = useNavigate()

  const [productItem, setProductItem] = useState({})
  const [breadCrumbsArr, setBreadCrumbsArr] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(async() => {
    
    try {
      window.scrollTo(0, 0)
      setIsLoading(true)
      if(allCategory.length == 0){
        const response = await allEndPoints.category.getCategory()
        allCategory = response.data.categories
      }
      const response = await allEndPoints.product.getProduct({ id })
      let findProduct = response.data
      setBreadCrumbsArr(breadCrumbs(findProduct.category, allCategory))
      setProductItem(findProduct)
      setIsLoading(false)
    } catch (error) {
      navigate('404')
    }    
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