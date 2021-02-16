import React, { Component, Fragment } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link, Route } from 'react-router-dom'
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
                     <Route path='/' exact children={({ match }) => (
                        <li className={match ? 'img-nav active' : 'img-nav'}>
                           <Link to='/'>
                              <div>
                                 {!this.state.homeIconLoaded &&
                                    <Skeleton />
                                 }
                                 <img src={homeIcon} onLoad={this.handleLoadHomeIcon.bind(this)} alt='Staner.id' height="24" />
                              </div>
                              {!this.state.homeIconLoaded
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
                                 {!this.state.noteIconLoaded &&
                                    <Skeleton />
                                 }
                                 <img src={noteIcon} onLoad={this.handleLoadNoteIcon.bind(this)} alt='Staner.id' height="24" />
                              </div>
                              {!this.state.noteIconLoaded
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
                                 {!this.state.menuIconLoaded &&
                                    <Skeleton />
                                 }
                                 <img src={menuIcon} onLoad={this.handleLoadMenuIcon.bind(this)} alt='Staner.id' height="24" />
                              </div>
                              {!this.state.menuIconLoaded
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
                                 {!this.state.userIconLoaded &&
                                    <Skeleton />
                                 }
                                 <img src={userIcon} onLoad={this.handleLoadUserIcon.bind(this)} alt='Staner.id' height="24" />
                              </div>
                              {!this.state.userIconLoaded
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
}

export default BottomNavComponent
