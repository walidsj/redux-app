import React, { Fragment, lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import BottomNavComponent from './components/BottomNavComponent'
import TopNavComponent from './components/TopNavComponent'

const Home = lazy(() => import('./pages/home/Home'))
const Login = lazy(() => import('./containers/Login'))

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <TopNavComponent/>
          <Route exact path='/' component={() => <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
          <Route path='/info' component={() => <Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
          <Route path='/event' component={() => <Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
          <Route path='/my-account' component={() => <Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
        <BottomNavComponent/>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
