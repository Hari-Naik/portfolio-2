import React from "react";
import type { Project } from "../data/projects";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type ProjectItemProps = {
  project: Project;
};

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <li key={project.id} className="w-full min-h-[416px] bg-[#181818]">
      <img src={project.img} alt="" className="w-full h-[270px]" />
      <div className="flex flex-col gap-2 p-2">
        <h1 className="text-base text-[#ffd700] uppercase tracking-[2px]">
          {project.title}
        </h1>
        <p className="text-[11px] text-white">{project.description}</p>
        <div className="w-full flex gap-6 items-center">
          <Link
            to={project.links.github}
            className="flex items-center gap-1 text-[#ffd700]">
            <span className="capitalize">Code</span>
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            to={project.links.live}
            className="flex items-center gap-1 text-[#ffd700]">
            <span className="capitalize">Live demo</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
