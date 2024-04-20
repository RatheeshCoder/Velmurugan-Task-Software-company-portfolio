import React from "react";
import servicesData from "../Data/WebData";

export const Services = () => {
  return (
    <section className="services">
      <div className="title">
        <h1>Our Services</h1>
        <p>
          Empowering Digital Solutions for Today's Challenges. Transforming
          Ideas into Digital Reality. Innovate, Evolve, and Success
        </p>
      </div>

      <div className="content">
        <div
          className="left"
          data-aos="zoom-in-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h1>Unleashing Innovation, Driving Success</h1>
          <p>
            Empowering digital success through tailored services. Partner with
            us for transformative growth.
          </p>
          <button class="hover:brightness-110 hover:animate-pulse font-bold py-2 md:py-3 px-4 md:px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-[#e3e6df] text-lg md:text-2xl">
            More Services
          </button>
        </div>

        <div className="right">
          {servicesData.map((service) => (
            <div
              className="card"
              key={service.id}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
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
