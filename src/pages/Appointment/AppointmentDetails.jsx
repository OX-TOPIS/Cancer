import React from 'react'
import { Link } from 'react-router-dom'

const AppointmentDetails = () => {
  return (
    <div>
      <h1>AppointmentDetails</h1>
      <br />
      <Link to={"/Appointment/PostponeAppointment"}>คลิกเพื่อไปหน้าเลื่อนนัดหมาย</Link>
    </div>
  )
}

export default AppointmentDetails