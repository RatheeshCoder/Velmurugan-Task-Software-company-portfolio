import React from "react";
import leftImg from "../assets/About2-left.svg";

export const About2 = () => {
  return (
    <section className="About2">
      <div className="left">
        <img src={leftImg} alt="" />
      </div>

      <div className="right">
        <h3>Know More</h3>
        <h1>We are The Best SEO Company</h1>
        <p>
          Whether you do a search for “London seo”, “London web or a variety of
          other highly competitive terms in our industry you will find that we
          completely dominate our competitors at our own game. Further, you will
          see we are the top rated firm with 67 reviews on Google giving us 4.8
          stars.
        </p>
        <a className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Learn More</span>
        </a>
      </div>
    </section>
  );
};
