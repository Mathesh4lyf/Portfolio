import './Dashboard.css'

import {profilePic} from '../../assets'

const Dashboard = () => {
  return (
    <div className='dashboard' id='dashboard'>
      <div className="flex flex-col items-center justify-center gap-4">
        <img
          src={profilePic}
          alt="profile-pic"
          className="h-24 w-24 rounded-full object-cover" // Centered image and make it circular
        />

        <h1 className="font-bold text-3xl text-center text-white">
          <span>I'm Samuel Mathenge,</span> Full Stack developer based in Kenya.
        </h1>

        <p className="text-center text-white">
          I am a Full Stack Developer from Kenya with years of experience in developing websites and apps using various programming languages and platforms.
        </p>

        <div className="dashboard-container space-y-4">
          <div className="dashboard-connect text-white">Connect with me</div>
          <div className="dashboard-resume text-white">My resume</div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard
