import kanban from "../assets/kanban.png";
import Article from "./Article";
import Project from "./Project";
import { BiRightArrowAlt } from "react-icons/bi";

const projects = [
  {
    id: "1",
    title: "Kanban Borad App",
    description:
      "Ram Maheshwari focuses on front-end development for websites and web applications. With a simple and easy-to-use menu bar, his portfolio explains his credentials and work without going into excessive detail.",
    image: kanban,
    source_code: "https://github.com/Htetaungkyaw71/Kanban",
    live_demo: "https://kanban-ebon.vercel.app/",
    tech: ["React", "Redux-toolkit", "JavaScript", "Tailwindcss"],
  },
  {
    id: "2",
    title: "Kanban Borad App",
    description:
      "Ram Maheshwari focuses on front-end development for websites and web applications. With a simple and easy-to-use menu bar, his portfolio explains his credentials and work without going into excessive detail.",
    image: kanban,
    source_code: "https://github.com/Htetaungkyaw71/Kanban",
    live_demo: "https://kanban-ebon.vercel.app/",
    tech: ["React", "Redux-toolkit", "JavaScript", "Tailwindcss"],
  },
  {
    id: "3",
    title: "Kanban Borad App",
    description:
      "Ram Maheshwari focuses on front-end development for websites and web applications. With a simple and easy-to-use menu bar, his portfolio explains his credentials and work without going into excessive detail.",
    image: kanban,
    source_code: "https://github.com/Htetaungkyaw71/Kanban",
    live_demo: "https://kanban-ebon.vercel.app/",
    tech: ["React", "Redux-toolkit", "JavaScript", "Tailwindcss"],
  },
  {
    id: "4",
    title: "Kanban Borad App",
    description:
      "Ram Maheshwari focuses on front-end development for websites and web applications. With a simple and easy-to-use menu bar, his portfolio explains his credentials and work without going into excessive detail.",
    image: kanban,
    source_code: "https://github.com/Htetaungkyaw71/Kanban",
    live_demo: "https://kanban-ebon.vercel.app/",
    tech: ["React", "Redux-toolkit", "JavaScript", "Tailwindcss"],
  },
  {
    id: "5",
    title: "Kanban Borad App",
    description:
      "Ram Maheshwari focuses on front-end development for websites and web applications. With a simple and easy-to-use menu bar, his portfolio explains his credentials and work without going into excessive detail.",
    image: kanban,
    source_code: "https://github.com/Htetaungkyaw71/Kanban",
    live_demo: "https://kanban-ebon.vercel.app/",
    tech: ["React", "Redux-toolkit", "JavaScript", "Tailwindcss"],
  },
  {
    id: "6",
    title: "Kanban Borad App",
    description:
      "Ram Maheshwari focuses on front-end development for websites and web applications. With a simple and easy-to-use menu bar, his portfolio explains his credentials and work without going into excessive detail.",
    image: kanban,
    source_code: "https://github.com/Htetaungkyaw71/Kanban",
    live_demo: "https://kanban-ebon.vercel.app/",
    tech: ["React", "Redux-toolkit", "JavaScript", "Tailwindcss"],
  },
];

const articles = [
  {
    id: "1",
    title: "Kanban Borad App",
    image: kanban,
    url: "https://kanban-ebon.vercel.app/",
  },
  {
    id: "2",
    title: "Kanban Borad App",
    image: kanban,
    url: "https://kanban-ebon.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div
      className="pl-3 sm:pl-3 md:pl-3 xl:pl-0 lg:pl-0 pr-3 sm:pr-3 md:pr-3 lg:pr-16 xl:pr-16 pt-10 sm:pt-10 md:pt-10 lg:pt-16 xl:pt-16"
      id="project"
    >
      {projects.map((project) => (
        <Project project={project} key={project.id} />
      ))}
      <a
        className="flex items-center gap-1 ml-3 pt-5"
        href="https://github.com/Htetaungkyaw71?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <span className="text-md font-bold hover:border-b-[1px] border-gray-400 hover:mr-1">
          More Projects On Github
        </span>
        <BiRightArrowAlt className="text-xl mt-[1px]" />
      </a>
      <div className="mt-20">
        {articles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
