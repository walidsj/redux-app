import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import BottomNavComponent from './components/BottomNavComponent'
import TopNavComponent from './components/TopNavComponent'
import Home from './containers/Home'
import Login from './containers/Login'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <TopNavComponent/>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/info' render={() => <Login />} />
          <Route path='/event' render={() => <Login />} />
          <Route path='/my-account' render={() => <Login />} />
        <BottomNavComponent/>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
