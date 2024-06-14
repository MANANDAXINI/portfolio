import { useState } from "react";
import photo2 from "../../public/photo2.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const navItems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Portfolio" },
        { id: 4, text: "Experience" },
        { id: 5, text: "Contact" },
    ];

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed left-0 right-0 top-0 z-50 bg-white">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex space-x-2">
                        <img src={photo2} className="h-16 w-16 rounded-full" alt="Profile" />
                        <h1 className="font-semibold text-xl cursor-pointer">
                            Manan
                            <p className="text-sm">Web Developer</p>
                        </h1>
                    </div>
                    {/* desktop */}
                    <div>
                        <ul className="hidden md:flex space-x-8">
                            {navItems.map(({ id, text }) => (
                                <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>

<Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                                    
                                    
                                    
                                    
                                    
                                    </li>
                            ))}
                        </ul>
                        <div onClick={() => setMenu(!menu)} className="md:hidden">
                            {menu ? <AiOutlineMenu size={24}/> : <RxCross2 size={24} /> }
                        </div>
                    </div>
                </div>
                {/* mobile */}
                {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
            </div>
        </>
    );
};

export default Navbar;
