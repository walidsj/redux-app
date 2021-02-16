import React from 'react'
import Skeleton from 'react-loading-skeleton'
import FooterComponent from '../components/FooterComponent'

function AccountSkeleton() {
   return (
      <>
         <div className="content-box content-other">
            <section className="content-blank bg-gray pb-2 pt-5">
               <div className="container">
                  <div className="row py-2 text-center">
                     <div class="col">
                        <Skeleton circle={true} height={70} width={70} />
                        <h4 class="text-default font-800 m-0"><Skeleton height={25} /></h4>
                        <p class="font-300"><Skeleton /></p></div>
                  </div>
                  <div className="row py-2">
                     <div className="col">
                        <div className="px-2">
                           <Skeleton count={3} />
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

export default AccountSkeleton
