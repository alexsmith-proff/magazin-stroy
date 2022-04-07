import React from 'react'
import st from './product.module.scss'

function Product({productItem}) {
    function getDayDelivery(deltaDay) {
        const fMonth = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря']
        let now = new Date()
        return now.getDate() + deltaDay + ' ' + fMonth[now.getMonth()]  
    }
    console.log('getDayDelivery', getDayDelivery(0));


    return (
        <div>
            <div className={st.productpage__main}>
                <div className={st.productpage__mainphoto}>
                    <img className={st.productpage__img} src={"http://localhost:3000/products/" + productItem.mainPicture} alt="product-img" />
                </div>    
                <div className={st.productpage__maininfo}>
                    <h2 className={st.maininfo__name}>{productItem.name}</h2>
                    <div className={st.maininfo__rating}>
                        <ul className={st.rating__stars}>
                            <li>
                                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 14 18"><path d="M7 12.252L11.326 15l-1.148-5.18L14 6.335l-5.033-.45L7 1 5.033 5.885 0 6.335 3.822 9.82 2.674 15z" fill="#F4BE55" fill-rule="nonzero"></path></svg>
                            </li>
                            <li>
                                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 14 18"><path d="M7 12.252L11.326 15l-1.148-5.18L14 6.335l-5.033-.45L7 1 5.033 5.885 0 6.335 3.822 9.82 2.674 15z" fill="#F4BE55" fill-rule="nonzero"></path></svg>
                            </li>
                            <li>
                                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 14 18"><path d="M7 12.252L11.326 15l-1.148-5.18L14 6.335l-5.033-.45L7 1 5.033 5.885 0 6.335 3.822 9.82 2.674 15z" fill="#F4BE55" fill-rule="nonzero"></path></svg>
                            </li>
                            <li>
                                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 14 18"><path d="M7 12.252L11.326 15l-1.148-5.18L14 6.335l-5.033-.45L7 1 5.033 5.885 0 6.335 3.822 9.82 2.674 15z" fill="#F4BE55" fill-rule="nonzero"></path></svg>
                            </li>
                            <li>
                                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 14 18"><path d="M8.967 5.878L7 1 5.033 5.885 0 6.335 3.822 9.82 2.674 15 7 12.252 11.326 15l-1.141-5.18L14 6.335l-5.033-.457zM7 4.02l1.197 2.977 3.066.28L8.939 9.4l.7 3.154L7 10.874V4.02z" fill="#F4BE55" fill-rule="nonzero"></path></svg>
                            </li>
                        </ul>
                        <div className={st.rating__reviews}>15 отзывов</div>
                    </div>
                    <div className={st.maininfo__price}>{productItem.price} р</div>
                    <button className={st.maininfo__btn}>В корзину</button>
                    <div className={st.maininfo__availability}>В наличии: {productItem.quantityInStock} шт</div>
                    <ul className={st.maininfo__delivery}>
                        <li className={st.maininfo__deliveryitem}>
                            <div className={st.deliveryitem__left}>
                                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 18"><path fill="#333" fill-rule="nonzero" d="M12.667 4.278h-1.334v-.274a2.002 2.002 0 0 0-2-2.004H2C.895 2 0 2.897 0 4.004v10.02c0 1.107.895 2.005 2 2.005h.093A2.668 2.668 0 0 0 4.667 18a2.668 2.668 0 0 0 2.573-1.971h1.52A2.668 2.668 0 0 0 11.333 18a2.668 2.668 0 0 0 2.574-1.971H14c1.105 0 2-.898 2-2.004V7.618a3.337 3.337 0 0 0-3.333-3.34zm0 1.336c1.104 0 2 .897 2 2.004v2.398h-3.334V5.614h1.334zM1.333 4.004c0-.369.299-.668.667-.668h7.333c.369 0 .667.3.667.668v6.012H1.333V4.004zm3.334 12.693a1.335 1.335 0 0 1-1.334-1.336 1.335 1.335 0 0 1 2.667 0c0 .737-.597 1.336-1.333 1.336zm6.666 0A1.335 1.335 0 0 1 10 15.36c0-.738.597-1.336 1.333-1.336.737 0 1.334.598 1.334 1.336 0 .737-.597 1.336-1.334 1.336zm3.334-2.672a.667.667 0 0 1-.667.668h-.093a2.668 2.668 0 0 0-2.574-1.972 2.668 2.668 0 0 0-2.573 1.972H7.24a2.668 2.668 0 0 0-2.573-1.972 2.668 2.668 0 0 0-2.574 1.972H2a.667.667 0 0 1-.667-.668v-2.673h13.334v2.673z"></path></svg>
                                <div className={st.deliveryitem__text}>Доставим {getDayDelivery(1)}</div>
                            </div>
                            <div className={st.deliveryitem__right}>от 450 р</div>
                        </li>
                        <li className={st.maininfo__deliveryitem}>
                            <div className={st.deliveryitem__left}>
                                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 18"><path fill="#333" fill-rule="nonzero" d="M14.99 14.532l-.856-7.495c-.06-1.121-.961-1.925-2.104-1.925h-.298C11.699 2.84 10.039 1 8.007 1c-2.04 0-3.706 1.84-3.739 4.112H3.97c-1.143 0-2.044.816-2.104 1.938l-.856 7.528c-.008.06-.01.065-.01.124C1 15.84 1.844 17 3.103 17h9.794C14.157 17 15 15.827 15 14.692c0-.062-.002-.098-.01-.16zM8.007 2.55c1.21 0 2.199 1.142 2.23 2.56H5.763c.032-1.418 1.026-2.56 2.245-2.56zm4.89 12.898H3.103c-.336 0-.61-.408-.61-.757l.864-7.546c0-.352.274-.484.613-.484h.296v.517a.76.76 0 0 0 .747.776.76.76 0 0 0 .747-.776v-.517h4.48v.517a.76.76 0 0 0 .747.776.76.76 0 0 0 .747-.776v-.517h.296c.339 0 .613.155.613.507l.863 7.544c0 .351-.273.736-.61.736z"></path></svg>
                                <div className={st.deliveryitem__text}>Самовывоз в магазине {getDayDelivery(0)}</div>
                            </div>
                            <div className={st.deliveryitem__right}>бесплатно</div>
                        </li>
                    </ul>
                    <a href="#" className={st.maininfo__deliverycost}>
                        <svg xmlns="https://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 15.333A7.333 7.333 0 118 .667a7.333 7.333 0 010 14.666z" fill="#464C5C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.058 8.667H4.667V7.333h4.39L7.53 5.805l.943-.943L11.61 8l-3.138 3.138-.943-.943 1.529-1.528z" fill="#fff"></path></svg>
                        <span className={st.deliverycost__text}>Рассчитать стоимость доставки</span>
                    </a>
                </div>     
            </div> 
            <div className={st.productpage__additionalinfo}>
                <div className={st.additionalinfo__title}>Описание</div>
                <div className={st.additionalinfo__text}>{productItem.description}</div>
            </div>      
        </div>           
    )
}

export default Product