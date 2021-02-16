import React, { Fragment } from 'react'
import Skeleton from 'react-loading-skeleton'
import FooterComponent from '../components/FooterComponent'

function PageSkeleton() {
   return (
      <Fragment>
         <div className="content-box content-other">
            <header id="headerSection" className="home-section">
               <Skeleton height={150} />
            </header>
            <section className="content-blank bg-gray pb-2 pt-4">
               <div className="container">
                  <div className="row py-2">
                     <div className="col">
                        <div className="head-title px-2 pb-2"><Skeleton height={25} /></div>
                        <div className="px-2">
                           <Skeleton count={3} />
                        </div>
                     </div>
                  </div>
                  <div className="row py-2">
                     <div className="col">
                        <div className="px-2">
                           <div className="row">
                              <div className="col pr-2">
                                 <Skeleton height={125} />
                              </div>
                              <div className="col pl-2">
                                 <Skeleton height={125} />
                              </div>
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

export default PageSkeleton
