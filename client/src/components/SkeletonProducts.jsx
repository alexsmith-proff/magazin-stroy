import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import st from './skeletonproducts.module.scss'

function SkeletonProducts() {
  return (
    <div>
        <ul className={st.card__list}>
          {
          Array(20).fill().map((item, index) => (
            <li className={st.card__item} key={index}>
              <div className={st.card__imgWrap}>
                <Skeleton circle={true} width={120} height={120} />
              </div>
              <h3 className={st.card__title}><Skeleton count={2}/></h3>
              <div className={st.card__price}><Skeleton width={100}/></div>
              <div className={st.card__btnWrap}>
                <Skeleton width={150} height={40}/>
              </div>  
            </li>
          ))
          }
        </ul>
    </div>
  )
}

export default SkeletonProducts