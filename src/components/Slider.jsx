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
      className="py-10 mySwiper "
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="relative rounded-2xl bg-[#121315] p-6 shadow-xl shadow-[#e3e6df]/10">
            <blockquote className="relative">
              <p className="text-lg tracking-tight text-[#e3e6df]">
                {testimonial.quote}
              </p>
            </blockquote>
            <figcaption className="relative flex items-center justify-between pt-6 mt-6 border-t border-[#8ebbff]">
              <div>
                <div className="text-base font-display text-[#e3e6df]">
                  {testimonial.name}
                </div>
              </div>
              <div className="overflow-hidden rounded-full bg-[#e3e6df]">
                <img
                  alt=""
                  className="object-cover h-14 w-14"
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
