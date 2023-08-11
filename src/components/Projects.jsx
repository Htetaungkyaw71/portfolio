import kanban from "../assets/kanban.png";
import link from "../assets/link.png";
import realtor from "../assets/realtor.png";
import Article from "./Article";
import Project from "./Project";
import { BiRightArrowAlt } from "react-icons/bi";

const projects = [
  {
    id: "1",
    title: "Link Sharing App",
    description:
      "Link-Sharing application, where users can seamlessly manage links — creating, reading, updating, and deleting while enjoying mobile previews. With integrated authentication, this app ensures a secure and user-friendly link sharing experience.",
    image: link,
    source_code: "https://github.com/Htetaungkyaw71/Sharelink",
    live_demo: "https://slink-non2.onrender.com/",
    tech: [
      "React",
      "Redux-toolkit",
      "Nodejs",
      "Tailwindcss",
      "Expressjs",
      "Postgresql",
      "Prisma",
    ],
  },
  {
    id: "2",
    title: "Kanban Board App",
    description:
      "A fully-functional task management app built using React and Redux Toolkit. Including project creation, task addition, editing, and status updates (Todo, Doing, Done). With a sleek design and dark mode, effortlessly organize your tasks and projects while optimizing productivity.",
    image: kanban,
    source_code: "https://github.com/Htetaungkyaw71/Kanban",
    live_demo: "https://kanban-ebon.vercel.app/",
    tech: ["React", "Redux-toolkit", "JavaScript", "Tailwindcss"],
  },

  {
    id: "3",
    title: "Real Estate Application",
    description:
      "A real estate application built with react and redux-toolkit. Seamlessly search through a wide range of properties as we leverage the power of Rapid API to provide you with up-to-date data. ",
    image: realtor,
    source_code: "https://github.com/Htetaungkyaw71/Realtor",
    live_demo: "https://realtor-lovat-gamma.vercel.app/",
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
      <h1
        className="text-white uppercase mb-3 font-bold sm:block md:block lg:hidden xl:hidden p-3
      "
      >
        projects
      </h1>
      {projects.map((project) => (
        <Project project={project} key={project.id} />
      ))}
      <a
        className="flex items-center gap-1 ml-3 sm:ml-3 md:ml-3 lg:ml-5 xl:ml-5 pt-5"
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
        <h1 className="text-white uppercase mb-6 font-bold sm:block md:block lg:hidden xl:hidden p-2">
          Writing
        </h1>
        {articles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
