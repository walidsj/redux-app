import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'
import Register from './containers/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' render={() => <Home />} />
      <Route path='/login' render={() => <Login />} />
      <Route path='/register' render={() => <Register />} />
    </BrowserRouter>
  )
}

export default App
