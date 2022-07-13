
import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer'
const MainLayout = () => {
  return (
    <div>
        <Header/>
        {/* phần body của layout sẽ được các routes đặt ở đây */}
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout