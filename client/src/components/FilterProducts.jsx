import React, { useEffect, useState } from 'react'
import st from './filterproducts.module.scss'

function FilterProducts({products, setResultProducts}) {
    const filterListArr = [ /*'Рекомендуем',*/ 'Цена по возрастанию', 'Цена по убыванию' ]
    const [filterItem, setFilterItem] = useState(0)
    

    useEffect(() => {
        let filteredProducts = [...products]

        switch(filterItem){
            case 0:
                filteredProducts.sort((a, b) => a.price > b.price ? 1 : -1)
                setResultProducts(filteredProducts)
                break
             // Сортировка по убыванию    
            case 1:
                filteredProducts.sort((b, a) => a.price > b.price ? 1 : -1)
                setResultProducts(filteredProducts)
                break
        } 
    }, [products, filterItem])

    function handleClickFilterList(index) {
        setFilterItem(index)
    }

  return (
    <div className={st.sorting}>
        <div className={st.sorting__title}>Сортировка по:</div>
        {
            filterListArr.map((item, index) => (
                <div
                className={st.item + ' ' + (filterItem === index ? st.active : '')  }
                key={index}
                onClick={() => handleClickFilterList(index)}
                >
                    {item}
                </div>
            ))
        }
       
    </div>
  )
}

export default FilterProducts