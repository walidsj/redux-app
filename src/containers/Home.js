import React from 'react'
import NavbarComponent from '../components/NavbarComponent'

const Home = () => {
   return (
      <div>
         <NavbarComponent />
         <div className="container mt-4">
            <div className="card shadow-sm">
               <div className="card-body">
                  <h5 className="card-title">Home Page</h5>
                  <p className="card-text">
                     Ini adalah halaman Home yang isinya gak tau mau diapain gaes.
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home
