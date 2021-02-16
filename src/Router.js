import React, { Fragment, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import PageSkeleton from './skeleton/PageSkeleton'
import PageWithBannerSkeleton from './skeleton/PageWithBannerSkeleton'

const CampusLaw = lazy(() => import('./pages/campus-law/CampusLaw'))
const Home = lazy(() => import('./pages/home/Home'))
const Info = lazy(() => import('./pages/info/Info'))
const Event = lazy(() => import('./pages/event/Event'))
const Account = lazy(() => import('./pages/account/Account'))

function Router() {
   return (
      <Fragment>
      <Route exact path='/' component={() => <Suspense fallback={<PageWithBannerSkeleton />}><Home /></Suspense>} />
      <Route path='/info' component={() => <Suspense fallback={<PageSkeleton />}><Info /></Suspense>} />
      <Route path='/acara' component={() => <Suspense fallback={<PageWithBannerSkeleton />}><Event /></Suspense>} />
      <Route path='/akun-saya' component={() => <Suspense fallback={<PageSkeleton />}><Account /></Suspense>} />
      <Route path='/peraturan-kampus' component={() => <Suspense fallback={<PageSkeleton />}><CampusLaw /></Suspense>} />
   </Fragment>
   )
}

export default Router
