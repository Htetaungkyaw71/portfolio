/* eslint-disable react/prop-types */
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Header = ({ activeTag }) => {
  return (
    <div className="h-full sm:relative md:relative lg:fixed xl:fixed">
      <h1 className="text-5xl font-bold text-gray-200">HtetaungKyaw</h1>
      <h2 className="text-lg mt-3 font-semibold text-gray-200">
        Full Stack Developer
      </h2>
      <p className="text-md mt-3 text-gray-400 w-96">
        I build accessible, inclusive products and digital experiences for the
        web.
      </p>
      <div>
        <p className="mt-10">
          <a href="#about" className="flex items-center">
            <div
              className={`${
                activeTag === "about" ? "w-16 bg-white" : "bg-gray-400 w-8"
              }  mr-4 h-[1px]  inline-block duration-500`}
            ></div>
            <div
              className={`inline-block text-gray-400 ${
                activeTag === "about" ? "text-white" : ""
              }`}
            >
              {" "}
              About
            </div>
          </a>
        </p>
        <p className="mt-5">
          <a href="#skill" className="flex items-center">
            <div
              className={`${
                activeTag === "skill" ? "w-16 bg-white" : "bg-gray-400 w-8"
              }  mr-4 h-[1px]   inline-block duration-500`}
            ></div>
            <div
              className={`inline-block text-gray-400 ${
                activeTag === "skill" ? "text-white" : ""
              }`}
            >
              {" "}
              Skills
            </div>
          </a>
        </p>
        <p className="mt-5">
          <a href="#project" className="flex items-center">
            <div
              className={`${
                activeTag === "project" ? "w-16 bg-white" : "bg-gray-400 w-8"
              }  mr-4 h-[1px]   inline-block duration-500`}
            ></div>
            <div
              className={`inline-block text-gray-400 ${
                activeTag === "project" ? "text-white" : ""
              }`}
            >
              {" "}
              Projects
            </div>
          </a>
        </p>
        <p className="mt-5">
          <a href="#contact" className="flex items-center">
            <div
              className={`${
                activeTag === "contact" ? "w-16 bg-white" : "bg-gray-400 w-8"
              }  mr-4 h-[1px]   inline-block duration-500`}
            ></div>
            <div
              className={`inline-block text-gray-400 ${
                activeTag === "contact" ? "text-white" : ""
              }`}
            >
              {" "}
              Contact
            </div>
          </a>
        </p>
      </div>
      <div className="flex mt-12">
        <a
          href="https://www.linkedin.com/in/htetakyaw"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-2xl mr-5 text-gray-400 hover:text-white duration-300 cursor-pointer" />
        </a>
        <a
          href="https://github.com/Htetaungkyaw71"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-2xl mr-5 text-gray-400 hover:text-white duration-300 cursor-pointer" />
        </a>
        <a
          href="https://twitter.com/Htetaungkyaw172"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="text-2xl mr-5 text-gray-400 hover:text-white duration-300 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/htetaungkyaw17/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="text-2xl mr-5 text-gray-400 hover:text-white duration-300 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Header;
