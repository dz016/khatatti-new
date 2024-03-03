import React from "react";
import { Link as ScrollLink } from "react-scroll";
import HeroImg from "../assets/hero.jpg";
const Hero = () => {
  return (
    <>
      <section
        className="bg-secondary flex  justify-around items-center   mb:5 py-10  md:py-16"
        id="hero"
      >
        <div className="flex flex-col md:flex-row container mx-auto justify-around items-center md:gap-16  gap-8  ">
          <div className="hero-content  md:w-[40%] w-[90%]">
            <h1 className=" font-rubik md:text-5xl text-3xl font-[700]  md:leading-10 md:mb-9 mb-4 tracking-tighter text-gray-700  text-center md:text-left">
              A spiritual work to beautify your home.
            </h1>
            <div className="flex justify-center md:justify-start  mt-7">
              <p className=" font-rubik w-[80%] font-[400] md:leading-2 md:text-base text-xs leading-tight tracking-tight text-gray-500 md:mb-6  mb-5 text-center md:text-left">
                Inspired by calligraphy,khataatii is a unique way to beautify
                your home.You can have multi-displine art and degisn in the form
                of calligraphy and glass art.
              </p>
            </div>
            <div className="flex md:gap-4 gap-2 items-center justify-center md:justify-start ">
              {" "}
              <ScrollLink
                to="how"
                smooth={true}
                duration={500}
                className="cursor-pointer font-rubik font-[500] text-sm  hover:text-primary duration-500 ease-in transition-all"
              >
                {" "}
                <button
                  className=" bg-primary text-white md:px-4 md:py-2 rounded-md text-base font-[700]  px-2 py-1 hover:bg-green-600 duration-500 transition-all ease-linear "
                  id=""
                >
                  Start beautifying
                </button>
              </ScrollLink>
              <ScrollLink
                to="how"
                smooth={true}
                duration={500}
                className="cursor-pointer font-rubik font-[500] text-sm  hover:text-primary duration-500 ease-in transition-all"
              >
                <button className="bg-white text-gray-700 md:px-4 md:py-2 px-2 py-1 rounded-md text-base font-[700] hover:bg-secondary duration-500 transition-all ease-linear">
                  Learn more &darr;
                </button>
              </ScrollLink>
            </div>
          </div>
          <div className="hero-image md:w-[35%] w-[55%] h-full">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
