import React from 'react'
import { useSelector } from 'react-redux'

function CartPage() {
  const user = useSelector(state => state.user.user)
  console.log(user);
  return (
    <div>
      CartPage
      {
        // Проверка на пустоту объекта
        Object.keys(user).length == 0 ? <div>Авторизируйтесь</div> : ''
      }
    </div>
  )
}

export default CartPage