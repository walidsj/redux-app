import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

export default class EventBannerComponent extends Component {
   render() {
      const settings = {
         dots: false,
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 5000
      };
      
      return (
         <Fragment>
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
         </Fragment>
      )
   }
}
