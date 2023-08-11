import kanban from "../assets/kanban.png";
import link from "../assets/link.png";
import realtor from "../assets/realtor.png";
import chat from "../assets/chat.png";
import game from "../assets/game.png";
import ask from "../assets/ask.png";
import article1 from "../assets/article1.jpg";
import article2 from "../assets/article2.jpg";
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
    title: "Real Estate App",
    description:
      "A real estate application built with react and redux-toolkit. Seamlessly search through a wide range of properties as we leverage the power of Rapid API to provide you with up-to-date data. ",
    image: realtor,
    source_code: "https://github.com/Htetaungkyaw71/Realtor",
    live_demo: "https://realtor-lovat-gamma.vercel.app/",
    tech: ["React", "Redux-toolkit", "JavaScript", "Tailwindcss"],
  },
  {
    id: "4",
    title: "Chat Valley",
    description:
      "Video chat with strangers. Users can chat random strangers from around the world. Users need to allow their camera and microphone in web browsers built with Html, CSS, JavaScript and other libraries.",
    image: chat,
    source_code: "https://github.com/Htetaungkyaw71/Chat-Valley",
    live_demo: "https://chat-valley-zx8a.onrender.com/",
    tech: ["Javascript", "WebRTC", "NodeJs", "Socket.io"],
  },
  {
    id: "5",
    title: "Gamery",
    description:
      "A free-game app that pulls from the FreeToGame API to allow users to search for and view the free all games and view with categories. Built with React and Redux.",
    image: game,
    source_code: "https://github.com/Htetaungkyaw71/Gamery",
    live_demo: "https://gamery.onrender.com/",
    tech: ["React", "Redux-toolkit", "JavaScript"],
  },
  {
    id: "6",
    title: "Ask Me",
    description:
      "A question-and-answer platform that has forums on a variety of topics, including technology, business, and personal development. User can ask questions,can answer questions and can vote answer. Authentication Included",
    image: ask,
    source_code: "https://github.com/Htetaungkyaw71/askme",
    live_demo: "https://askme-sigma.vercel.app/",
    tech: ["React", "Redux-toolkit", "JavaScript", "Tailwindcss", "Firebase"],
  },
];

const articles = [
  {
    id: "1",
    title: "JavaScript, DOM and Events (Under the Hood)",
    image: article2,
    url: "https://medium.com/@htetaung200071/javascript-dom-event-under-the-hood-part-3-5b2b570948ce",
  },
  {
    id: "2",
    title:
      "What do an international relations student and a web developer have in common?",
    image: article1,
    url: "https://medium.com/@htetaung200071/what-do-an-international-relations-student-and-a-web-developer-have-in-common-adbc79b99a40",
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
