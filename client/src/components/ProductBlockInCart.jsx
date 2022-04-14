import React from 'react'
import ProductsInCart from './ProductsInCart';

import st from './ProductBlockInCart.module.scss'

function ProductBlockInCart({ products }) {
  return (
    <div className={st.productBlockInCart}>
        <h2 className={st.productsTitle}>Товары</h2>
        <ProductsInCart products={products} />
    </div>
  )
}

export default ProductBlockInCart