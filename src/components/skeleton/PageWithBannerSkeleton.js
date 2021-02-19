import React from 'react'
import Skeleton from 'react-loading-skeleton'
import FooterComponent from '../FooterComponent'

function PageWithBannerSkeleton() {
   return (
      <>
         <div className="content-box content-other">
            <header id="headerSection" className="home-section">
               <Skeleton height={170} />
            </header>
            <section className="content-blank bg-gray pb-2 pt-4">
               <div className="container">
                  <div className="row py-2">
                     <div className="col">
                        <div className="head-title px-2 pb-2"><Skeleton height={25} /></div>
                        <div className="px-2">
                           <Skeleton count={2} />
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
      </>
      )
}

export default PageWithBannerSkeleton
