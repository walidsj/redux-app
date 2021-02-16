import React, { Fragment, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link, Route } from 'react-router-dom'
import homeIcon from '../assets/img/icon/home.svg'
import menuIcon from '../assets/img/icon/menu.svg'
import noteIcon from '../assets/img/icon/note.svg'
import userIcon from '../assets/img/icon/user.svg'

function BottomNavComponent() {
   const [homeIconLoaded, setHomeIconLoaded] = useState(false)
   const [menuIconLoaded, setMenuIconLoaded] = useState(false)
   const [noteIconLoaded, setNoteIconLoaded] = useState(false)
   const [userIconLoaded, setUserIconLoaded] = useState(false)

   function handleLoadHomeIcon() {
      setHomeIconLoaded(true)
   }

   function handleLoadMenuIcon() {
      setMenuIconLoaded(true)
   }

   function handleLoadNoteIcon() {
      setNoteIconLoaded(true)
   }

   function handleLoadUserIcon() {
      setUserIconLoaded(true)
   }

   return (
      <Fragment>
         <nav className="navbar navbar-expand-lg desktop-navigation other-navbar p-0 d-block fixed-bottom">
            <div className="container">
               <ul className="menu-mobile-bottom">
                  <Route path='/' exact children={({ match }) => (
                     <li className={match ? 'img-nav active' : 'img-nav'}>
                        <Link to='/'>
                           <div>
                              {!homeIconLoaded &&
                                 <Skeleton />
                              }
                              <img src={homeIcon} onLoad={handleLoadHomeIcon.bind(this)} alt='Staner.id' height="24" />
                           </div>
                           {!homeIconLoaded
                              ? <Skeleton />
                              : <small className="fs-10 mt-0">Beranda</small>
                           }
                        </Link>
                     </li>
                  )} />
                  <Route path='/info' children={({ match }) => (
                     <li className={match ? 'img-nav active' : 'img-nav'}>
                        <Link to='/info'>
                           <div>
                              {!noteIconLoaded &&
                                 <Skeleton />
                              }
                              <img src={noteIcon} onLoad={handleLoadNoteIcon.bind(this)} alt='Staner.id' height="24" />
                           </div>
                           {!noteIconLoaded
                              ? <Skeleton />
                              : <small className="fs-10 mt-0">Info</small>
                           }
                        </Link>
                     </li>
                  )} />
                  <Route path='/acara' children={({ match }) => (
                     <li className={match ? 'img-nav active' : 'img-nav'}>
                        <Link to='/acara'>
                           <div>
                              {!menuIconLoaded &&
                                 <Skeleton />
                              }
                              <img src={menuIcon} onLoad={handleLoadMenuIcon.bind(this)} alt='Staner.id' height="24" />
                           </div>
                           {!menuIconLoaded
                              ? <Skeleton />
                              : <small className="fs-10 mt-0">Acara</small>
                           }
                        </Link>
                     </li>
                  )} />
                  <Route path='/akun-saya' children={({ match }) => (
                     <li className={match ? 'img-nav active' : 'img-nav'}>
                        <Link to='/akun-saya'>
                           <div>
                              {!userIconLoaded &&
                                 <Skeleton />
                              }
                              <img src={userIcon} onLoad={handleLoadUserIcon.bind(this)} alt='Staner.id' height="24" />
                           </div>
                           {!userIconLoaded
                              ? <Skeleton />
                              : <small className="fs-10 mt-0">Akun</small>
                           }
                        </Link>
                     </li>
                  )} />
               </ul>
            </div>
         </nav>
      </Fragment>
   )
}

export default BottomNavComponent
