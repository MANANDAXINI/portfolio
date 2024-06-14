import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const content = (
        <div className="lg:hidden black absolute top-16 w-full left-0 right-0 bg-slate-900">
            <ul className="text-center text-xl p-20">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                    <Link to="home" spy={true} smooth={true}>Home</Link>
                </li>
                <li>About</li>
                <li>Projects</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
        </div>
    );

    return (
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
            <div className="flex items-center flex-1">
                <span className="text-3xl font-bold">Logo</span>
            </div>
            <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal">
                <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                        <li className="hover:bg-fuchsia-500 transition border-b-2 border border-slate-800">
                            <Link to="home" spy={true} smooth={true}>Home</Link>
                        </li>
                        <li className="hover:bg-fuchsia-500 transition border-b-2 border border-slate-800">
                            <Link to="about" spy={true} smooth={true}>About</Link>
                        </li>
                        <li className="hover:bg-fuchsia-500 transition border-b-2 border border-slate-800">
                            <Link to="projects" spy={true} smooth={true}>Projects</Link>
                        </li>
                        <li className="hover:bg-fuchsia-500 transition border-b-2 border border-slate-800">
                            <Link to="resume" spy={true} smooth={true}>Resume</Link>
                        </li>
                        <li className="hover:bg-fuchsia-500 transition border-b-2 border border-slate-800">
                            <Link to="contact" spy={true} smooth={true}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>{click && content}</div>
            <button className="block sm:hidden transition" onClick={handleClick} aria-label="Toggle menu">
                {click ? <FaTimes /> : <CiMenuFries />}
            </button>
        </div>
    );
}

export default Navbar;
