import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <nav>--- Nav ไว้ส่งหัวข้อมานี่ ---</nav>
        {/* form react router dom at in rounter.jsx*/}
        <Outlet/>
    </div>
  )
}

export default Main