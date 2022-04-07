import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCart, setItemInCart } from '../redux/cart/cartSlice'


import st from './productbuy.module.scss'

function ProductBuy({ product }) {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart) 
    // Определяем текущий элемент в корзине
    const isItemInCart = items.some(item => item._id === product._id)

    const handleClick = () => {
        if(isItemInCart) {
            dispatch(deleteItemFromCart(product._id))
        } else {
            dispatch(setItemInCart(product))
        }
    }
  return (
    <div className={st.wrap}>
        <button className={st.btn + ' ' + (isItemInCart ? st.dark : '') } onClick={handleClick}>
            {
                isItemInCart ? 'Убрать из корзины' : 'В корзину'
            }
        </button>
    </div>
  )
}

export default ProductBuy