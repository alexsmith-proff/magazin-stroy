import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import st from './skeletonproduct.module.scss'

function SkeletonProduct() {
    return (
        <div>
            <div className={st.productpage__main}>
                <div className={st.productpage__mainphoto}>
                    <Skeleton circle={true} width={300} height={300} />
                </div>    
                <div className={st.productpage__maininfo}>
                    <Skeleton className={st.maininfo__name} width={400} height={40}/>
                    <div className={st.maininfo__rating}>
                        <Skeleton width={250} height={30}/>
                    </div>
                    <Skeleton className={st.maininfo__price} width={120} height={40}/>
                    <Skeleton width={200} height={50}/>
                    <Skeleton className={st.maininfo__availability} width={100}/>
                    <ul className={st.maininfo__delivery}>
                        <li className={st.maininfo__deliveryitem}>
                            <Skeleton width={400} height={30}/>
                        </li>
                        <li className={st.maininfo__deliveryitem}>
                            <Skeleton width={400} height={30}/>
                        </li>
                    </ul>
                    <div className={st.maininfo__deliverycost}>
                        <Skeleton width={400} height={30}/>
                    </div>
                </div>     
            </div> 
            <div className={st.productpage__additionalinfo}>
                <Skeleton className={st.additionalinfo__title} width={200} height={30}/>
                <Skeleton width="100%" height={100}/>
            </div>      
        </div>           
    )
}

export default SkeletonProduct