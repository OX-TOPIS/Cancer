import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <nav>Nav</nav>
        {/* form react router dom at in rounter.jsx*/}
        <Outlet/>
        <footer>Footer</footer>
    </div>
  )
}

export default Main