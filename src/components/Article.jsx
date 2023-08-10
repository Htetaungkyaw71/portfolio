/* eslint-disable react/prop-types */
import { FiArrowUpRight } from "react-icons/fi";
const Article = ({ article }) => {
  return (
    <div className="grid grid-cols-4 mb-5 p-3 py-5 gap-5 hover:bg-[#17274B] rounded-lg  hover:text-[#4FC6C9] hover:shadow-lg duration-300 items-center">
      <img src={article.image} className="border-2 rounded-sm mt-2" />
      <div className="col-span-3">
        <a
          className="text-lg font-bold flex items-center gap-1"
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
