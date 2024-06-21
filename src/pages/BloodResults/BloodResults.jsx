import React from 'react'
import { Link } from 'react-router-dom'
const BloodResults = () => {
  return (
    <div className='p-4'>



  <Link to={"/BloodResults/FillResults"}>
      {/* กล่องแผนการรักษา */}
      <div className="bg-white drop-shadow-md shadow-gray-200 px-4 py-2 rounded-lg">
        {/* ICON */}
        <div className=""><img src="" alt="" /></div>
        {/* TEXT */}
        <div className="">
          {/* ต้องมาทำ loop text */}
          <p>มะเร็งต่อมไทรอยด์ ระยะที่ 2</p>
          <p>มะเร็งต่อมลูกหมาก ระยะที่ 4</p>
          {/* ไอคอนยา และ สูตรยา */}
          <div className="">
            <div className=""><img src="" alt="" /></div>
            <p>Cis CCRT Cervix</p>
          </div>
        </div>
      </div>
  </Link>
      


    </div>
  )
}

export default BloodResults