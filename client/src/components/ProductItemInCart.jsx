import React from 'react'
import { AiOutlineDelete } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../redux/cart/cartSlice'

import st from './productItemInCart.module.scss'

function ProductItemInCart({ item }) {
    const dispatch = useDispatch()
    function handleClick() {
        dispatch(deleteItemFromCart(item._id))
    }
  return (
    <div>
        <li className={st.product__item}>
            <img className={st.product__img} src={"http://localhost:3000/products/" + item.mainPicture} alt="photo product" />
            <div className={st.product__name}>{item.name}</div>
            {/* <ProductCounter /> */}
            <div className={st.product__price}>{item.price} р</div>
            <AiOutlineDelete
                className={st.product__delete}
                size={25}
                onClick={handleClick}
            />
        </li>  
    </div>
  )
}

export default ProductItemInCart