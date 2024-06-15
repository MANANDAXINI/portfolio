import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiOpencv } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:mt-24 mt-12 md:order-1 order-2">
         <span>
            Welcome To My <strong>Portfolio</strong>
         </span>
          <div className="flex items-center">
            <h1 className="text-4xl font-bold text-gray-800 pt-3 mt-3">Hi, I am <strong>Manan Daxini</strong></h1>
          </div>
          <div className="flex text-2xl md:text-4xl">
            <h1 className="text-gray-800"> <strong>A passionate</strong></h1>{" "}
            <ReactTyped
              className="text-red-700 font-bold px-1"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={50}
              backSpeed={60}
              loop={true}
            />
          </div>
          <p className="text-gray-800 text-lg mt-3 pt-3">
            I am a <strong>frontend developer</strong> , proficient in C and C++ for data structures and algorithms, and currently exploring backend development. My knowledge extends to Java, OpenCV, and Python, enabling me to tackle various technical challenges effectively.
          </p>
          <div className="flex space-x-5 py-6 mt-5">
            <div>
              <h3 className="text-xl font-bold text-gray-700">Available On</h3>
              <ul className="flex space-x-5 py-1">
                <li>
                  <a href="https://twitter.com/daxini_manan?t=5mZELgT5f1VKEDT74XvzrA&s=08" target="_blank">
                    <RiTwitterXLine className="text-2xl cursor-pointer hover:scale-110 hover:text-3xl duration-200" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/manan_daxini25/?hl=en" target="_blank">
                    <FaInstagram className="text-2xl cursor-pointer hover:scale-110 hover:text-3xl duration-200" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/manan-daxini-180b69247/" target="_blank">
                    <FaLinkedin className="text-2xl cursor-pointer hover:scale-110 hover:text-3xl duration-200" />
                  </a>
                </li>
                <li>
                  <a href="https://discord.com/channels/@me" target="_blank">
                    <FaDiscord className="text-2xl cursor-pointer hover:scale-110 hover:text-3xl duration-200" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold  mx-4 text-gray-700">Currently Working On</h3>
              <div className="flex space-x-5 mx-4 py-1">
                <FaNodeJs className="text-2xl hover:scale-110 hover:text-3xl duration-200 rounded-full border-[2px]" />
                <SiExpress className="text-2xl hover:scale-110 duration-200 hover:text-3xl rounded-full border-[2px]" />
                <DiMongodb className="text-2xl hover:scale-110 duration-200 hover:text-3xl rounded-full border-[2px]" />
                <SiOpencv className="text-2xl hover:scale-110 duration-200 hover:text-3xl rounded-full border-[2px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-52 md:mt-20 mt-8 order-1">
          <img src="manan.jpg" className="rounded-full w-[470px] h-[460px]" alt="Manan Daxini" />
        </div>
      </div>
    </div>
  );
}

export default Home;