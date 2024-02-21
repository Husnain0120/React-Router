import React from 'react'
import Header from './Coponents/Header/Header'
import Footer from './Coponents/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
     <Header/>
      <Outlet/>
     <Footer/> 
    </>
  )
}

export default Layout
