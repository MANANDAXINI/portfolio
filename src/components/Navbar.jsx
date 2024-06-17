import { useState } from "react";
import photo2 from "../../public/photo2.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("Home"); // State to track active link
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  const handleSetActiveLink = (text) => {
    setActiveLink(text);
    setMenu(false); // Close menu on mobile after clicking a link
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed left-0 right-0 top-0 z-50 bg-white">
      <div className="flex justify-between h-16 items-center">
        <div className="flex space-x-2 items-center">
          <img src={photo2} className="h-12 w-12 rounded-full object-cover" alt="Profile" />
          <div>
            <h1 className="font-semibold text-xl cursor-pointer">
              Manan
            </h1>
            <p className="text-sm text-gray-600">Web Developer</p>
          </div>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="relative cursor-pointer"
            >
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass={text === "Contact" ? "text-blue-500 font-semibold" : activeLink === text ? "text-blue-500 font-semibold" : "text-gray-600 font-semibold"}
                className={`pb-1 transition duration-300 hover:text-blue-500 hover:scale-105 ${activeLink === text && "text-blue-500 font-semibold"}`}
                onClick={() => handleSetActiveLink(text)}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Toggle */}
        <div
          onClick={() => setMenu(!menu)}
          className="md:hidden cursor-pointer"
        >
          {menu ? <RxCross2 size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>
      {/* Mobile Menu */}
      {menu && (
        <div className="bg-white md:hidden">
          <ul className="flex flex-col items-center space-y-5 text-xl pt-5 pb-10">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="relative cursor-pointer"
              >
                <Link
                  onClick={() => handleSetActiveLink(text)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass={text === "Contact" ? "text-blue-500 font-semibold" : activeLink === text ? "text-blue-500 font-semibold" : "text-gray-600 font-semibold"}
                  className={`pb-1 transition duration-300 hover:text-blue-500 hover:scale-105 ${activeLink === text && "text-blue-500 font-semibold"}`}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
