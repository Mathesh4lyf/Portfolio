import React from "react";
import "./About.css";
import { profilePic } from "../../assets";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 ">About me</h1>
        <img
          src={profilePic}
          alt="profile-pic"
          className="h-24 w-24 rounded-full object-cover"
        />
      </div>
      <div className="about-section">
        <div className="about-left"></div>
        <div className="about-right">
          <div className="about-para">
            <p>
              To build career in a growing organization where I can get the
              opportunity to prove my abilities by accepting challenges,
              fulfilling the organizational goal and climb the ladder through
              continuous learning and commitment.
            </p>
            <p>
              I am passionate and competent in assigned tasks. I work with
              minimal to no supervision. I am motivated to work with a
              recognized tech organization such as you. I am a great team player
              and have skills that will add value to the company’s interest.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>C</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>C#,</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>PHP</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Java Script</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>HTML</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Data Analytics</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Computer Gaming</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Networking</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Operating System</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Data Structures and Algorithims</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Angular</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>50+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
