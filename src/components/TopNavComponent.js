import React, { Component, Fragment } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.webp'

class TopNavComponent extends Component {
   state = {
      imageLoaded: false
   }

   handleLoadImage = () => {
      this.setState({
         imageLoaded: true
      })
   }

   render() {
      return (
         <Fragment>
            <nav className="navbar navbar-expand-lg desktop-navigation fixed-top other-navbar shadow-sm">
               <div className="container">
                  <div className="navbar-header">
                     <Link to='/' className="navbar-brand mx-auto pt-0 mr-0">
                        {!this.state.imageLoaded &&
                           <Skeleton />
                        }
                        <img src={logo} onLoad={this.handleLoadImage.bind(this)} alt='Staner.id' className="img-fluid logo-other" />
                     </Link>
                  </div>
               </div>
            </nav>
         </Fragment>
      )
   }
}

export default TopNavComponent
