import React, { Fragment, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.webp'

function TopNavComponent() {
   const [imageLoaded, setImageLoaded] = useState(false)

   function handleLoadImage() {
      setImageLoaded(true)
   }

   return (
      <Fragment>
         <nav className="navbar navbar-expand-lg desktop-navigation fixed-top other-navbar shadow-sm">
            <div className="container">
               <div className="navbar-header">
                  <Link to='/' className="navbar-brand mx-auto pt-0 mr-0">
                     {!imageLoaded &&
                        <Skeleton />
                     }
                     <img src={logo} onLoad={handleLoadImage.bind(this)} alt='Staner.id' className="img-fluid logo-other" />
                  </Link>
               </div>
            </div>
         </nav>
      </Fragment>
   )
}

export default TopNavComponent
