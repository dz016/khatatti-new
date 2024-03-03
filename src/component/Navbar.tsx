import logo from "../assets/khattaati.png";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`sticky top-0 z-5 bg-secondary text-black  ${
        !open ? "opacity-90" : "opacity-100"
      } z-50 transition-transform duration-400 ease-in `}
    >
      <nav className=" mx-auto flex items-center justify-between p-4 container  relative">
        {/* Navbar Logo */}

        <div className="nav-logo  flex items-center justify-between z-50 w-full md:w-auto">
          <ScrollLink to="hero" smooth={true} duration={500}>
            <img src={logo} alt="Logo" className="w-36 cursor-pointer" />
          </ScrollLink>

          <div className="md:hidden block z-10  ">
            <IoIosMenu className="text-3xl" onClick={() => setOpen(!open)} />
          </div>
        </div>

        {/* Navbar Links */}
        <div className="nav-links  ">
          <ul className="md:flex hidden items-center justify-between gap-4 ">
            <li>
              <ScrollLink
                to="how"
                smooth={true}
                duration={500}
                className="cursor-pointer font-rubik font-[500] text-sm  hover:text-primary duration-500 ease-in transition-all"
              >
                how it works.
              </ScrollLink>
            </li>
            <li className="font-rubik">
              <ScrollLink
                to="art"
                smooth={true}
                duration={500}
                className="cursor-pointer font-rubik   font-[500] text-sm  hover:text-primary duration-500 ease-in transition-all"
              >
                testimonial.
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="footer"
                smooth={true}
                duration={500}
                className="cursor-pointer font-rubik font-[500] text-sm  hover:text-primary duration-500 ease-in transition-all"
              >
                contact.
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="cta"
                smooth={true}
                duration={500}
                className="cursor-pointer font-rubik"
              >
                <button className=" bg-primary text-white px-3 py-1.5 rounded-md font-[500] text-sm  hover:bg-green-700 duration-500 ease-in transition-all">
                  Start Buying
                </button>
              </ScrollLink>
            </li>
          </ul>
          {/* Mobile Menu */}
          <ul
            className={`md:hidden  bg-gradient-to-b from-secondary to-primary h-screen w-full absolute top-0 ${
              open ? "left-0" : "left-[-100%]"
            } flex flex-col items-center justify-center gap-4 duration-300 ease-linear  `}
          >
            <li>
              <ScrollLink
                to="how"
                smooth={true}
                duration={500}
                className="cursor-pointer font-rubik font-[700] text-sm"
                onClick={() => setOpen(!open)}
              >
                how it works.
              </ScrollLink>
            </li>
            <li className="font-rubik">
              <ScrollLink
                to="art"
                smooth={true}
                duration={500}
                className="cursor-pointer font-rubik   font-[700] text-sm hover:text-primary duration-500 ease-in transition-all"
                onClick={() => setOpen(!open)}
              >
                testimonial.
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                onClick={() => setOpen(!open)}
                to="footer"
                smooth={true}
                duration={900}
                className="cursor-pointer font-rubik font-[700] text-sm  hover:text-primary duration-500 ease-in transition-all"
              >
                contact.
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="cta"
                smooth={true}
                duration={500}
                className="cursor-pointer font-rubik"
              >
                <button
                  className=" bg-primary text-white px-3 py-1.5 rounded-md font-[500] text-sm hover:text-primary  hover:bg-customDarkGreen duration-500 ease-in transition-all"
                  onClick={() => setOpen(!open)}
                >
                  Start Buying
                </button>
              </ScrollLink>
            </li>
          </ul>
        </div>
      </nav>{" "}
    </div>
  );
};

export default Navbar;
