import React from 'react'
import ProductItemInCart from './ProductItemInCart'

import st from './productsInCart.module.scss'

function ProductsInCart({ products }) {
  return (
    <div className={st.product}>
        <ul className={st.product__list}>
            {
                products.map((item, index) => (
                    <ProductItemInCart key={index} item={item} /> 
                ))
            }
        </ul>
    </div>
  )
}

export default ProductsInCart