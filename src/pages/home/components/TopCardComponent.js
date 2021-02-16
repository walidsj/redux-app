import React from 'react'
import { Link } from 'react-router-dom'

function TopCardComponent() {
   return (
       <div className="container">
            <div className="row">
               <div className="col-6 mb-3 px-2">
                  <Link to='/peraturan-kampus'>
                     <div className="card">
                        <div className="card-body">
                           <div className="d-flex flex-wrap text-center">
                              <img className="mx-auto mb-2" src="https://app.staner.id/public/img/doodle/ReadingDoodle.svg" height="76" alt="Peraturan Kampus" />
                              <div className="mx-auto">
                                 <p className="text-default mb-0">Peraturan Kampus</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Link>
               </div>
               <div className="col-6 mb-3 px-2">
                  <Link to='/shortlink'>
                     <div className="card">
                        <div className="card-body">
                           <div className="d-flex flex-wrap text-center">
                              <img className="mx-auto mb-2" src="https://app.staner.id/public/img/doodle/UnboxingDoodle.svg" height="76" alt="Pemendek Tautan" />
                              <div className="mx-auto">
                                 <p className="text-default mb-0">Pemendek Tautan</p>
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

export default TopCardComponent
