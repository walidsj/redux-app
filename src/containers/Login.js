import React from 'react'
import FormLoginComponent from '../components/login/FormLoginComponent'
import NavbarComponent from '../components/NavbarComponent'

const Login = () => {
   return (
      <div>
         <NavbarComponent />
         <div className="container mt-4">
            <div className="row">
               <div className="col-md-6 col-lg-4">
                  <div className="card shadow-sm">
                     <div className="card-body">
                        <h5 className="card-title">Login</h5>
                        <p className="card-text">
                           Silakan login untuk akses.
                     </p>
                       <FormLoginComponent />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login