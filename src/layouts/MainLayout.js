import React from 'react'
import {Outlet} from 'react-router-dom'
const MainLayout = () => {
  return (
    <div>
        <div>
            <h1>Header</h1>
        </div>
        {/* phần body của layout sẽ được các routes đặt ở đây */}
        <Outlet/>
        <div>
            <h1>Footer</h1>
        </div>
    </div>
  )
}

export default MainLayout