import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import allEndPoints from '../services/api/api'
import axiosInstance from '../services/api/axios/axios'
import st from './categorypage.module.scss'

function CategoryPage() {

  let { slugUrl } = useParams()
  // const categoryArr = useSelector(state => state.category.catalog)

  // const[catalogArr, setCatalogArr] = useState([])
  const[products, setProducts] = useState([])

  useEffect(() => {
    setProducts([])
  }, [slugUrl])
  


  useEffect(async() => {
    const response = await allEndPoints.category.getCategory()
    console.log('FindId', FindId(slugUrl, response.data.categories));

    const products = await axiosInstance.get('/api/category/' + FindId(slugUrl, response.data.categories))
    console.log('useEffect', products);
    setProducts(products.data)
  }, [slugUrl])
  
  function FindId(slug, arr) {
    const resultArr = arr.filter((item) => item.slug == slug)
    return resultArr[0]._id
  }
  
  console.log('CategoryPage');

  return (
    <div>
      {/* CategoryPage */}
      {/* <h1>Slug:  {slugUrl}</h1> */}

      <div className="container">
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