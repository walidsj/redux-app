import React, { useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import BottomNavComponent from './components/BottomNavComponent'
import TopNavComponent from './components/TopNavComponent'
import Router from './Router'

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <TopNavComponent />
        <Router />
        <BottomNavComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
