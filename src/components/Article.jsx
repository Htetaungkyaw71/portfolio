/* eslint-disable react/prop-types */
import { FiArrowUpRight } from "react-icons/fi";
const Article = ({ article }) => {
  return (
    <div className="grid grid-cols-4 mb-5 p-2 sm:p-2 md:p-2 lg:p-5 xl:p-5 py-5 gap-5 hover:bg-[#17274B] rounded-lg  hover:text-[#4FC6C9] hover:shadow-lg duration-300 items-center">
      <img
        src={article.image}
        className="border-2 rounded-sm mt-0 sm:mt-0 md:mt-0 lg:mt-2 xl:mt-2"
      />
      <div className="col-span-3">
        <a
          target="_blank"
          className="text-md sm:text-md md:text-md lg:text-lg xl:text-lg font-bold"
          href={article.url}
          rel="noreferrer"
        >
          {" "}
          {article.title}
        </a>
        <FiArrowUpRight className="inline text-xl -mt-1" />
      </div>
    </div>
  );
};

export default Article;
