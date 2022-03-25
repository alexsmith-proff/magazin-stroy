import React, { useEffect, useState } from 'react'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick";

import st from './carousel.module.scss';

// import carouselImg1 from '../assets/img/carousel/1.jpg'
// import carouselImg2 from '../assets/img/carousel/2.jpg'
// import carouselImg3 from '../assets/img/carousel/3.jpg'
import allEndPoints from '../services/api/api';





function CarouselComp() {
    const [carouselData, setCarouselData] = useState([])

    useEffect(async() => {
        allEndPoints.carousel.getCarousel().then((response) => {
            console.log('carousel', response.data)
            setCarouselData(response.data)
        })
    }, [])

    var settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 7000, // Время между кадрами 7 сек
        speed: 3000, // Плавность перехода 3 сек
        autoplay: true,
        fade: true,
        centerPadding: '0px',
        touchThreshold: 1
        // accessibility: true,
        // adaptiveHeight: true,
      };

  return (
    <div>
        <Slider {...settings}>
            {
                carouselData.map((item, index) => 
                    <div className={st.item} key={index}>
                        <img src={item.picture} alt="photo"  />
                    </div>
                )
            }
        </Slider>
    </div>
  )
}

export default CarouselComp