import React from 'react'
import { Helmet } from 'react-helmet'
import FooterComponent from '../../components/FooterComponent'

function Account() {
   return (
      <>
         <Helmet>
            <title>Akun Saya - Staner.id</title>
         </Helmet>
         <div className="content-box content-other">
            <section className="content-blank bg-gray pb-2 pt-5">
               <div className="container">
                  <div className="row text-center">
                     <div className="col">
                        <img height="70" src="https://lh5.googleusercontent.com/-aiDOme8Lou4/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnyC0yicJw4Vq5oMqg4ImQPxpO1Kw/s96-c/photo.jpg" className="img-profile mb-3 rounded-circle" alt="My Account" />
                        <h4 className="text-default font-800 m-0">Staner</h4>
                        <p className="font-300">guest@staner.id</p></div>
                  </div>
               </div>
            </section>
         </div>
         <FooterComponent />
      </>
   )
}

export default Account
