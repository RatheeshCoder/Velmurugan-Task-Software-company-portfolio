import React from "react";
import Slider from "./Slider";
import { testimonialsData } from "../Data/WebData";

const SliderTestimonials = () => {
  return (
    <section id="testimonials" className="bg-slate-50 py-5 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center mt-10 mb-10">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            What Our Customers Are Saying
          </h2>
        </div>
        <Slider testimonials={testimonialsData} />
      </div>
    </section>
  );
};

export default SliderTestimonials;
