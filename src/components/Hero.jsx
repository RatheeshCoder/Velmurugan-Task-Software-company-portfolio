import React from "react";
import CEO from "../assets/CEO.png";
import rightImg from "../assets/Home-right.png";

export const Hero = () => {
  return (
    <section className="Hero-main">
      <div
        className="left"
        data-aos="zoom-out-right"
        data-aos-easing="ease-in-back"
        data-aos-delay="500"
      >
        <div className="top">
          <h3>
            Your Trusted <span>Partner</span>
          </h3>
          <h1>Empowering businesses with innovative solutions </h1>
          <button class="hover:brightness-110 hover:animate-pulse font-bold py-2 md:py-3 px-4 md:px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-[#e3e6df] text-lg md:text-2xl">
            Explore Our Services
          </button>
        </div>

        <div className="bottom">
          <p>
            "Discover the peace of mind ❤️ that comes from doing it 'by the
            code'."
          </p>
          <div className="ceo">
            <img src={CEO} alt="CEO" />
            <h3>
              Andry Ford<span>CEO at Whatever</span>
            </h3>
          </div>
        </div>
      </div>

      <div
        className="right"
        data-aos="zoom-out-left"
        data-aos-easing="ease-in-back"
        data-aos-delay="500"
      >
        <img src={rightImg} alt="" />
      </div>
    </section>
  );
};
