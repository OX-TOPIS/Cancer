import React from 'react'
import { Link } from 'react-router-dom'

const FillResults = () => {
  return (
    <div>
      <div className="">FillResults</div>

      <Link to={"/BloodResults/DisplayBloodResults"}>
        <button className='bt-blue mt-20'>ส่งผลเลือด</button>
      </Link>
      
    </div>
    
  )
}

export default FillResults