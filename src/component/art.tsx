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
      <section className="flex  justify-center items-center  pt-5 bg-secondary mt-10">
        <div className="  px-8  flex items-center  gap-24 flex-col md:flex-row ">
          <div className="art-content w-[75%] ">
            <h1 className=" text-primary font-[700]">Art work</h1>
            <h2 className="text-gray-600 mt-1 font-rubik md:text-4xl text-3xl font-[700]  md:leading-10 md:mb-9 mb-4 tracking-tighter  text-center md:text-left">
              {" "}
              Beautify your home in 3 simple steps
            </h2>
            <div className="grid grid-cols-2 gap-10">
              {" "}
              <p>
                I owe it to khataatii Art for introducing me to her work. I look
                forward to following her bright career.
              </p>
              <p>
                I received the painting today and it's gorgeous.I love it and
                it's even better in person. Just perfect for the space.
              </p>
              <p>
                I received this item promptly last week and I love it. It is so
                beautiful and looks fantastic in the space.
              </p>
              <p>
                I just received the painting. It is stunning and the colors are
                true to the image! Thank you khataatii!
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-4  ">
            {images.map((img, index) => {
              return (
                <img src={img} key={index} className="w-[90%] h-[90%]"></img>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Art;
