import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=''>
      <div className="">หน้านี้ทำทิ้งไว้คลิกไปแต่ละหน้าเฉยๆ</div>
        <br />
        <Link to={"/BloodResults"}>BloodResults wt</Link>
        <br />
        <br />
        <Link to={"/Appointment"}>Appointment //นง</Link>
        <br />
        <br />
        <Link to={"/Contacts"}>Contacts //นง</Link>
        <br />
        <br />
        <Link to={"/Effects"}>Effects</Link>
        <br />
        <br />
        <Link to={"/PatientManual"}>PatientManual //นง</Link>
        <br />
        <br />
        <Link to={"/Login"}>Login</Link>
        <br />
        <br />
        <Link to={"/Register"}>Register</Link>
        <br />
    </div>
  )
}

export default Home