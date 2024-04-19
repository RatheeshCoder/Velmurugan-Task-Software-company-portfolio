import React from "react";
import CEO from "../assets/CEO.png";
import rightImg from "../assets/Home-right.png";

export const Hero = () => {
  return (
    <section className="Hero-main">
      <div className="left">
        <div className="top">
          <h3>DESIGN INSPIRATION</h3>
          <h1>Convallis turpis erat tempus, viverra aliquet. </h1>
          <a className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Learn More</span>
          </a>
        </div>

        <div className="bottom">
          <p>I feel so much less stressed ❤️ as I now know by the book.”</p>
          <div className="ceo">
            <img src={CEO} alt="CEO" />
            <h3>
              Andry Ford<span></span>CEO at Whatever
            </h3>
          </div>
        </div>
      </div>

      <div className="right">
        <img src={rightImg} alt="" />
      </div>
    </section>
  );
};
