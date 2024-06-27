import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col items-center text-center p-4'>
        <br />
        <Link to={"/BloodResults"} className='bt-blue'>Blood Results</Link>
        <br />
        <Link to={"/Appointment"} className='bt-blue'>Appointment</Link>
        <br />
        <Link to={"/Contacts"} className='bt-blue'>Contacts</Link>
        <br />
        <Link to={"/Effects"} className='bt-blue'>Effects</Link>
        <br />
        <Link to={"/PatientManual"} className='bt-blue'>Patient Manual</Link>
        <br />
        <Link to={"/Login"} className='bt-blue'>Login</Link>
        <br />
        <Link to={"/Register"} className='bt-blue'>Register</Link>
        <br />
    </div>
  )
}

export default Home