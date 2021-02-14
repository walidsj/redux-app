import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'

class Home extends Component {
   state = {
      imageLoaded: false
   }

   handleLoadImage = () => {
      this.setState({
         imageLoaded: true
      })
   }

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
                              {!this.state.imageLoaded &&
                                 <Skeleton height={165} />
                              }
                              <img className="d-block w-100" src="https://app.staner.id/public/img/flyer/banner-welcome.webp" onLoad={this.handleLoadImage.bind(this)} alt="BigB Plan Competition: We Dare You to Plan The Future"/>
                           </div>
                        </Link>
                  </Slider>
               </header>
            </div>
         </Fragment>
      )
   }
}

export default Home
