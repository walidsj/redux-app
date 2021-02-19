import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { updateBanners } from '../../actions'
import FooterComponent from '../../components/FooterComponent'
import BannerComponent from './components/BannerComponent'
import BottomCardComponent from './components/BottomCardComponent'
import GreetingComponent from './components/GreetingComponent'
import NewEventComponent from './components/NewEventComponent'
import NewInfoComponent from './components/NewInfoComponent'
import TopCardComponent from './components/TopCardComponent'

function Home() {
   const homeBanner = useSelector(state => state.homeBanner)
   const dispatch = useDispatch()
   
   const [banners, setBanners] = useState(homeBanner)

   useEffect(() => {
      axios.get(process.env.REACT_APP_REST_API_URL.concat('/app/banners'))
         .then(res => {
            let banners = res.data.data
            dispatch(updateBanners(banners))
            setBanners(banners)
         })
   }, [])

   return (
      <>
         <Helmet>
            <title>Staner.id</title>
         </Helmet>
         <div className="content-box content-other">
            <header id="headerSection" className="home-section">
               {
                  !banners
                     ? <Skeleton height={170} />
                     : <BannerComponent slides={banners} />
               }
            </header>
            <section className="content-blank bg-gray pb-2 pt-4" style={{marginTop: '-10px'}}>
               <div className="container">
                  <div className="row">
                     <div className="col">
                        <GreetingComponent />
                     </div>
                  </div>
                  <div className="row">
                     <div className="col">
                        <TopCardComponent />
                     </div>
                  </div>
                  <div className="row mt-2">
                     <div className="col">
                        <h5 className="head-title px-2">Info Terbaru</h5>
                        <NewInfoComponent />
                     </div>
                  </div>
                  <div className="row mt-5">
                     <div className="col">
                        <BottomCardComponent />
                     </div>
                  </div>
                  <div className="row mt-2">
                     <div className="col">
                        <h5 className="head-title px-2">Acara Terbaru</h5>
                        <NewEventComponent />
                     </div>
                  </div>
               </div>
            </section>
         </div>
         <FooterComponent />
      </>
   )
}

export default Home
