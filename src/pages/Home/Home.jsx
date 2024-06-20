import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to={"/BloodResults"}>BloodResults</Link>
        <br />
        <Link to={"/Appointment"}>Appointment</Link>
        <br />
        <Link to={"/Contacts"}>Contacts</Link>
        <br />
        <Link to={"/Effects"}>Effects</Link>
        <br />
        <Link to={"/PatientManual"}>PatientManual</Link>
        <br />
    </div>
  )
}

export default Home