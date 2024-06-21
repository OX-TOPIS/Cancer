import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      {/* header */}
      <div className="">
        <img src="ing/bg-svg.png" alt="" />
        <img src="ing/bloody_rm-bg.png" alt="" className='w-44 right-1 absolute top-20'/>
        <h2 className='text-5xl font-bold text-blue700 text-center drop-shadow-lg'>Bloody</h2>
        {/* เข้าสู่ระบบ */}
        <div className="">เข้าสู่ระบบ/</div>
        {/* ปุ่มกดไปหน้า register */}
        <Link to="/Register">หากยังไม่มีบช Register</Link>
      </div>
    </div>
  )
}

export default Login