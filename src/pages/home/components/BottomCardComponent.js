import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BottomCardComponent extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-6 mb-3 px-2">
                  <Link to='/layanan-persuratan'>
                     <div className="card">
                        <div className="card-body">
                           <div className="d-flex flex-wrap text-center">
                              <img className="mx-auto mb-2" src="https://app.staner.id/public/img/doodle/SprintingDoodle.svg" height="76" alt="Layanan Persuratan"/>
                              <div className="mx-auto">
                                 <p className="text-default mb-0">Layanan Persuratan</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Link>
               </div>
               <div className="col-6 mb-3 px-2">
                  <Link to='/layanan-advokasi'>
                     <div className="card">
                        <div className="card-body">
                           <div className="d-flex flex-wrap text-center">
                              <img className="mx-auto mb-2" src="https://app.staner.id/public/img/doodle/LovingDoodle.svg" height="76" alt="Layanan Advokasi"/>
                              <div className="mx-auto">
                                 <p className="text-default mb-0">Layanan Advokasi</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Link>
               </div>
               <div className="col-6 mb-3 px-2">
                  <Link to='/akses-perizinan'>
                     <div className="card">
                        <div className="card-body">
                           <div className="d-flex flex-wrap text-center">
                              <img className="mx-auto mb-2" src="https://app.staner.id/public/img/doodle/SitReadingDoodle.svg" height="76" alt="Akses Perizinan" />
                              <div className="mx-auto">
                                 <p className="text-default mb-0">Akses Perizinan</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Link>
               </div>
               <div className="col-6 mb-3 px-2">
                  <Link to='/wbs-pengaduan'>
                     <div className="card">
                        <div className="card-body">
                           <div className="d-flex flex-wrap text-center">
                              <img className="mx-auto mb-2" src="https://app.staner.id/public/img/doodle/CoffeeDoodle.svg" height="76" alt="Portal Pengaduan" />
                              <div className="mx-auto">
                                 <p className="text-default mb-0">Portal Pengaduan</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Link>
               </div>
            </div>
         </div>
      )
   }
}
