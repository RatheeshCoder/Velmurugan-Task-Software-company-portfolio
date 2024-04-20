import React from "react";
import Slider from "./Slider";
import { testimonialsData } from "../Data/WebData";

const SliderTestimonials = () => {
  return (
    <section id="testimonials" className="bg-[#30353b] py-5 sm:py-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
        <div className="max-w-2xl mx-auto mt-10 mb-10 md:text-center">
          <h2 className="text-3xl tracking-tight font-extrabold font-display text-[#e3e6df] sm:text-4xl">
            What Our Customers Are Saying
          </h2>
        </div>
        <Slider testimonials={testimonialsData} />
      </div>
    </section>
  );
};

export default SliderTestimonials;
