import React from "react";
import "./services.css";
import { serviceData } from "../../assets/services_data";
import { services } from "../../assets";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services">
        <div className="services-title">
          <h1>My Services</h1>
          <img
            src={services}
            alt="service"
            className="rotate-12 skew-x-12 w-32 h-32 object-cover"
          />
        </div>
      </div>
      <div className="services-container">
        {serviceData.map(({ id, name, desc }) => {
          return (
            <div key={id} className="services-format">
              <h3>{id}</h3>
              <h2>{name}</h2>
              <p>{desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
