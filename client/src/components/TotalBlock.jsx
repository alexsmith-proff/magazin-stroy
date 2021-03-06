import React from 'react'
import st from './totalBlock.module.scss'

function TotalBlock({ productPrice, deliveryPrice, totalPrice }) {
  return (
    <div className={st.total}>
        <div className={st.total__block}>
            <div className={st.total__title}>Итого:</div>
            <div className={st.total__price}>{totalPrice} р</div>
        </div>  
        <div className={st.total__block}>
            <div className={st.total__title + ' ' + st.small}>Товары:</div>
            <div className={st.total__price + ' ' + st.small}>{productPrice} р</div>
        </div>      
        <div className={st.total__block}>
            <div className={st.total__title + ' ' + st.small}>Доставка:</div>
            <div className={st.total__price + ' ' + st.small}>{deliveryPrice} р</div>
        </div>      
        <div className={st.total__btn}>Оформить заказ</div>
        <div className={st.total__text}>Дата и стоимость доставки определяются при оформлении заказа</div>
    </div>
  )
}

export default TotalBlock