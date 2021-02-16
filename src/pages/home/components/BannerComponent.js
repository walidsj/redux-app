import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

function BannerComponent() {
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
         <Link to='/'>
            <div>
               <img className="d-block w-100" src="https://app.staner.id/public/img/flyer/banner-welcome.webp" alt="Staner.id"/>
            </div>
         </Link>
         <Link to='/'>
            <div>
               <img className="d-block w-100" src="https://app.staner.id/public/img/flyer/banner-welcome.webp" alt="Staner.id"/>
            </div>
         </Link>
      </Slider>
   )
}

export default BannerComponent