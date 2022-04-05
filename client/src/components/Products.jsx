import React from 'react'
import { Link } from 'react-router-dom'

import st from './products.module.scss'

function Products({ resultProducts }) {
  function handleClickButton() {
    console.log('В корзину')
  }
  return (
    <div>
        <ul className={st.card__list}>
          {
          resultProducts.map((item, index) => (
            <li className={st.card__item} key={index}>
              
                <div className={st.card__imgWrap}>
                  <Link to={'/product/' + item._id}>
                    <img className={st.card__img} src={"http://localhost:3000/products/" + item.mainPicture} alt="photo product" />
                  </Link>  

                </div>
                <Link to={'/product/' + item._id}>
                  <h3 className={st.card__title}>{item.name}</h3>
                </Link>
                <div className={st.card__price}>{item.price} p</div>
                <div className={st.card__btnWrap}>
                  <button className={st.card__btn} onClick={handleClickButton}>В корзину</button>
                </div>  
             
            </li>
          ))
          }
        </ul>
    </div>
  )
}

export default Products