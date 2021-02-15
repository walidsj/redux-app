import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

export default class NewEventComponent extends Component {
   render() {
      const settings = {
         dots: true,
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: true
      };

      return (
         <Fragment>
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
               <Link to='/acara'>
                  <div class="m-5 btn btn-outline-primary d-flex justify-content-center">Lihat Acara Lainnya</div>
               </Link>
            </Slider>
         </Fragment>
      )
   }
}
