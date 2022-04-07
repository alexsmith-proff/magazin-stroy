import React from 'react'
import ProductItem from './ProductItem'

import st from './products.module.scss'

function Products({ resultProducts }) {
 
  return (
    <div>
        <ul className={st.card__list}>
          {
          resultProducts.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))
          }
        </ul>
    </div>
  )
}

export default Products