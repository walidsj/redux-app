import React, { Fragment, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import BottomNavComponent from './components/BottomNavComponent'
import TopNavComponent from './components/TopNavComponent'

const Home = React.lazy(() => import('./containers/Home'))
const Login = React.lazy(() => import('./containers/Login'))

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <TopNavComponent/>
          <Route exact path='/' render={() => <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
          <Route path='/info' render={() => <Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
          <Route path='/event' render={() => <Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
          <Route path='/my-account' render={() => <Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
        <BottomNavComponent/>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
