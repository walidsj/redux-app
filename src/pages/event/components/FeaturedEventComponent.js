import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

function FeaturedEventComponent() {
   const settings = {
         dots: true,
         infinite: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: true
   };
   
   return (
      <Slider className="slick-custom slick-card-same-height" {...settings}>
         <Link to='/'>
            <div className="card card-slick-custom m-2">
               <div className="block-over-img">
                  <img className="card-img-top w-100" src="https://app.staner.id/assets/img/slides/slide02.png" />
               </div>
               <div className="card-body p-3">
                  <h6 className="card-title mb-0">Festival Keuangan Negara</h6>
                  <div className="card-author-katalog align-items-center mt-2">
                     <p className="card-text">
                        <span className="fs-14 font-400">Festival Keuangan Negara</span>
                     </p>
                  </div>
               </div>
            </div>
         </Link>
         <Link to='/'>
            <div className="card card-slick-custom m-2">
               <div className="block-over-img">
                  <img className="card-img-top w-100" src="https://app.staner.id/assets/img/slides/slide02.png" />
               </div>
               <div className="card-body p-3">
                  <h6 className="card-title mb-0">BigB Plan Competition</h6>
                  <div className="card-author-katalog align-items-center mt-2">
                     <p className="card-text">
                        <span className="fs-14 font-400">Ekraf BEM</span>
                     </p>
                  </div>
               </div>
            </div>
         </Link>
      </Slider>
   )
}

export default FeaturedEventComponent