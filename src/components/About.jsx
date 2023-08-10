import { BiRightArrowAlt } from "react-icons/bi";

const About = () => {
  return (
    <div className="pt-24 pr-16 px-3 text-gray-400" id="about">
      <p className="mb-10">
        Back in 2012, I decided to try my hand at creating custom Tumblr themes
        and tumbled head first into the rabbit hole of coding and web
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
        When Im not at the computer, Im usually rock climbing, hanging out with
        my wife and two cats, or running around Hyrule searching for Korok seeds
        K o r o k s e e d s .
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
