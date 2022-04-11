import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCountItem } from '../redux/cart/cartSlice'

import st from './ProductCounter.module.scss'

function ProductCounter({ product }) {
    const dispatch = useDispatch()
    // const countProd = useSelector(state => state.cart.itemsInCart)
    // console.log('countProd', product);
    const[count, setCount] = useState(product.count)
    function handleClickInc() {
        if (count < 999) {
            setCount(Number(count) + 1)
            dispatch(setCountItem({...product, count: count + 1}))
        }
    }
    function handleClickDec() {
        if (count > 1) {
            setCount(Number(count) - 1)
            dispatch(setCountItem({...product, count: count - 1}))
        }
    }
    function handleChange(e) {
        setCount(prev => /\d+/.test(Number(e.target.value)) ? e.target.value : prev);
        // setCount(e.target.value)
    }
    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            dispatch(setCountItem({...product, count: e.target.value}))
        }        
    }
  return (
    <div className={st.counter}>
        <button className={st.counter__btn} onClick={handleClickDec}>-</button>
        <input className={st.counter__input} type="text" value={count} onChange={handleChange} onKeyPress={handleKeyPress} />
        <button className={st.counter__btn} onClick={handleClickInc}>+</button>
    </div>
  )
}

export default ProductCounter