"use clinet";

import "./fonts.css";

export default function Landing() {
  return (
    <section className="py-36 w-full min-h-screen 
    bg-[url('/assets/home/background-home-mobile.jpg')]
    md:bg-[url('/assets/home/background-home-tablet.jpg')]
    lg:bg-[url('/assets/home/background-home-desktop.jpg')]
    bg-no-repeat bg-cover
    md:pt-56 lg:pt-80
    flex flex-col justify-center">
      <div className="w-11/12 mx-auto text-white flex flex-col gap-20 lg:flex-row lg:items-center lg:w-10/12 lg:justify-center">
        <div className="text-center lg:w-6/12 lg:text-left">
          <h2 className="font_barlow text-2xl md:text-4xl">SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className="font_bellefair text-8xl py-10 md:text-9xl">SPACE</h1>
          <p className="font_barlow text-lg md:text-2xl">
            Let’s face it if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="lg:w-6/12">
        <div className="text-center w-[12rem] mx-auto bg-white text-black rounded-full duration-300 hover:shadow-[0_0px_0px_50px_rgba(255,255,255,0.3)]
        lg:w-[18rem] lg:h-[18rem] flex flex-col justify-center">
            <a href="/destination" className="font_bellefair block py-20 text-xl md:text-2xl lg:text-3xl">
                EXPLORE
            </a>
        </div>
        </div>
      </div>
    </section>
  );
}
