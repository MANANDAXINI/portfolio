import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiOpencv } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { ReactTyped } from "react-typed";
import profileImage from "../../public/profile.jpg"; // Assuming profile.jpg is in the public directory

function Home() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Side */}
        <div className="md:w-1/2 md:mt-24 mt-12 md:order-1 order-2">
          <span className="text-lg text-gray-600">Welcome To My</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            Portfolio
          </h1>
          <div className="flex items-center mt-4">
            <h2 className="text-3xl md:text-4xl text-gray-800">
              Hi, I am <strong>Manan Daxini</strong>
            </h2>
          </div>
          <div className="flex text-xl md:text-2xl text-gray-800 mt-2">
            <h2 className="font-semibold">A passionate</h2>{" "}
            <ReactTyped
              className="text-red-700 font-bold ml-1"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={50}
              backSpeed={60}
              loop={true}
            />
          </div>
          <p className="text-gray-700 text-lg mt-4">
            I am a <strong>frontend developer</strong> proficient in C and C++
            for data structures and algorithms. Currently exploring backend
            development, my skills extend to Java, OpenCV, and Python, enabling
            me to tackle various technical challenges effectively.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-6 mt-6">
            <a
              href="https://twitter.com/daxini_manan?t=5mZELgT5f1VKEDT74XvzrA&s=08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTwitterXLine className="text-4xl text-gray-600 hover:text-blue-500 transition duration-200 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/manan_daxini25/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-4xl text-gray-600 hover:text-blue-500 transition duration-200 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/manan-daxini-180b69247/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-4xl text-gray-600 hover:text-blue-500 transition duration-200 cursor-pointer" />
            </a>
            <a
              href="https://discord.com/channels/@me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="text-4xl text-gray-600 hover:text-blue-500 transition duration-200 cursor-pointer" />
            </a>
          </div>
          {/* Technologies */}
          <div className="flex items-center space-x-4 mt-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
              Currently Working On:
            </h3>
            <FaNodeJs className="text-4xl text-gray-600 hover:text-blue-500 transition duration-200 cursor-pointer" />
            <SiExpress className="text-4xl text-gray-600 hover:text-blue-500 transition duration-200 cursor-pointer" />
            <DiMongodb className="text-4xl text-gray-600 hover:text-blue-500 transition duration-200 cursor-pointer" />
            <SiOpencv className="text-4xl text-gray-600 hover:text-blue-500 transition duration-200 cursor-pointer" />
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 md:mt-0 mt-8 order-1 flex justify-center">
          <img
            src={profileImage}
            className="rounded-full w-[450px] h-[450px] md:w-[450px] md:h-[450px] pt-7  object-fill"
            alt="Manan Daxini"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
