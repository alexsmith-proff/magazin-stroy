import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import BreadCrumbs from '../components/BreadCrumbs'
import allEndPoints from '../services/api/api'
import axiosInstance from '../services/api/axios/axios'
import st from './categorypage.module.scss'

import { breadCrumbs, FindIdBySlug } from '../services/category/category.service'
import FilterProducts from '../components/FilterProducts'
import RandomCarousel from '../components/RandomCarousel'
import Products from '../components/Products'
import SkeletonProducts from '../components/SkeletonProducts'

function CategoryPage() {

  let { slugUrl } = useParams()
  const [breadCrumbsArr, setBreadCrumbsArr] = useState([])
  const [products, setProducts] = useState([])
  const [resultProducts, setResultProducts] = useState([])
  const [isLoadingProducts, setIsLoadingProducts] = useState(true)

  let allCategory = useSelector(state => state.category.catalog) 
  
  useEffect(async() => {
    window.scrollTo(0, 0)
    setIsLoadingProducts(true)
    if(allCategory.length == 0){
      const response = await allEndPoints.category.getCategory()
      allCategory = response.data.categories
    }

    let categoryId = FindIdBySlug(slugUrl, allCategory)

    const products = await axiosInstance.get('/api/category/' + categoryId)

    setBreadCrumbsArr(breadCrumbs(categoryId, allCategory))
    setProducts(products.data)
    setIsLoadingProducts(false)
  }, [slugUrl])

  return (
    <div>
      <div className="container">
        <div className={st.topBlock}>
          <BreadCrumbs breadCrumbsArr={breadCrumbsArr}/> 
          <FilterProducts products={products} setResultProducts={setResultProducts}/>
        </div>
        {
          isLoadingProducts && <SkeletonProducts />
        }
        {
          !isLoadingProducts && <Products resultProducts={resultProducts} />
        }        
        <RandomCarousel />
      </div>
    </div>
  )
}

export default CategoryPage