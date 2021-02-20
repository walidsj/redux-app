import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

function BannerComponent(props) {
   const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
   };

   return (
      <Slider className="carousel slide" {...settings}>
         {
            props.slides.map((slide, i) => (
               <Link key={i} to={slide.link}>
                  <div>
                     <img className="d-block w-100" src={slide.image} alt={slide.title} />
                  </div>
               </Link>
            ))
         }
      </Slider>
   )
}

export default BannerComponent