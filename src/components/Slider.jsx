import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Slider = ({ testimonials }) => {
  return (
    <Swiper
    slidesPerView={1}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      
      breakpoints={{
        500: {
          slidesPerView:1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1000:{
          slidesPerView: 3,
          spaceBetween: 40,
        },
        
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper py-10 "
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
            <blockquote className="relative">
              <p className="text-lg tracking-tight text-slate-900">
                {testimonial.quote}
              </p>
            </blockquote>
            <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
              <div>
                <div className="font-display text-base text-slate-900">
                  {testimonial.name}
                </div>
              </div>
              <div className="overflow-hidden rounded-full bg-slate-50">
                <img
                  alt=""
                  className="h-14 w-14 object-cover"
                  src={testimonial.image}
                />
              </div>
            </figcaption>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
