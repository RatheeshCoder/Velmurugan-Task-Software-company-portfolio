import React from 'react';
import servicesData from '../Data/WebData';

export const Services = () => {
  return (
    <section className="services">
      <div className="title">
        <h1>Our Services</h1>
        <p>Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.</p>
      </div>

      <div className="content">
        <div className="left">
            <h1>Create Better Videos</h1>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</p>
            <a className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Learn More</span>
        </a>

        </div>

        <div className="right">
          {servicesData.map(service => (
            <div className="card" key={service.id}>
              <img src={service.image} alt={service.title} />
              <h1>{service.title}</h1>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
