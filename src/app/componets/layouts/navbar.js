"use client";

import { useState, useEffect } from "react";
import navigations from "@/app/data/navigation";
import "./fonts.css";

export default function Navbar(props) {
    const {pageId} = props;
    const [toggle, setToggle] = useState(null);
    const isToggle = () =>{
        setToggle(!toggle);
    }

    // navlinkElements
    const navigation = navigations.map((navlink, index) => {
        return (
            <li key={navlink.id}>
                <a href={navlink.link} className={`block after:content-[''] after:block after:w-0 after:h-1 md:after:mt-8  hover:after:w-full after:duration-500 ${(pageId == navlink.id) ? "after:bg-white after:w-full":"after:bg-[#979797]"}`}><span className="mr-2 font-bold">{navlink.id}</span>{navlink.name.toUpperCase()}</a>
            </li>
        );
    })

    //nav scroll
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            setScrollValue(window.scrollY);
        });
    });
    const scroll_value = Math.ceil(scrollValue/100);
    let isScroll;
    if(scroll_value > 0){
        isScroll = true;
    }else{
        isScroll = false;
    }


  return (
    <header className={`fixed w-full z-50 text-white font_barlow lg:text-lg ${isScroll ? "bg-[rgba(0,0,0,0.85)]":""}`}>
      <nav className="w-11/12 mx-auto py-8 flex items-center justify-between md:py-0 md:w-full md:pl-8 lg:mt-16 ">
        <div className="md:pt-6 md:pl-10 lg:w-2/12 lg:pt-0">
            <img src="./assets/shared/logo.svg"/>
        </div>

        {/* main Navbar */}
        <div className="hidden relative md:block pt-10 md:px-8 backdrop-blur-3xl backdrop-saturate-[2.25] lg:backdrop-grayscale-[25%] lg:backdrop-saturate-[2] lg:w-8/12 lg:px-[4%] xl:w-6/12">
            <ul className="flex items-center gap-10">
                {navigation}
            </ul>

            {/* line */}
            
            <div className="hidden lg:block absolute lg:w-4/12 xl:w-10/12 lg:left-[-30%] xl:left-[-80%] top-[50%] h-0.5  bg-[rgba(255,255,255,0.5)]"></div>
        </div>

        {/* reponsive Navbar */}
        <div className={`absolute z-40 top-0 px-4 h-screen backdrop-blur-3xl backdrop-grayscale-[50%] pt-32 w-6/12 duration-300 md:hidden ${toggle ? "right-0" : "right-[-100%]"}
         `}>
            <ul className="flex flex-col gap-5">
                {navigation}
            </ul>
        </div>
        <div onClick={isToggle} className={`cursor-pointer relative z-50 md:hidden ${toggle ? "hidden" : "block"}`}>
            <img src="./assets/shared/icon-hamburger.svg"/>
        </div>
        <div onClick={isToggle} className={`cursor-pointer relative z-50 md:hidden ${toggle ? "block" : "hidden"}`}>
            <img src="./assets/shared/icon-close.svg"/>
        </div>
      </nav>
    </header>
  );
}
