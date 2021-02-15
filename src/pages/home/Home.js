import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import BannerComponent from './components/BannerComponent'
import BottomCardComponent from './components/BottomCardComponent'
import GreetingComponent from './components/GreetingComponent'
import NewEventComponent from './components/NewEventComponent'
import NewInfoComponent from './components/NewInfoComponent'
import TopCardComponent from './components/TopCardComponent'

class Home extends Component {

   render() {     
      return(
      <Fragment>
            <Helmet>
               <title>Staner.id</title>
            </Helmet>
            <div className="content-box content-other">
               <header id="headerSection" className="home-section">
                  <BannerComponent />
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
            <footer class="footer-section">
               <div class="container footer-left-xs">
                  <div class="row justify-content-between">
                     <div class="col-12 text-center">
                        <p>©2021 BEM KM PKN STAN<br/>Hak Cipta Dilindungi</p>
                     </div>
                  </div>
               </div>
            </footer>
         </Fragment>
      )
   }
}

export default Home
