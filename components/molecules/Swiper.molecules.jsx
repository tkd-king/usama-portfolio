import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SwiperCard from "./SwiperCard";

export default function SwiperCumponent() {
  return (
    <div className="">
      <Swiper
      onResize={20}
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <SwiperCard
            srcl="/assets/images/client1.png"
            srcr="/assets/images/client1.png"
            text1="“Taylor is a professional
                     Designer he really helps my
                     business by providing value to
                      my business."
            text2="Tim Bailey"
            text3="SEO Specialist, Theme Junction"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            srcl="/assets/images/client1.png"
            srcr="/assets/images/client1.png"
            text1="“Taylor is a professional
                     Designer he really helps my
                     business by providing value to
                      my business."
            text2="Tim Bailey"
            text3="SEO Specialist, Theme Junction"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            srcl="/assets/images/client1.png"
            srcr="/assets/images/client1.png"
            text1="“Taylor is a professional
                     Designer he really helps my
                     business by providing value to
                      my business."
            text2="Tim Bailey"
            text3="SEO Specialist, Theme Junction"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            srcl="/assets/images/client1.png"
            srcr="/assets/images/client1.png"
            text1="“Taylor is a professional
                     Designer he really helps my
                     business by providing value to
                      my business."
            text2="Tim Bailey"
            text3="SEO Specialist, Theme Junction"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            srcl="/assets/images/client1.png"
            srcr="/assets/images/client1.png"
            text1="“Taylor is a professional
                     Designer he really helps my
                     business by providing value to
                      my business."
            text2="Tim Bailey"
            text3="SEO Specialist, Theme Junction"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard
            srcl="/assets/images/client1.png"
            srcr="/assets/images/client1.png"
            text1="“Taylor is a professional
                     Designer he really helps my
                     business by providing value to
                      my business."
            text2="Tim Bailey"
            text3="SEO Specialist, Theme Junction"
          />
        </SwiperSlide>
      </Swiper>
    </div >
  );
}
