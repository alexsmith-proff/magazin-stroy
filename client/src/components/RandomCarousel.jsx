import React, { useState, useEffect } from 'react'
import allEndPoints from '../services/api/api'

import st from './randomcarousel.module.scss';
import './randomcarousel.css';

import Slider from "react-slick";

function RandomCarousel() {
    const [carouselData, setCarouselData] = useState([])

    useEffect(async() => {
        allEndPoints.carousel.getRandomProductCarousel().then((response) => {
            setCarouselData(response.data)
        })
    }, [])

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplaySpeed: 5000, // Время между кадрами 5 сек
        speed: 1000, // Плавность перехода 1 сек
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,


        
      };

const style = {
    
}      

  return (
    <div >
        <div className="container">
            <div className={st.title}>
                <h2 className={st.title__text}>Сегодня покупают</h2>
            </div>
            <Slider className="random-slider" {...settings}>
                {
                    carouselData.map((item, index) => (
                        <div className={st.card__item} key={index}>
                            <div className={st.card__imgWrap}>
                                <img className={st.card__img} src={"http://localhost:3000/products/" + item.mainPicture} alt="photo product" />
                            </div>
                            <h3 className={st.card__title}>{item.name}</h3>
                            <div className={st.card__price}>{item.price} p</div>
                        </div>
                    ))
                }
                
            </Slider>   
        </div>       
    </div>
  )
}

export default RandomCarousel