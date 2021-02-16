import React, { Fragment, lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, useLocation } from 'react-router-dom'
import BottomNavComponent from './components/BottomNavComponent'
import TopNavComponent from './components/TopNavComponent'
import PageSkeleton from './skeleton/PageSkeleton'

const Home = lazy(() => import('./pages/home/Home'))
const Info = lazy(() => import('./pages/info/Info'))
const Event = lazy(() => import('./pages/event/Event'))
const Account = lazy(() => import('./pages/account/Account'))

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <ScrollToTop />
        <TopNavComponent/>
          <Route exact path='/' component={() => <Suspense fallback={<PageSkeleton />}><Home /></Suspense>} />
          <Route path='/info' component={() => <Suspense fallback={<PageSkeleton />}><Info /></Suspense>} />
          <Route path='/acara' component={() => <Suspense fallback={<PageSkeleton />}><Event /></Suspense>} />
          <Route path='/akun-saya' component={() => <Suspense fallback={<PageSkeleton />}><Account /></Suspense>} />
        <BottomNavComponent/>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
