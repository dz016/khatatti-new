import HeroImg from "../assets/hero.jpg";
const Hero = () => {
  return (
    <>
      <section className="bg-secondary h-[80vh] flex  justify-around items-center   mb:5 pt-7 pb-8">
        <div className="flex flex-col md:flex-row container mx-auto justify-around items-center f-full md:gap-16  gap-8  ">
          <div className="hero-content h-full md:w-[40%] w-[90%]">
            <h1 className=" font-rubik md:text-5xl text-3xl font-[500]  md:leading-10 md:mb-9 mb-4 tracking-tighter text-gray-700  text-center md:text-left">
              A spiritual work to beautify your home.
            </h1>
            <p className=" font-rubik w-[100%] font-[400] md:leading-2 md:text-base text-sm leading-tighter tracking-tighter text-gray-600 md:mb-6  mb-2 text-center md:text-left">
              Inspired by calligraphy,khataatii is a unique way to beautify your
              home.You can have multi-displine art and degisn in the form of
              calligraphy and glass art.
            </p>
            <div className="flex md:gap-4 gap-2 items-center justify-center md:justify-start flex-col md:flex-row">
              {" "}
              <button
                className=" bg-primary text-white md:px-4 md:py-2 rounded-md text-base font-[700]  px-2 py-1 "
                id=""
              >
                Start beautifying
              </button>
              <button className="bg-white text-gray-700 md:px-4 md:py-2 px-2 py-1 rounded-md text-base font-[700]">
                Learn more &darr;
              </button>
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
