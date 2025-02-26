// import React from 'react'
import './Dashboard.css'
import profilepic from '../../profilepic/Profile-PNG-Photo-3757268555.PNG'
import "tailwindcss";

const Dashboard = () => {
  return (
    <div className='dashboard'>
<div className="flex flex-col items-center justify-center space-y-4">
  <img 
    src={profilepic} 
    alt="" 
    className="h-24 w-24 rounded-full object-cover" // Centered image and make it circular
  />

  <h1 className="font-bold text-3xl text-center text-white">
    I'm Samuel Mathenge, Full Stack developer based in Kenya.
  </h1>

  <p className="text-center text-white">
    I am a Full Stack Developer from Kenya with years of experience in developing websites and apps using various languages.
  </p>

  <div className="dashboard-action flex space-x-4">
    <div className="dashboard-connect text-white">Connect with me</div>
    <div className="dashboard-resume text-white">My resume</div>
  </div>
</div>

    </div>
  )
}

export default Dashboard
