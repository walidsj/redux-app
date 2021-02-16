import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import FooterComponent from '../../components/FooterComponent'
import EventBannerComponent from './components/EventBannerComponent'
import FeaturedEventComponent from './components/FeaturedEventComponent'

export default class Acara extends Component {
   render() {
      return (
         <Fragment>
            <Helmet>
               <title>Acara - Staner.id</title>
            </Helmet>
            <div className="content-box content-other">
               <header id="headerSection" className="home-section">
                  <EventBannerComponent />
               </header>
               <section className="content-blank bg-gray pb-2 pt-4" style={{marginTop: '-10px'}}>
                  <div className="container">
                     <div className="row">
                        <div className="col">
                           <div className="form-group px-2">
                              <input className="form-control" type="search" placeholder="Cari acara, webinar, dan kegiatan lainnya" />
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col">
                           <h5 className="head-title px-2">Acara Unggulan</h5>
                           <FeaturedEventComponent />
                        </div>
                     </div>
                     <div className="row mt-5">
                        <div className="col">
                           <h5 className="head-title pb-2 px-2">Acara Lainnya</h5>
                           <div className="row mb-3">
                              <div className="col">
                                 <Link to='/acara'>
                                    <div className="card mx-2">
                                       <div class="block-over-img">
                                          <img class="card-img-top w-100" src="https://app.staner.id/assets/img/slides/slide02.png" />
                                       </div>
                                       <div class="card-body p-3">
                                          <h6 class="card-title mb-0">Festival Keuangan Negara</h6>
                                          <div class="card-author-katalog align-items-center mt-2">
                                             <p class="card-text">
                                                <span class="fs-14 font-400">Festival Keuangan Negara</span>
                                             </p>
                                          </div>
                                       </div>
                                    </div>
                                 </Link>
                              </div>
                           </div>
                           <div className="row mb-3">
                              <div className="col">
                                 <Link to='/acara'>
                                    <div className="card mx-2">
                                       <div class="block-over-img">
                                          <img class="card-img-top w-100" src="https://app.staner.id/assets/img/slides/slide02.png" />
                                       </div>
                                       <div class="card-body p-3">
                                          <h6 class="card-title mb-0">Olimpiade APBN 2020</h6>
                                          <div class="card-author-katalog align-items-center mt-2">
                                             <p class="card-text">
                                                <span class="fs-14 font-400">Kementerian Keuangan</span>
                                             </p>
                                          </div>
                                       </div>
                                    </div>
                                 </Link>
                              </div>
                           </div>
                           
                        </div>
                     </div>
                  </div>
               </section>
            </div>
            <FooterComponent />
         </Fragment>
      )
   }
}
