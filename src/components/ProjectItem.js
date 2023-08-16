import React from "react";

function ProjectItem({ name, about, technologies }) {
  const myProjects = technologies.map((k) => 
  (<span key = {k}>{k}</span>)

  )
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{myProjects}</div>
    </div>
  );
}

export default ProjectItem;
