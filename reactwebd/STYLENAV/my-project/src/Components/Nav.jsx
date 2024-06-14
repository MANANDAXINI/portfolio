import { useState } from "react"
import { Link } from "react-scroll";
import {FaTimes} from "react-icons/fa" ;
import {CiMenuFries} from "react-icons/ci";


function Nav() {
    const [click,setclick]=useState(false);
    const Handleclick = ()=>setclick(!click)
    const content=<>
    <div className="lg:hidden black absolute top-16 w-full left-0 right-0 bg-slate-900">
        <ul className="text-center text-xl p-20">
            <Link spy={true} smooth={true}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
            
            </Link>
            <Link spy={true} smooth={true}>
            <li>About</li>
            
            </Link>
            <Link spy={true} smooth={true}>
            <li>Projects</li>
            
            </Link>

            <Link spy={true} smooth={true}>
            <li>Resume</li>
            
            </Link>

            <Link spy={true} smooth={true}>
            <li>Contact</li>
            
            </Link>
        </ul>
    </div>
    </>
  return (
    <Nav>
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
            <div className="flex items-center flex-1">
                <span className="text-3xl font-bold">
                    Logo
                </span>
            </div >
            <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal">
                <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                    <Link spy={true} smooth={true}>
            <li className="hover:bg-fuchsia-500 transition border-b-2 border border-slate-800">Home</li>
            
            </Link>
            <Link spy={true} smooth={true}>
            <li className="hover:bg-fuchsia-500 transition border-b-2 border border-slate-800">About</li>
            
            </Link>
            <Link spy={true} smooth={true}>
            <li className="hover:bg-fuchsia-500 transition border-b-2 border border-slate-800">Projects</li>
            
            </Link>

            <Link spy={true} smooth={true}>
            <li className="hover:bg-fuchsia-500 transition border-b-2 border border-slate-800">Resume</li>
            
            </Link>

            <Link spy={true} smooth={true}>
            <li className="hover:bg-fuchsia-500 transition border-b-2 border border-slate-800">Contact</li>
            
            </Link>
        </ul>
                    
                </div>
            </div>

            <div>
                {click && content}
            </div>
           <button className="block sm:hidden transition" onClick={Handleclick}>
            {click ? <FaTimes/> : <CiMenuFries/>}
           </button>
        </div>
    </Nav>
  )
}

export default Nav
