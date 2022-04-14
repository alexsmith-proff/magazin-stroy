import React from 'react'
import { AiOutlineDelete } from "react-icons/ai"
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../redux/cart/cartSlice'
import ProductCounter from './ProductCounter'

import st from './productItemInCart.module.scss'

function ProductItemInCart({ item }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function handleClick() {
        navigate('/product/' + item._id)
    }
    function handleClickDelete() {
        dispatch(deleteItemFromCart(item._id))
    }
  return (
    <div>
        <li className={st.product__item}>
            <div className={st.product__itemLeft}>
                <img className={st.product__img} src={"http://localhost:3000/products/" + item.mainPicture} alt="photo product" onClick={handleClick}/>
                <div className={st.product__name} onClick={handleClick}>{item.name}</div>
            </div>
            <div className={st.product__itemRight}>
                <div className={st.product__counter}>
                    <ProductCounter product={item}/>
                </div>
                <div className={st.product__priceDelete}>
                    <div>
                        <div className={st.product__totalprice}>{item.price * item.count} р</div>
                        <div className={st.product__oneprice}>{item.price} р/шт</div>
                    </div>
                    <AiOutlineDelete
                        className={st.product__delete}
                        size={25}
                        onClick={handleClickDelete}
                    />
                </div>

                
            </div>
            
            
        </li>  
    </div>
  )
}

export default ProductItemInCart