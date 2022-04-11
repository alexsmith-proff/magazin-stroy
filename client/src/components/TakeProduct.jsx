import React, { useState } from 'react'
import st from './takeproduct.module.scss'

function TakeProduct() {
    const takeProductArray = [
        {
            title: 'Самовывоз',
            desc : 'Заберите заказ из магазина или из пункта самовывоза'
        },
        {
            title: 'Доставка',
            desc : 'Служба доставки привезет Вам заказ '
        }
    ]
    const [activeItem, setActiveItem] = useState(1)

    function handleChange(ind) {
        setActiveItem(ind)
    }
  return (
    <div>
        <div className={st.list}>
        {
            takeProductArray.map((item, index) => 
            (
                <div className={st.item + ' ' + (activeItem == index + 1 ? st.active : '')} onClick={() => handleChange(index + 1)} key={index}>
                    <input className={st.radio} 
                        type="radio"
                        name="radio"
                        value={index + 1}
                        checked={activeItem == index + 1 ? true : false}
                    />
                    <div>
                        <h3 className={st.title}>{item.title}</h3>
                        <div className={st.desc}>{item.desc}</div>
                    </div>

                </div>
            ))
        }
        </div>
    </div>
  )
}

export default TakeProduct