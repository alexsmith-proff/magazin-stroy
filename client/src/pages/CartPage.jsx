import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TakeProduct from '../components/TakeProduct';
import Warning from '../components/Warning';
import ProductBlockInCart from '../components/ProductBlockInCart';
import TotalBlock from '../components/TotalBlock';

import st from './cartpage.module.scss'
import RandomCarousel from '../components/RandomCarousel';

function CartPage() {
  const user = useSelector(state => state.user.user)
  const products = useSelector(state => state.cart.itemsInCart)
  const [productPrice, setProductPrice] = useState(null)
  const [deliveryPrice, setDeliveryPrice] = useState(null)
  const [totalPrice, setTotalPrice] = useState(null)

  useEffect(() => {
    const price = products.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.count , 0)

    if (price < 2500) {
      setTotalPrice(price + 800)
      setDeliveryPrice(800)
    }else {
      setTotalPrice(price)
      setDeliveryPrice(0)
    }
    setProductPrice(price)
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
                <TotalBlock productPrice={productPrice} deliveryPrice={deliveryPrice} totalPrice={totalPrice}/>
              </div>
            </>
          )
        }
        <RandomCarousel />



      {
        // Проверка на пустоту объекта
        // Object.keys(user).length == 0 ? <div>Авторизируйтесь</div> : ''
      }
      </div>
    </div>
  )
}

export default CartPage