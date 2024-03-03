import img1 from "../assets/gallery/gallery-1.jpg";
import img2 from "../assets/gallery/gallery-2.jpg";
import img3 from "../assets/gallery/galllery-3.jpg";
import img4 from "../assets/gallery/gallery-4.jpg";
import img5 from "../assets/gallery/gallery-5.jpg";
import img6 from "../assets/gallery/gallery-6.jpg";
import img7 from "../assets/gallery/gallery-7.jpg";
import img8 from "../assets/gallery/gallery-8.jpg";
import img9 from "../assets/gallery/gallery-9.jpg";
import img10 from "../assets/gallery/gallery-10.jpg";
import img11 from "../assets/gallery/gallery-11.jpg";
import img12 from "../assets/gallery/gallery-12.jpg";

const Art = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];
  return (
    <>
      <section
        className="flex  justify-center items-center    bg-secondary mt-10 md:p2 p-5"
        id="art"
      >
        <div className="  md:px-8  flex items-center  md:gap-24 gap-12 flex-col md:flex-row ">
          <div className="art-content md:w-[75%] w-[90%] ">
            <h1 className=" text-primary font-[700]">Art work</h1>
            <h2 className="text-gray-600 mt-1 font-rubik md:text-4xl text-3xl font-[700]  md:leading-10 md:mb-9 mb-4 tracking-tighter  md:text-left">
              {" "}
              Beautify your home in 3 simple steps
            </h2>
            <div className="grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-5 ">
              {" "}
              <p className="text-sm text-gray-800 font-thin">
                I owe it to khataatii Art for introducing me to her work. I look
                forward to following her bright career.
              </p>
              <p className="text-sm text-gray-800 font-thin">
                I received the painting today and it's gorgeous.I love it and
                it's even better in person. Just perfect for the space.
              </p>
              <p className="text-sm text-gray-800 font-thin">
                I received this item promptly last week and I love it. It is so
                beautiful and looks fantastic in the space.
              </p>
              <p className="text-sm text-gray-800 font-thin">
                I just received the painting. It is stunning and the colors are
                true to the image! Thank you khataatii!
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-4  ">
            {images.map((img, index) => {
              return (
                <div className="flex w-[90%] h-[90%] items-center justify-center overflow-hidden">
                  <img
                    src={img}
                    key={index}
                    className=" transform transition-transform hover:scale-110"
                  ></img>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Art;
