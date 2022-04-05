import React from 'react'
import { Link } from 'react-router-dom'

import st from './catalog.module.scss'

function Catalog( { closeCat, arr } ) {

    function renderChildren(arr) {
        const result = arr.map((item, index) => (
            <li className={st.menuItem} key={index}>
                <Link to={'category/' + item.slug} onClick={() => closeCat()}>
                    {item.name}
                </Link>
                {item.children && renderChildren(item.children)}
            </li>
        ))
        return <ul className={st.menuList + " " + st.menuSubList}>{result}</ul>
    }

  return (
    <div className={st.catalogMenu}>
        <div className="container">
            <ul className={st.menuFirstLevel + ' ' + st.menuList}>
                {
                    arr.map((item, index) => (
                        <li className={st.menuItem} key={index}>
                            <Link to={'category/' + item.slug} onClick={() => closeCat()}>
                                {item.name}
                            </Link>
                            {item.children && renderChildren(item.children)}
                        </li>)
                    )
                    
                }
            </ul>
            
        </div>
    </div>
  )
}

export default Catalog