import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import FormLoginComponent from '../components/login/FormLoginComponent'

const Login = () => {
   return (
      <Fragment>
         <Helmet>
            <title>Login - Staner.id</title>
         </Helmet>
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
      </Fragment>
   )
}

export default Login