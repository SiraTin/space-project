"use client";

import crews from "@/app/data/crews";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Pagination } from "swiper/modules";
import "swiper/css";
import "./crew.css";
import "./fonts.css";

export default function Crewpage() {
  //crews detail
  const crewElements = crews.map((crews, index) => {
    return (
      <SwiperSlide>
        <div id={crews.id} className="text-white w-11/12 mx-auto lg:w-full">
          <h2 className="font_bellefair uppercase text-xl lg:text-2xl">{crews.position}</h2>
          <h2 className="font_bellefair uppercase py-4 text-2xl lg:text-4xl xl:text-6xl">{crews.name}</h2>
          <p className="font_barlow text-lg xl:text-xl">{crews.description}</p>
        </div>
      </SwiperSlide>
    );
  });

  //crews image
  const imageElements = crews.map((image, index) => {
    return (
      <SwiperSlide>
        <div className="w-10/12 mx-auto ">
          <div className="max-w-96 relative z-30 max-h-96 mx-auto md:max-w-full md:max-h-full">
            <img src={image.image} className="mx-auto" />
          </div>
          <div className="w-full h-0.5 relative z-40 bg-gray-400 md:hidden"></div>
        </div>
      </SwiperSlide>
    );
  });

  //control swiper

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  //pagination crew
  const navElements = (nav, index) => nav.id;

  const paginations = {
    el: ".nav-crew",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">'  + "</span>";
    },
  };

  return (
    <section
      className="w-full min-h-screen bg-no-repeat bg-cover 
        py-28 md:py-0 md:pt-36
        flex flex-col justify-end
        bg-[url('/assets/crew/background-crew-mobile.jpg')]
        md:bg-[url('/assets/crew/background-crew-tablet.jpg')]
        lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]"
    >
        <div className="w-full lg:w-10/12 mx-auto font_barlow ">
        <h2 className="text-center text-white text-3xl lg:text-left">
        <span className="mr-4 text-gray-600 font-bold">02</span>MEET YOUR CREW
      </h2>

      <div
        className="flex flex-col-reverse py-10 text-center mx-auto
       
      md:flex-col md:justify-between md:pb-0
      lg:flex-row lg:text-left lg:w-full "
      >
        <div className="py-8 lg:w-6/12 flex flex-col-reverse md:flex-col ">
          <Swiper
            modules={[Controller, Pagination]}
            loop={true}
            onSwiper={setFirstSwiper}
            pagination={paginations}
            controller={{ control: secondSwiper }}
            className="w-full"
          >
            {crewElements}  
          </Swiper>
          <div className="nav-crew pt-4 pb-8 flex justify-center md:pb-10 lg:justify-start"></div>
        </div>
        
        <div className="lg:w-6/12">
          <Swiper
            modules={[Controller]}
            loop={true}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
          >
            {imageElements}
          </Swiper>
        </div>
      </div>
        </div>
 
    </section>
  );
}
