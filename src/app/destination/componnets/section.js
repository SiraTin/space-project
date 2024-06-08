"use client";

import { useState } from "react";
import destinations from "@/app/data/destinations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Controller, EffectFade } from "swiper/modules";
import "swiper/css";
import "./pagination.css";
import "./fonts.css";
import "swiper/css/effect-fade";

export default function Destinationpage() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  //description Elements
  const detailElements = destinations.map((items, index) => {
    return (
      <SwiperSlide>
        <div id={items.id} className="text-center lg:text-left">
          <h2 className="font_bellefair text-4xl lg:text-7xl">
            {items.name.toUpperCase()}
          </h2>
          <p className="font_barlow py-4 text-lg text-[#D0D6F9] lg:text-2xl">
            {items.description}
          </p>
          <div className="w-full h-0.5 my-6 bg-[rgba(255,255,255,0.1)]"></div>
          <div className="flex justify-around mt-6 lg:text-center lg:justify-start lg:gap-20">
            <div>
              <h2 className="font_barlow text-sm text-[#D0D6F9]">
                AVG. DISTANCE
              </h2>
              <p className="font_bellefair text-xl md:text-3xl">
                {items.distance.toUpperCase()}
              </p>
            </div>
            <div>
              <h2 className="font_barlow text-sm text-[#D0D6F9]">
                EST. TRAVEL TIME
              </h2>
              <p className="font_bellefair text-xl md:text-3xl">
                {items.travelTime.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  //image Elements
  const imageElements = destinations.map((images, index) => {
    return (
      <SwiperSlide>
        <div className="max-w-80 mx-auto lg:max-w-full">
          <img src={images.image} className="w-auto mx-auto" />
        </div>
      </SwiperSlide>
    );
  });

  //paginate
  const navElements = destinations.map((nav) => nav.name);
  const paginations = {
    el: ".nav-planet",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + navElements[index] + "</span>"
      );
    },
  };

  return (
    <section className="py-24 px-8 text-white md:w-10/12 md:mx-auto md:pt-36 lg:w-11/12">
      <h1 className="text-center text-xl md:text-left lg:text-2xl lg:pl-36">
        <span className="font-bold text-gray-500">01</span> PICK YOUR DESTINATION
      </h1>
      <div className="lg:flex lg:items-center lg:gap-10 lg:mt-14">
        <div className="py-8 lg:w-6/12 ">
          <Swiper
            modules={[Controller, EffectFade]}
            loop={true}
            effect={"fade"}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
          >
            {imageElements}
          </Swiper>
        </div>

        <div className="lg:w-6/12">
          <div className="text-center uppercase pb-4 text-[#D0D6F9] font_barlow text-xl lg:text-left lg:text-2xl">
            <div className="nav-planet flex justify-center lg:justify-start"></div>
          </div>
          <Swiper
            modules={[Controller, Pagination]}
            loop={true}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
            pagination={paginations}
          >
            {detailElements}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
