import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const myProjects = projects.map((i) => (
    <ProjectItem 
      key = {i.id}
      name = {i.name}
      about={i.about}
      technologies={i.technologies}
    />
  )
  )
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{myProjects}</div>
    </div>
  );
}

export default ProjectList;
