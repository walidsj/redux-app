import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function InfoCardComponent() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-6 mb-3 px-2">
               <Link to='/info-beasiswa'>
                  <div className="card">
                     <div className="card-body">
                        <div className="d-flex flex-wrap text-center">
                           <img className="mx-auto mb-2" src="https://app.staner.id/public/img/doodle/SprintingDoodle.svg" height="76" alt="Beasiswa" />
                           <div className="mx-auto">
                              <p className="text-default mb-0">Beasiswa</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </Link>
            </div>
            <div className="col-6 mb-3 px-2">
               <Link to='/info-kerja-sama'>
                  <div className="card">
                     <div className="card-body">
                        <div className="d-flex flex-wrap text-center">
                           <img className="mx-auto mb-2" src="https://app.staner.id/public/img/doodle/UnboxingDoodle.svg" height="76" alt="Kerja Sama" />
                           <div className="mx-auto">
                              <p className="text-default mb-0">Kerja Sama</p>
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

export default InfoCardComponent

