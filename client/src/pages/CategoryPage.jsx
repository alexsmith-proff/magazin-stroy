import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import BreadCrumbs from '../components/BreadCrumbs'
import allEndPoints from '../services/api/api'
import axiosInstance from '../services/api/axios/axios'
import st from './categorypage.module.scss'
import { breadCrumbs, FindIdBySlug } from '../services/category/category.service'

function CategoryPage() {

  let { slugUrl } = useParams()
  const [breadCrumbsArr, setBreadCrumbsArr] = useState([])
  const[products, setProducts] = useState([])

  let allCategory = useSelector(state => state.category.catalog) 

  useEffect(() => {
    setProducts([])
  }, [slugUrl])
  
  useEffect(async() => {
    if(allCategory.length == 0){
      const response = await allEndPoints.category.getCategory()
      allCategory = response.data.categories
    }

    let categoryId = FindIdBySlug(slugUrl, allCategory)

    // console.log('FindId', FindId(slugUrl, allCategory));

    const products = await axiosInstance.get('/api/category/' + categoryId)
    // console.log('useEffect', products);

    setBreadCrumbsArr(breadCrumbs(categoryId, allCategory))
    setProducts(products.data)
  }, [slugUrl])
  
  
  
  // console.log('CategoryPage');

  return (
    <div>
      <div className="container">
        {/* <BreadCrumbs allCatalog={allCategory} slug={slugUrl}/>         */}
        <BreadCrumbs breadCrumbsArr={breadCrumbsArr}/>        
        <ul className={st.card__list}>
          {
          products.map((item, index) => (
            <li className={st.card__item} key={index}>
              <div className={st.card__imgWrap}>
                <img className={st.card__img} src={"http://localhost:3000/products/" + item.mainPicture} alt="photo product" />
              </div>
              <h3 className={st.card__title}>{item.name}</h3>
              <div className={st.card__price}>{item.price} p</div>
              <div className={st.card__btnWrap}>
                <button className={st.card__btn}>В корзину</button>
              </div>  
            </li>
          ))
          }
          </ul>
      </div>
    </div>
  )
}

export default CategoryPage