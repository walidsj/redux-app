import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import GreetingComponent from './components/GreetingComponent';

class Home extends Component {

   render() {
      const settings = {
         dots: false,
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1
      };
      
      return(
      <Fragment>
            <Helmet>
               <title>Staner.id</title>
            </Helmet>
            <div className="content-box content-other">
               <header id="headerSection" className="home-section">
                  <Slider className="carousel slide" {...settings}>
                        <Link to='/'>
                           <div>
                              <img className="d-block w-100" src="https://app.staner.id/public/img/flyer/banner-welcome.webp" alt="Staner.id"/>
                           </div>
                        </Link>
                  </Slider>
               </header>
               <section className="content-blank bg-gray pb-2 pt-4" style={{marginTop: '-10px'}}>
                  <div className="container">
                     <div className="row">
                        <div className="col">
                           <GreetingComponent/>
                        </div>
                     </div>
                  </div>
               </section>
            </div>
         </Fragment>
      )
   }
}

export default Home
