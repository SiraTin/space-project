"use client";
import { useState } from "react";
import technologies from "@/app/data/technologies";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Pagination } from "swiper/modules";
import "swiper/css";
import "./fonts.css";
import "./paginate.css";

export default function Technologypage() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  //paginate
  const navElements = technologies.map((nav) => nav.id);
  const paginations = {
    el: ".nav-tech",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + navElements[index] + "</span>"
      );
    },
  };

  //detail
  const detailElements = technologies.map((detail, index) => {
    return (
      <SwiperSlide>
        <div className="text-center lg:text-left">
          <h2 className="font_barlow uppercase md:text-2xl">
            THE TERMINOLOGY…
          </h2>
          <h2 className="font_bellefair text-2xl my-8 md:text-5xl">
            {detail.name}
          </h2>
          <p className="font_barlow md:text-2xl ">{detail.description}</p>
        </div>
      </SwiperSlide>
    );
  });

  //image
  const imageElements = technologies.map((items, index) => {
    return (
      <SwiperSlide>
        <div className="lg:flex lg:justify-end lg:max-w-[415px] xl:max-w-[515px] ">
          <img src={items.imageMobile} className="lg:hidden w-full" />
          <img src={items.imageDesktop} className="hidden w-full lg:block " />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <section
      className="w-full min-h-screen bg-no-repeat bg-cover text-white
        py-28 md:pt-40 lg:pt-52 xl:pt-48 lg:pb-0
        bg-[url('/assets/technology/background-technology-mobile.jpg')]
        md:bg-[url('/assets/technology/background-technology-tablet.jpg')]
        lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]"
    >
      <div className="lg:w-full lg:mx-auto">
        <h2 className="font_barlow text-xl text-center md:text-3xl md:text-left md:w-11/12 md:mx-auto lg:text-left lg:ml-[8%]">
          <span className="mr-2 font-bold">03</span> SPACE LAUNCH 101
        </h2>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-center lg:items-center lg:w-11/12 lg:ml-auto lg:gap-10 lg:pt-10 xl:pt-0">
          <div className="w-11/12 mx-auto lg:flex lg:gap-10 lg:w-6/12 lg:items-center">
            <div>
              <div className="nav-tech font_bellefair flex justify-center lg:flex-col "></div>
            </div>
            <Swiper
              modules={[Controller, Pagination]}
              loop={true}
              pagination={paginations}
              onSwiper={setFirstSwiper}
              controller={{ control: secondSwiper }}
            >
              {detailElements}
            </Swiper>
          </div>
          <div className="w-full my-8 lg:w-6/12">
            <Swiper
              modules={[Controller, Pagination]}
              loop={true}
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
              className="lg:max-w-[415px] xl:max-w-[515px]"
            >
              {imageElements}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
