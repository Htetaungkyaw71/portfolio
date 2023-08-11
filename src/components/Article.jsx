/* eslint-disable react/prop-types */
import { FiArrowUpRight } from "react-icons/fi";
const Article = ({ article }) => {
  return (
    <div className="grid grid-cols-4 mb-5 p-3 sm:p-3 md:p-3 lg:p-5 xl:p-5 py-5 gap-5 hover:bg-[#17274B] rounded-lg  hover:text-[#4FC6C9] hover:shadow-lg duration-300 items-center">
      <img
        src={article.image}
        className="border-2 rounded-sm mt-0 sm:mt-0 md:mt-0 lg:mt-2 xl:mt-2"
      />
      <div className="col-span-3">
        <a
          className="text-md sm:text-md md:text-md lg:text-lg xl:text-lg font-bold flex items-center gap-1"
          href={article.url}
        >
          {" "}
          {article.title}
          <FiArrowUpRight />
        </a>
      </div>
    </div>
  );
};

export default Article;
