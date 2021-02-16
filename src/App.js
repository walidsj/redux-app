import React, { Fragment, lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import BottomNavComponent from './components/BottomNavComponent'
import TopNavComponent from './components/TopNavComponent'

const Home = lazy(() => import('./pages/home/Home'))
const Info = lazy(() => import('./pages/info/Info'))
const Event = lazy(() => import('./pages/event/Event'))

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <TopNavComponent/>
          <Route exact path='/' component={() => <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
          <Route path='/info' component={() => <Suspense fallback={<div>Loading...</div>}><Info /></Suspense>} />
          <Route path='/acara' component={() => <Suspense fallback={<div>Loading...</div>}><Event /></Suspense>} />
          <Route path='/akun-saya' component={() => <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
        <BottomNavComponent/>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
