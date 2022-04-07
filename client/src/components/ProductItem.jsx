import React from 'react'
import { useNavigate } from 'react-router';
import ProductBuy from './ProductBuy';


import st from './productitem.module.scss'

function ProductItem({ item }) {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/product/' + item._id)
      }
  return (
    <div>
        <li className={st.card__item}>
            <div className={st.card__itemwrap} onClick={handleClick}>
                <div className={st.card__imgWrap}>
                    <img className={st.card__img} src={"http://localhost:3000/products/" + item.mainPicture} alt="photo product" />
                </div>
                <h3 className={st.card__title}>{item.name}</h3>
                <div className={st.card__price}>{item.price} p</div>
            </div>
            <ProductBuy product={item}/>
        </li>
    </div>
  )
}

export default ProductItem