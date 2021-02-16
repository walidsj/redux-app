import React, { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import AccountSkeleton from './skeleton/AccountSkeleton'
import PageSkeleton from './skeleton/PageSkeleton'
import PageWithBannerSkeleton from './skeleton/PageWithBannerSkeleton'

const CampusLaw = lazy(() => import('./pages/campus-law/CampusLaw'))
const Home = lazy(() => import('./pages/home/Home'))
const Info = lazy(() => import('./pages/info/Info'))
const Event = lazy(() => import('./pages/event/Event'))
const Account = lazy(() => import('./pages/account/Account'))

function Router() {
   return (
      <>
         {/* Route Main Page */}
         <Route exact path='/' component={() => <Suspense fallback={<PageWithBannerSkeleton />}><Home /></Suspense>} />
         <Route path='/info' component={() => <Suspense fallback={<PageSkeleton />}><Info /></Suspense>} />
         <Route path='/acara' component={() => <Suspense fallback={<PageWithBannerSkeleton />}><Event /></Suspense>} />
         <Route path='/akun-saya' component={() => <Suspense fallback={<AccountSkeleton />}><Account /></Suspense>} />

         {/* Route Sub Page 'Home' */}
         <Route path='/peraturan-kampus' component={() => <Suspense fallback={<PageSkeleton />}><CampusLaw /></Suspense>} />
      </>
   )
}

export default Router
