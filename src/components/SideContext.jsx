import { useEffect } from "react";

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
      <div className="bg-red-700 h-auto pt-28 pb-28 px-16" id="about">
        <p>
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and Ive had the privilege of
          building software for an advertising agency, a start-up, a student-led
          design studio, and a huge corporation.
          <br />
          <br />
          My main focus these days is building products and leading projects for
          our clients at Upstatement. In my frve also released an online video
          course that covers everything you need to know to build a web app with
          the Spotify API.
          <br />
          <br />
          When Im not at the computer, Im usually rock climbing, hanging out
          with my wife and two cats, or running around Hyrule searching for
          Korok seeds K o r o k s e e d s .
        </p>
      </div>
      <div className="bg-blue-700 h-96" id="skill">
        <h1>skills</h1>
      </div>
      <div className="bg-green-600 h-96" id="project">
        <h1>project</h1>
      </div>
      <div className="bg-yellow-600 h-96" id="contact">
        <h1>contact</h1>
      </div>
    </div>
  );
};

export default SideContext;
