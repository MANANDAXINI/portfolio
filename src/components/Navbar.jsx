import { useState } from "react";
import photo2 from "../../public/photo2.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
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
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 flex justify-between h-16 items-center">
        {/* Logo Section */}
        <div className="flex space-x-2 items-center">
          <img src={photo2} className="h-12 w-12 rounded-full object-cover" alt="Profile" />
          <div>
            <h1 className="font-semibold text-xl cursor-pointer">Manan</h1>
            <p className="text-sm text-gray-600">Web Developer</p>
          </div>
        </div>

        {/* Hamburger Menu Toggle for Mobile */}
        <div className="md:hidden cursor-pointer z-50" onClick={() => setMenu(!menu)}>
          {menu ? <RxCross2 size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navItems.map(({ id, text }) => (
            <li key={id} className="relative cursor-pointer">
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                className={`pb-1 transition duration-300 hover:text-blue-500 hover:scale-105 ${activeLink === text && "text-blue-500 font-semibold"}`}
                onClick={() => handleSetActiveLink(text)}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="fixed inset-0 top-16 bg-white z-40 flex flex-col justify-center items-center">
          <div className="h-full flex flex-col justify-start pt-24"> {/* Adjusted here */}
            <ul className="space-y-5 text-xl">
              {navItems.map(({ id, text }) => (
                <li key={id} className="cursor-pointer">
                  <Link
                    onClick={() => handleSetActiveLink(text)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className={`transition duration-300 hover:text-blue-500 hover:scale-105 ${activeLink === text ? "text-blue-500 font-semibold" : "text-gray-600 font-semibold"}`}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
