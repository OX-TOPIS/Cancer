import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      {/* header */}
      <div className="">
        <img src="ing/bg-svg.png" alt="" />
        <img src="ing/bloody_rm-bg.png" alt="" className='w-44 right-1 absolute top-20'/>
        <h2 className='text-5xl font-bold text-blue700 text-center drop-shadow-lg'>Bloody</h2>
        {/* ลงทะเบียน */}
        <div className="">ลงทะเบียน/</div>

        {/* ปุ่มกดไปหน้า register */}
        <Link to="/Login">หากยังไม่มีบช Login</Link>
      </div>
    </div>
  )
}

export default Register