import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/khattaati.png";

const Navbar = () => {
  return (
    <div className=" sticky top-0 z-50 bg-secondary text-black ">
      <nav className=" mx-auto flex items-center justify-between p-4 container">
        {/* Navbar Logo */}

        <div className="nav-logo w-48 cursor-pointer">
          <img src={logo} alt="Logo" />
        </div>

        {/* Navbar Links */}
        <div className="nav-links">
          <ul className="md:flex hidden items-center justify-between gap-4">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer font-rubik font-[500] text-sm"
              >
                how it works.
              </ScrollLink>
            </li>
            <li className="font-rubik">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer font-rubik   font-[500] text-sm"
              >
                testimonial.
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer font-rubik font-[500] text-sm "
              >
                contact.
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer font-rubik"
              >
                <button className=" bg-primary text-white px-3 py-1.5 rounded-md font-[500] text-sm">
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
