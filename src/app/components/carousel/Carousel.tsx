"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { carousel } from "../../data/carousel";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./carousel.scss";

export default function Carousel() {
  return (
    <section className="h-[20%]  max-w-full">
      <Swiper
        spaceBetween={50}
        speed={5300}
        direction="horizontal"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        className="sample-slider front"
        observer={true}
        observeParents={true}
        slidesPerView={3}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {carousel.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item.path}
              alt="icon"
              width={100}
              height={100}
              className=""
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={50}
        speed={5300}
        direction="horizontal"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        loop={true}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        className="sample-slider rotated"
        slidesPerView={3}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {carousel.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item.path}
              alt="icon"
              width={100}
              height={100}
              className=""
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
