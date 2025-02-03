import { PROJECTS } from "../data/projects";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  return (
    <section className="w-full h-full overflow-y-auto pb-14 md:p-0">
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {PROJECTS.map(project => (
          <ProjectItem project={project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
