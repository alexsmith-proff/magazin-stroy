import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import cartImg from '../assets/img/cart.png'

import st from './carticon.module.scss'

function CartIcon() {
    const cartProducts = useSelector(state => state.cart.itemsInCart)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/cart')
    }

    console.log('CartIcon');

  return (
    <div className={st.cart} onClick={handleClick}>
        <img src={cartImg} alt="cart" />
        {
            cartProducts.length >= 1 ? <div className={st.cart__countproducts}>{cartProducts.length}</div> : ''
        }
    </div>
  )
}

export default CartIcon