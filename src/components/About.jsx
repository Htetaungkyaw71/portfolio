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
        Back in 2020, I started diving into computer science through the{" "}
        <b className="text-white">
          CS50's Introduction to computer science course
        </b>
        . That's when I learned how to approach problems with algorithms and
        solve coding challenges skillfully. After that, I sharpened my abilities
        even more at <b className="text-white">Microverse, a remote school</b>{" "}
        where I worked on projects with fellow students, growing my skills while
        learning together.
        <br />
        <br />I have a strong technical skill set that includes JavaScript,
        React, Redux, Node.js, Express.js, Ruby, Ruby on Rails, PostgreSQL,
        Rspec, and Jest for testing. My main focus these days is building{" "}
        <b className="text-white">full-stack projects</b> and learning new
        technologies.
        <br />
        <br />
        When I'm not on the computer, I'm out playing{" "}
        <b className="text-white">football</b> with my friends. Just like
        coding, it's a fun way to team up and enjoy some action together.
      </p>
      <a
        className="flex items-center gap-1 "
        href="https://docs.google.com/document/d/118NYGQqoqAavNE77jZlboIxvcYgzAei3kgLAZszykys/edit"
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
