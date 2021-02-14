import React, { Component, Fragment } from 'react'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'
import homeIcon from '../assets/img/icon/home.svg'
import menuIcon from '../assets/img/icon/menu.svg'
import noteIcon from '../assets/img/icon/note.svg'
import userIcon from '../assets/img/icon/user.svg'

export class BottomNavComponent extends Component {
   state = {
      homeIconLoaded: false,
      menuIconLoaded: false,
      noteIconLoaded: false,
      userIconLoaded: false
   }

   handleLoadHomeIcon = () => {
      this.setState({ homeIconLoaded: true })
   }

   handleLoadMenuIcon = () => {
      this.setState({ menuIconLoaded: true })
   }

   handleLoadNoteIcon = () => {
      this.setState({ noteIconLoaded: true })
   }

   handleLoadUserIcon = () => {
      this.setState({ userIconLoaded: true })
   }


   render() {
      return (
         <Fragment>
            <nav className="navbar navbar-expand-lg desktop-navigation other-navbar p-0 d-block fixed-bottom">
               <div className="container">
                  <ul className="menu-mobile-bottom">
                     <li className="img-nav">
                        <NavLink to='/'>
                           <div>
                              {!this.state.homeIconLoaded &&
                                 <Skeleton />
                              }
                              <img src={homeIcon} onLoad={this.handleLoadHomeIcon.bind(this)} alt='Staner.id' height="24" />
                           </div>
                           {!this.state.homeIconLoaded
                              ? <Skeleton />
                              : <small className="text-dark fs-10 mt-0">Beranda</small>
                           }
                        </NavLink>
                     </li>
                     <li className="img-nav">
                        <NavLink to="/info">
                           <div>
                              {!this.state.noteIconLoaded &&
                                 <Skeleton />
                              }
                              <img src={noteIcon} onLoad={this.handleLoadNoteIcon.bind(this)} alt='Staner.id' height="24" />
                           </div>
                           {!this.state.noteIconLoaded
                              ? <Skeleton />
                              : <small className="text-dark fs-10 mt-0">Info</small>
                           }
                        </NavLink>
                     </li>
                     <li className="img-nav">
                        <NavLink to="/event">
                           <div>
                              {!this.state.menuIconLoaded &&
                                 <Skeleton />
                              }
                              <img src={menuIcon} onLoad={this.handleLoadMenuIcon.bind(this)} alt='Staner.id' height="24" />
                           </div>
                           {!this.state.menuIconLoaded
                              ? <Skeleton />
                              : <small className="text-dark fs-10 mt-0">Acara</small>
                           }
                        </NavLink>
                     </li>
                     <li className="img-nav">
                        <NavLink to='/my-account'>
                           <div>
                              {!this.state.userIconLoaded &&
                                 <Skeleton />
                              }
                              <img src={userIcon} onLoad={this.handleLoadUserIcon.bind(this)} alt='Staner.id' height="24" />
                           </div>
                           {!this.state.userIconLoaded
                              ? <Skeleton />
                              : <small className="text-dark fs-10 mt-0">Akun</small>
                           }
                        </NavLink>
                     </li>
                  </ul>
               </div>
            </nav>
         </Fragment>
      )
   }
}

export default BottomNavComponent
