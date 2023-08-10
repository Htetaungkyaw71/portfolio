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

      const rect1 = about.getBoundingClientRect();
      const rect2 = skill.getBoundingClientRect();
      const rect3 = project.getBoundingClientRect();
      const rect4 = contact.getBoundingClientRect();

      const isInViewport = (elementRect) => {
        return (
          elementRect.top >= 0 &&
          elementRect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        );
      };

      if (isInViewport(rect1)) {
        setActiveTag("about");
      } else if (isInViewport(rect2)) {
        setActiveTag("skill");
      } else if (isInViewport(rect3)) {
        setActiveTag("project");
      } else if (isInViewport(rect4)) {
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
      <div className="bg-yellow-600 h-96 " id="contact">
        <h1>contact</h1>
      </div>
    </div>
  );
};

export default SideContext;
