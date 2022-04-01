import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/img/arrow.svg'
import st from './breadcrumbs.module.scss'

function BreadCrumbs({ breadCrumbsArr }) {
  return (
    <div className={st.breadcrumbs}>
      <ul className={st.breadcrumbs__list}>
        {
          breadCrumbsArr.map((item, index) => (
            <li className={st.breadcrumbs__item} key={index}>
              <Link to={'/category/' + item.slug}>
                {item.name}
              </Link>
              <img className={st.breadcrumbs__img} src={arrow}/>
            </li>
            ))
        }
      </ul>
    </div>
  )
}

export default BreadCrumbs