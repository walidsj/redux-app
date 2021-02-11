import React from 'react'
import { Link, NavLink } from 'react-router-dom'

class NavbarComponent extends React.Component {
   state = {
      isCollapsed: false
   }

   handleCollapse = () => {
      const isCollapsed = !this.state.isCollapsed
      this.setState({ isCollapsed })
   }

   render() {
      return (
         <nav className="navbar navbar-expand-sm navbar-dark bg-primary shadow-sm border border-top-0 border-left-0 border-right-0 border-bottom-1">
            <div className="container">
               <Link to='/' className="navbar-brand">Simple</Link>
               <button className={`navbar-toggler ${!this.state.isCollapsed ? 'collapsed' : ''}`} type="button" onClick={this.handleCollapse}>
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className={`${this.state.isCollapsed ? 'show' : ''} collapse navbar-collapse`} id="navbarNav">
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <NavLink exact to='/' className="nav-link">Home</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to='/login' className="nav-link">Login</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to='/register' className="nav-link">Register</NavLink>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      )
   }
}

export default NavbarComponent
