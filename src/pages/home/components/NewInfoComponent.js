import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

function NewInfoComponent() {
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
               <div className="card-body p-3">
                  <h6 className="card-title mb-0">Pengumuman Daftar Mahasiswa PKL Instansi DJP Kementerian Keuangan</h6>
                  <div className="card-author-katalog align-items-center mt-2">
                     <p className="card-text">
                        <span className="fs-11">Senin, 8 Februari 2021</span>
                     </p>
                  </div>
               </div>
            </div>
         </Link>
         <Link to='/'>
            <div className="card card-slick-custom m-2">
               <div className="card-body p-3">
                  <h6 className="card-title mb-0">Perpanjangan Masa Jabatan Anggota BEM KM PKN STAN 2020</h6>
                  <div className="card-author-katalog align-items-center mt-2">
                     <p className="card-text">
                        <span className="fs-12">Minggu, 31 Januari 2021</span>
                     </p>
                  </div>
               </div>
            </div>
         </Link>
         <Link to='/'>
            <div className="card card-slick-custom m-2">
               <div className="card-body p-3">
                  <h6 className="card-title mb-0">Launching Aplikasi Website Staner.id oleh BEM KM PKN STAN</h6>
                  <div className="card-author-katalog align-items-center mt-2">
                     <p className="card-text">
                        <span className="fs-12">Selasa, 26 Januari 2021</span>
                     </p>
                  </div>
               </div>
            </div>
         </Link>
         <Link to='/info'>
            <div className="m-5 btn btn-outline-primary d-flex justify-content-center">Lihat Info Lainnya</div>
         </Link>
      </Slider>
   )
}

export default NewInfoComponent