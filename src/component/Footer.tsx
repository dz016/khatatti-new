import logo from "../assets/khattaati.png";
import { FaInstagram } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <>
      {" "}
      <section
        className="  flex  justify-around items-center  md:mb-10 mb:5 mt-2"
        id="footer"
      >
        {" "}
        <div className="container mx-auto md:w-[75%] md:px-16 md:py-7 px-8 py-4  grid md:grid-cols-3 grid-cols-1 gap-10 ">
          {" "}
          <div className="flex  justify-center flex-col">
            {" "}
            <div className="nav-logo w-36 cursor-pointer">
              <img src={logo} alt="Logo" />
            </div>
            <p className="text-gray-400 mt-3 text-xs ml-1">
              Copyright © 2024 by khattaati,Inc , All right reserved
            </p>
            <div className="flex gap-3 mt-3" id="social-media">
              <FaInstagram className="text-2xl text-gray-500" />
              <IoMailUnreadOutline className="text-2xl text-gray-500" />
            </div>
          </div>
          <div className="flex  justify-center flex-col">
            {" "}
            <div className="">
              <h1>Contact us</h1>
            </div>
            <p className="text-gray-400 mt-3 text-xs">
              Gutapora Amdakadal Lalbazar
            </p>
            <p className="text-gray-400 mt-3 text-xs ">
              dadwoodzargar08@gmail.com
            </p>
          </div>
          <div className="flex  justify-center flex-col">
            {" "}
            <div className="">
              <h1>About me</h1>
            </div>
            <p className="text-gray-400 mt-3 text-xs ">Tuba Kawoosa</p>
            <p className="text-gray-400 mt-3 text-xs ">From Srinagar,Kashmir</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
