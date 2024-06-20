import React from 'react'
import { Link } from 'react-router-dom'

const Appointment = () => {
  return (
    <div>
        <h1>อันนี้หน้าแรกหหน้านัดหมาย Appointment</h1>
        <br />
        <Link to={"/Appointment/AppointmentDetails"}>กดไปหน้า AppointmentDetails.jxs (คือลิ้งปุ่มคลิกตรงการ์ดนัดหมาย ที่มีเวลา)</Link>
    </div>
  )
}

export default Appointment