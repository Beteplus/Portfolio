import React from "react";
import "./Testimonial.css";
import { Data } from "./Data";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section_title">My client Say</h2>
      <span className="section_subtitle">Testimonial</span>
      <Swiper
  className="testimonial_container"
  loop={true}
  spaceBetween={24}
//   pagination={{
//     clickable: true,
//   }}
  breakpoints={{
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  }}
//   modules={[Pagination]}
>
  {Data.map((item) => (
    <SwiperSlide className="testimonial_card" key={item.id}>
      <img src={item.image} alt={item.title} className="testimonial_image" />
      <h3 className="testimonial_name">{item.title}</h3>
      <p className="testimonial_description">{item.description}</p>
    </SwiperSlide>
  ))}
</Swiper>
    </section>
  );
};

export default Testimonial;
