import React from 'react'
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.deployedUrl}>Link to deployed version</a>
      <a href={project.githubUrl}>Link to GitHub repository</a>
      <img src={project.image} alt={`Screenshot of ${project.title}`} />
      {/* or use <img src={project.gif} alt={`GIF of ${project.title}`} /> if a GIF is available */}
      <Link to={`/projects/${project.id}`}>View project</Link>
    </div>
  )
}

export default Project