import React from 'react'
import { Link } from 'react-router-dom'

import st from './catalog.module.scss'

function Catalog(props) {
    // const categorydata = useSelector(state => state.category.catalog) 
    console.log(props);

    function renderChildren(arr) {
        // console.log(arr)
        const result = arr.map((item, index) => (
            <li className={st.menuItem} key={index}>
                <Link to={'category/' + item.slug} onClick={props.CloseCat}>
                    {item.name}
                </Link>
                {item.children && renderChildren(item.children)}
            </li>
        ))
        return <ul className={st.subMenu}>{result}</ul>
    }

  return (
    <div className={st.catalogMenu}>
        <div className="container">
            <ul className={st.menu}>
                {
                    props.arr.map((item, index) => (
                        <li className={st.menuItem} key={index}>
                            <Link to={'category/' + item.slug} onClick={() => props.closeCat()}>
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