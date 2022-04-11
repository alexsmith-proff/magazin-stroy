import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TakeProduct from '../components/TakeProduct';
import Warning from '../components/Warning';
import ProductBlockInCart from '../components/ProductBlockInCart';
import TotalBlock from '../components/TotalBlock';

import st from './cartpage.module.scss'

function CartPage() {
  const mas = [1,4,6,78,9,5,77]
  const user = useSelector(state => state.user.user)
  const products = useSelector(state => state.cart.itemsInCart)
  const [totalPrice, setTotalPrice] = useState(null)

  useEffect(() => {
    setTotalPrice(products.reduce((accumulator, currentValue) => accumulator + currentValue.price , 0))
  }, [products])
  console.log('CartPage');

  return (
    <div>
      <div className="container">
        <h1 className={st.cart}>Корзина</h1>
        {
          products.length == 0 ? 
          (
            <div className={st.cart__emptyTitle}>В корзине товаров нет</div>
          )
          :
          (
            <>
              <TakeProduct />
              <Warning>Оформите заказ от 2500 руб и получите бесплатную доставку</Warning>
              <div className={st.cart__container}>
                <ProductBlockInCart products={products} />
                <TotalBlock totalPrice={totalPrice}/>
              </div>
              

            </>
          )
        }



      {
        // Проверка на пустоту объекта
        Object.keys(user).length == 0 ? <div>Авторизируйтесь</div> : ''
      }
      </div>
    </div>
  )
}

export default CartPage