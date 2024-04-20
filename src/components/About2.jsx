import React from "react";
import leftImg from "../assets/About2-left.jpg";

export const About2 = () => {
  return (
    <section className="About2">
      <div
        className="left"
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img src={leftImg} alt="" />
      </div>

      <div
        className="right"
        data-aos="zoom-in-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h3> More</h3>
        <h1>Innovate. Collaborate. Transform.</h1>
        <p>
          We innovate to transform businesses. With our collaborative approach,
          we empower digital futures by delivering tailored solutions that drive
          growth and success. Join us in shaping tomorrow's technology
          landscape.
        </p>
        <button class="hover:brightness-110 hover:animate-pulse font-bold py-2 md:py-3 px-4 md:px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-[#e3e6df] text-lg md:text-2xl">
          Know More
        </button>
      </div>
    </section>
  );
};
