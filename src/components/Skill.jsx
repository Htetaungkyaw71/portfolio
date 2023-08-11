/* eslint-disable react/no-unescaped-entities */
import { BiSolidRightArrow } from "react-icons/bi";
const Skill = () => {
  return (
    <div
      className="pt-16 sm:pt-16 md:pt-16 lg:pt-24 xl:pt-24 pr-16 p-5"
      id="skill"
    >
      <h1 className="text-lg">
        Here are some of the technologies I've been working on within my side
        projects:
      </h1>
      <div className="flex flex-wrap mt-12 gap-6 sm:gap-6 md:gap-6 lg:gap-10 xl:gap-10">
        <div>
          <h1 className="mb-5 flex items-center gap-2">
            <BiSolidRightArrow className="text-sm text-[#4FC6C9]" />
            <span className="text-gray-400">HTML</span>
          </h1>
          <h1 className="mb-5 flex items-center gap-2">
            <BiSolidRightArrow className="text-sm text-[#4FC6C9]" />
            <span className="text-gray-400">CSS</span>
          </h1>
          <h1 className="mb-5 flex items-center gap-2">
            <BiSolidRightArrow className="text-sm text-[#4FC6C9]" />
            <span className="text-gray-400">JavaScript</span>
          </h1>
          {/* <h1 className="mb-5 flex items-center gap-2">
            <BiSolidRightArrow className="text-sm text-[#4FC6C9]" />
            <span className="text-gray-400">Ruby</span>
          </h1>
          <h1 className="mb-5 flex items-center gap-2">
            <BiSolidRightArrow className="text-sm text-[#4FC6C9]" />
            <span className="text-gray-400">Python</span>
          </h1> */}
        </div>
        <div>
          <h1 className="mb-5 flex items-center gap-2">
            <BiSolidRightArrow className="text-sm text-[#4FC6C9]" />
            <span className="text-gray-400">React</span>
          </h1>
          <h1 className="mb-5 flex items-center gap-2">
            <BiSolidRightArrow className="text-sm text-[#4FC6C9]" />
            <span className="text-gray-400">Redux</span>
          </h1>
          <h1 className="mb-5 flex items-center gap-2">
            <BiSolidRightArrow className="text-sm text-[#4FC6C9]" />
            <span className="text-gray-400">Tailwindcss</span>
          </h1>
          {/* <h1 className="mb-5 flex items-center gap-2">
            <BiSolidRightArrow className="text-sm text-[#4FC6C9]" />
            <span className="text-gray-400">Nextjs</span>
          </h1> */}

          {/* <h1 className="mb-5 flex items-center gap-2">
            <BiSolidRightArrow className="text-sm text-[#4FC6C9]" />
            <span className="text-gray-400">Postgresql</span>
          </h1> */}
        </div>
        <div>
          <h1 className="mb-5 flex items-center gap-2">
            <BiSolidRightArrow className="text-sm text-[#4FC6C9]" />
            <span className="text-gray-400">Nodejs</span>
          </h1>
          <h1 className="mb-5 flex items-center gap-2">
            <BiSolidRightArrow className="text-sm text-[#4FC6C9]" />
            <span className="text-gray-400">Expressjs</span>
          </h1>
          <h1 className="mb-5 flex items-center gap-2">
            <BiSolidRightArrow className="text-sm text-[#4FC6C9]" />
            <span className="text-gray-400">Postgresql</span>
          </h1>
          {/* <h1 className="mb-5 flex items-center gap-2">
            <BiSolidRightArrow className="text-sm text-[#4FC6C9]" />
            <span className="text-gray-400">Ruby On Rails</span>
          </h1>
          <h1 className="mb-5 flex items-center gap-2">
            <BiSolidRightArrow className="text-sm text-[#4FC6C9]" />
            <span className="text-gray-400">Django</span>
          </h1>
          <h1 className="mb-5 flex items-center gap-2">
            <BiSolidRightArrow className="text-sm text-[#4FC6C9]" />
            <span className="text-gray-400">Flask</span>
          </h1> */}
        </div>
      </div>
    </div>
  );
};

export default Skill;
