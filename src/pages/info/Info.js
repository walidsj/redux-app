import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import FooterComponent from '../../components/FooterComponent'

export default class Info extends Component {
   render() {
      return (
         <Fragment>
            <Helmet>
               <title>Informasi - Staner.id</title>
            </Helmet>
            <div className="content-box content-other">
               <section className="content-blank bg-gray pb-2 pt-4">
                  <div className="container">
                     <div className="row">
                        <div className="col">
                           <h5 className="head-title px-2">Informasi</h5>
                           <div className="form-group px-2">
                              <input class="form-control" type="search" placeholder="Cari info atau pengumuman" />
                           </div>
                           <div className="row mb-3">
                              <div className="col">
                                 <Link to='/info'>
                                    <div className="card mx-2">
                                       <div className="card-body p-3">
                                          <span className="card-title mb-0">Pengumuman Daftar Mahasiswa PKL Instansi DJP Kementerian Keuangan</span>
                                          <div className="card-author-katalog align-items-center mt-2">
                                             <p className="card-text">
                                                <span className="fs-14 font-400 d-block">BAAK PKN STAN</span>
                                                <span className="fs-11">Senin, 8 Februari 2021</span>
                                             </p>
                                          </div>
                                       </div>
                                    </div>
                                 </Link>
                              </div>
                           </div>
                           <div className="row mb-3">
                              <div className="col">
                                 <Link to='/info'>
                                    <div className="card mx-2">
                                       <div className="card-body p-3">
                                          <span className="card-title mb-0">Perpanjangan Masa Jabatan Anggota BEM KM PKN STAN 2020</span>
                                          <div className="card-author-katalog align-items-center mt-2">
                                             <p className="card-text">
                                                <span className="fs-14 font-400 d-block">BEM KM PKN STAN</span>
                                                <span className="fs-11">Minggu, 31 Januari 2021</span>
                                             </p>
                                          </div>
                                       </div>
                                    </div>
                                 </Link>
                              </div>
                           </div>
                           <div className="row mb-3">
                              <div className="col">
                                 <Link to='/info'>
                                    <div className="card mx-2">
                                       <div className="card-body p-3">
                                          <span className="card-title mb-0">Launching Aplikasi Website Staner.id oleh BEM KM PKN STAN</span>
                                          <div className="card-author-katalog align-items-center mt-2">
                                             <p className="card-text">
                                                <span className="fs-14 font-400 d-block">BEM KM PKN STAN</span>
                                                <span className="fs-11">Selasa, 26 Januari 2021</span>
                                             </p>
                                          </div>
                                       </div>
                                    </div>
                                 </Link>
                              </div>
                           </div>
                           <div className="row mb-3">
                              <div className="col">
                                 <Link to='/info'>
                                    <div className="card mx-2">
                                       <div className="card-body p-3">
                                          <span className="card-title mb-0">Pengumuman Teknis UAS Ganjil 2021</span>
                                          <div className="card-author-katalog align-items-center mt-2">
                                             <p className="card-text">
                                                <span className="fs-14 font-400 d-block">Tim Ujian</span>
                                                <span className="fs-11">Jumat, 8 Januari 2021</span>
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
