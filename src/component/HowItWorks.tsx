import img1 from "../assets/app/app-screen-1.png";
import img2 from "../assets/app/app-screen-2.png";
import img3 from "../assets/app/app-screen-3.png";
const HowItWorks = () => {
  const howArray = [
    {
      step: "01",
      tittle: "Text us once you want something to buy.",
      description:
        "When you like something just mail us or text us on instagram available on the page. The best way to beautify your home",
      image: img1,
    },
    {
      step: "02",
      tittle: "Text us once you want something to buy.",
      description:
        "When you like something just mail us or text us on instagram available on the page. The best way to beautify your home",
      image: img2,
    },
    {
      step: "03",
      tittle: "Text us once you want something to buy.",
      description:
        "When you like something just mail us or text us on instagram available on the page. The best way to beautify your home",
      image: img3,
    },
    {
      step: "04",
      tittle: "Text us once you want something to buy.",
      description:
        "When you like something just mail us or text us on instagram available on the page. The best way to beautify your home",
      image: img3,
    },
    {
      step: "05",
      tittle: "Text us once you want something to buy.",
      description:
        "When you like something just mail us or text us on instagram available on the page. The best way to beautify your home",
      image: img3,
    },
  ];

  return (
    <>
      <section className="  flex  justify-around items-center  md:mb-10 mb:5 mt-2">
        {" "}
        <div className="container mx-auto  md:px-16 md:py-7 px-8 py-4  ">
          {" "}
          <h1 className=" text-primary font-[700]">how it works</h1>
          <h2 className="text-gray-600 mt-1 font-rubik md:text-4xl text-3xl font-[700]  md:leading-10 md:mb-9 mb-4 tracking-tighter  text-center md:text-left">
            Beautify your home in 3 simple steps{" "}
          </h2>
          <div>
            {howArray.map((item) => (
              <div
                className={`flex ${
                  Number(item.step) % 2 === 0
                    ? "md:flex-row-reverse"
                    : "md:flex-row"
                } items-center  gap-10 mt-10 justify-between md:mb-20 flex-col`}
              >
                <div key={item.step} className="md:w-[40%] wd-[80%]">
                  <p className="font-[700] text-6xl text-gray-300">
                    {item.step}
                  </p>
                  <h3 className=" text-gray-600 mt-1 font-rubik md:text-3xl text-xl font-[700]  md:leading-10  tracking-tighter md:text-left">
                    {item.tittle}
                  </h3>
                  <p className=" font-rubik w-[100%] font-[400] md:leading-2 md:text-base text-sm leading-tighter tracking-tighter text-gray-600 md:mb-6  mb-2 md:text-left">
                    {item.description}
                  </p>
                </div>
                <div className="relative flex justify-center items-center md:w-[40%] w-[90%] h-full">
                  <div className="absolute bg-secondary w-[60%] h-[70%]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full -z-40"></div>
                  <img src={item.image} alt="" className="w-[50%]" />
                  <div className="absolute bg-customGreen w-[45%] h-[55%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full -z-10 "></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
