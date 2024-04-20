import React from "react";

export const About1 = () => {
  return (
    <section className="About1">
      <div className="main">
        <div
          className="title"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <h1>About Us</h1>
        </div>

        <div className="about-content">
          <div
            className="left"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1>Building Tomorrow's Technology Today</h1>
            <p>
              {" "}
              We're dedicated to innovation and excellence. From our start,
              we've led digital transformation, helping businesses thrive. With
              expert teams, we deliver solutions that fuel growth and
              efficiency. <br /> <br /> We believe in collaboration, tailoring
              solutions to exceed expectations. Join us in shaping technology's
              future. Together, we'll create possibilities and lasting impact.
            </p>
          </div>

          <div className="right">
            <ul>
              <li
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <h1>2000+</h1>
                <p>Top Innovator in Technology</p>
              </li>
              <li
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <h1>800+</h1>
                <p>Partnerships</p>
              </li>
              <li
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <h1>500+</h1>
                <p>Innovative Projects</p>
              </li>
              <li
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <h1>600+</h1>
                <p>Employee Recognition</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
