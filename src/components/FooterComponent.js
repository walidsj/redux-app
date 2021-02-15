import React, { Component } from 'react'

export default class FooterComponent extends Component {
   render() {
      return (
         <footer className="footer-section">
            <div className="container footer-left-xs">
               <div className="row justify-content-between">
                  <div className="col-12 text-center">
                     <p>©2021 BEM KM PKN STAN<br/>Hak Cipta Dilindungi</p>
                  </div>
               </div>
            </div>
         </footer>
      )
   }
}
