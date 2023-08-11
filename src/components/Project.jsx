/* eslint-disable react/prop-types */
import { BsLink45Deg } from "react-icons/bs";

const Project = ({ project }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mb-5 p-2 sm:p-2 md:p-2 lg:p-5 xl:p-5  gap-5 hover:bg-[#17274B] rounded-lg  hover:text-[#4FC6C9] hover:shadow-lg duration-300">
      <img src={project.image} className="border-2 rounded-sm mt-2" />
      <div className="col-span-3">
        <h1 className="text-lg font-bold"> {project.title}</h1>
        <p className="text-sm text-gray-400">{project.description}</p>
        <div className="flex gap-4 mt-4">
          <a
            href={project.live_demo}
            className="flex items-center gap-1 hover:text-[#4FC6C9] font-semibold text-white"
          >
            <BsLink45Deg />
            <span className="text-sm">Live Demo</span>
          </a>
          <a
            href={project.source_code}
            className="flex items-center gap-1 hover:text-[#4FC6C9] font-semibold text-white"
          >
            <BsLink45Deg />
            <span className="text-sm"> Source Code</span>
          </a>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <div
              key={t}
              className="px-3 py-1 rounded-xl text-sm text-[#4FC6C9] bg-[#183756]"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
