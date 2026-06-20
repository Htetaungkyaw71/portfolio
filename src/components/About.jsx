/* eslint-disable react/no-unescaped-entities */
import { BiRightArrowAlt } from "react-icons/bi";

const About = () => {
  return (
    <div
      className="pt-16 sm:pt-16 md:pt-16 lg:pt-24 xl:pt-24 pr-3 sm:pr-3 md:pr-3 lg:pr-16 xl:pr-16 p-5 text-gray-400"
      id="about"
    >
      <h1 className="text-white uppercase mb-6 font-bold sm:block md:block lg:hidden xl:hidden ">
        About
      </h1>
      <p className="mb-10">
        Back in 2020, I began exploring computer science through{" "}
        <b className="text-white">CS50's Introduction to Computer Science</b>.
        That course taught me how to think through problems, work with
        algorithms, and approach coding challenges with more confidence. I later
        continued sharpening my skills at{" "}
        <b className="text-white">
          Microverse, a remote software development school
        </b>
        , where I collaborated with other developers and built projects in a{" "}
        <b className="text-white">team-based environment</b>.
        <br />
        <br />I have a strong technical skill set that includes{" "}
        <b className="text-white">
          JavaScript, React, Redux, Node.js, Express.js, Redis, PostgreSQL,
          Prisma, and Jest
        </b>
        . My current focus is building full-stack applications, improving{" "}
        performance, and continuing to learn new technologies.
        <br />
        <br />
        When I'm not at the computer, I'm usually playing football with friends.
        Like coding, it gives me a chance to work with others, stay active, and
        enjoy the process.
      </p>
      <a
        className="flex items-center gap-1 "
        href="https://docs.google.com/document/d/1UItXJVHn8E9vnlZoTtu5FSryjFGigVYsmjr-YYEw--4/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <span className="text-md font-bold hover:border-b-[1px] border-gray-400 hover:mr-1">
          View My Resume
        </span>
        <BiRightArrowAlt className="text-xl mt-[1px]" />
      </a>
    </div>
  );
};

export default About;
