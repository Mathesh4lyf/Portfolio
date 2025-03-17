import React, { useState } from "react";
import "./Contact.css";
import { services, emailIcon, phoneCall, locationIcon } from "../../assets";

const Contact = () => {
  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false); // New state for popup visibility

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setShowPopup(false); // Hide previous popup if visible

    const formData = new FormData(event.target);
    formData.append("access_key", "9a337c40-a63b-4feb-ba34-735b0917b2d3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();

      // Show the popup message
      setShowPopup(true);

      // Hide the popup after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      {showPopup && (
        <div className="popup-message">✅ Email sent successfully!</div>
      )}

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
              contact me anytime.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img
                  src={emailIcon}
                  alt=""
                  className="h-8 w-8 object-contain"
                />
                <p>samuelmathenge200@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img
                  src={phoneCall}
                  alt=""
                  className="h-8 w-8 object-contain"
                />
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
          <form onSubmit={onSubmit} className="contact-right">
            <div className="result-message">{result}</div>
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
    </div>
  );
};

export default Contact;
