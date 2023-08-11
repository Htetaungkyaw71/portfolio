import { useEffect } from "react";
import About from "./About";
import Skill from "./Skill";
import Projects from "./Projects";
import Contact from "./Contact";
import { BiUpArrowAlt } from "react-icons/bi";

/* eslint-disable react/prop-types */

const SideContext = ({ setActiveTag }) => {
  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById("about");
      const skill = document.getElementById("skill");
      const project = document.getElementById("project");
      const contact = document.getElementById("contact");

      const isInViewport = (elementRect) => {
        const rect = elementRect.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight;
      };

      if (isInViewport(about)) {
        setActiveTag("about");
      } else if (isInViewport(skill)) {
        setActiveTag("skill");
      } else if (isInViewport(project)) {
        setActiveTag("project");
      } else if (isInViewport(contact)) {
        setActiveTag("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveTag]);
  return (
    <div>
      <About />
      <Skill />
      <Projects />
      <Contact />
      <div className="text-right pr-5 pb-5">
        <a
          href="#container"
          className="sm:inline-block md:inline-block lg:hidden xl:hidden p-2.5 relative border-2 border-[#4FC6C9] rounded-full group overflow-hidden font-medium bg-[#4FC6C9] text-[#4FC6C9] inline-block"
        >
          <span className="absolute top-0 left-0 flex w-full h-full mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#0F172A] group-hover:h-0 opacity-90"></span>
          <span className="relative group-hover:text-white">
            <BiUpArrowAlt className="text-2xl" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default SideContext;
