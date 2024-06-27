import React from 'react'
import { Link } from 'react-router-dom'

const FillResults = () => {
  return (
    <div>
      <div className="mt-4"></div>
      {/* ปุ่มเลือกรูป / ถ่ายรูป */}
      <div className="w-full flex justify-around">
        <button className='bt2-blue w-5/12 m-2'>เลือกรูปภาพ</button>
        <button className='bt2-blue w-5/12 m-2'>ถ่ายรูป</button>
      </div>

      {/* แสดงรูป */}
      <div className="flex justify-center items-center h-full pt-12">
        <img src="/ing/bloodrs.png" alt="" className='w-86'/>
      </div>

      {/* ที่กรองออกจากรูปมาเป็น text input */}
      {/* <div className="box-sd m-2">
        <h1>dddddd</h1>
      </div> */}



      {/* ปุ่มส่งผลเลือด */}
      <Link to={"/BloodResults/DisplayBloodResults"}>
        <button className='bt-blue mt-20'>ส่งผลเลือด</button>
      </Link>
      
    </div>
    
  )
}

export default FillResults