import React from 'react'
import { Link } from 'react-router-dom'

const Effects = () => {
  return (
    <div className='p-4'>
      
      
        <div className="">
          {/* button */}
          <Link to={"/Effects/AddEffects"}>
          <button className='p-3 rounded-full w-full text-blue700 bg-blue100 border-collapse border-2 border-solid border-blue700'>+ เพิ่มผลค้างเคียง</button>
          </Link>
          {/* His Effects */}
          <div className="pt-6">
            <h3 className='pb-2'>ประวัติการบันทึกผลข้างเคียง</h3>


            {/* กล่อง Loop ที่นี่*/}
            <div className="bg-white shadow-md shadow-blue100 px-4 py-2 rounded-lg flex justify-around items-center">
              <div className="text-center text-blue700 shadow-sm">
                <p className='text-sm'>บันทึกครั้งที่</p>
                <h2 className='text-5xl'>6</h2>
              </div>
              <div className="">
                <h3 className='text-md'>วันที่ 17 มกราคม 2567</h3>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Effects