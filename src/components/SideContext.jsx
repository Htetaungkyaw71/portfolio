import { useEffect } from "react";
import About from "./About";
import Skill from "./Skill";
import Projects from "./Projects";

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
    </div>
  );
};

export default SideContext;
