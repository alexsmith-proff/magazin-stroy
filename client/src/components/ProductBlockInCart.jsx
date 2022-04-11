import React from 'react'
import ProductsInCart from '../components/ProductsInCart';

import st from './ProductBlockInCart.scss'

function ProductBlockInCart({ products }) {
  return (
    <div>
        <h2 className={st.productsTitle}>Товары</h2>
        <ProductsInCart products={products} />
    </div>
  )
}

export default ProductBlockInCart