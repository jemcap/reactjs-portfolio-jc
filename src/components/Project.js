import React from "react"
import { Link } from "react-router-dom"


function Project(props) {
  const { title, deployedUrl, githubUrl } = props.project;

  return (
    <div>
      <h2>{title}</h2>
      <img className="image__styling" src={props.image} alt={title} />
      <p>
        <a href={deployedUrl}>Deployed Version</a>
      </p>
      <p>
        <a href={githubUrl}>GitHub Repository</a>
      </p>
      <Link to={`/projects/${props.project.id}`}>View Project</Link>
    </div>
  );
}

export default Project
