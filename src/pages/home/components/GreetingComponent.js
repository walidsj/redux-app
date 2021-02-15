import React, { Component } from 'react'
import Skeleton from 'react-loading-skeleton'

import sendIcon from '../../../assets/img/icon/send.svg'

export default class GreetingComponent extends Component {
   state = {
      imageLoaded: false
   }

   handleImageLoaded = () => {
      this.setState({
         imageLoaded: true
      })
   }

   render() {
      return (
         <div className="card-body px-2 pt-0">
            <div className="card-author no-border align-items-center p-0">
               { !this.state.imageLoaded &&
                  <Skeleton/>
               }
               <img src={sendIcon} style={{ padding: '3px', borderRadius: 0, border: '0 !important' }} className="img-fluid img-profile mr-3" alt="Halo, Staner!" onLoad={this.handleImageLoaded.bind(this)} />
               <div className="info-profile">
                  <p className="title pb-0 pl-0">Halo, Staner!</p>
                  <div className="d-flex align-items-center mb-0">
                     <p className="text-default mb-0 mr-2">Selamat siang.</p>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
