import React from 'react'

import st from './products.module.scss'

function Products({ resultProducts }) {
  return (
    <div>
        <ul className={st.card__list}>
          {
          resultProducts.map((item, index) => (
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
  )
}

export default Products