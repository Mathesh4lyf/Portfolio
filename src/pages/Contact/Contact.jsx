import React from "react";
import "./Contact.css";
import { services, emailIcon, phoneCall, locationIcon } from "../../assets";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <img
          src={services}
          alt="service"
          className="rotate-12 skew-x-12 w-32 h-32 object-cover"
        />
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message and let's talk about anything you want. You can
            contact anytime
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={emailIcon} alt="" className="h-8 w-8 object-contain" />
              <p>samuelmathenge200@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phoneCall} alt="" className="h-8 w-8 object-contain" />
              <p>0716527257</p>
            </div>
            <div className="contact-detail">
              <img
                src={locationIcon}
                alt=""
                className="h-8 w-8 object-contain"
              />
              <p>Kenya, Nairobi</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
