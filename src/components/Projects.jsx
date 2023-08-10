import kanban from "../assets/kanban.png";
import Project from "./Project";

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

const Projects = () => {
  return (
    <div className="pr-16 pt-20" id="project">
      {projects.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  );
};

export default Projects;
