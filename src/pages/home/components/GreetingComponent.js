import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

import sendIcon from '../../../assets/img/icon/send.svg'

function GreetingComponent() {
   const [imageLoaded, setImageLoaded] = useState(false)
   const [greeting, setGreeting] = useState('')

   function handleImageLoaded() {
      setImageLoaded(true)
   }

   function getHour() {
      const date = new Date()
      return date.hour
   }

   function getGreeting(hour) {
      let greeting = ''
      
      if (hour > 0 && hour < 12) {
        greeting = 'Selamat pagi.'
      } else if (hour >= 12 && hour < 15) {
        greeting = 'Selamat siang.'
      } else if (hour >= 15 && hour < 18) {
        greeting = 'Selamat sore.'
      } else {
        greeting = 'Selamat malam.'
      }

      setGreeting(greeting)
   }

   useEffect(() => {
      const hour = getHour()
      getGreeting(hour)
   }, [])

   return (
      <div className="card-body px-2 pt-0">
         <div className="card-author no-border align-items-center p-0">
            { !imageLoaded &&
               <Skeleton/>
            }
            <img src={sendIcon} style={{ padding: '3px', borderRadius: 0, border: '0 !important' }} className="img-fluid img-profile mr-3" alt="Halo, Staner!" onLoad={handleImageLoaded.bind(this)} />
            <div className="info-profile">
               <p className="title pb-0 pl-0">Halo, Staner!</p>
               <div className="d-flex align-items-center mb-0">
                  <p className="text-default mb-0 mr-2">{greeting}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default GreetingComponent
