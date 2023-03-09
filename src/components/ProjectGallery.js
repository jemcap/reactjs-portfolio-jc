import React from 'react';
import Project from './Project';
import projectsData from '../projects.json';

const ProjectGallery = () => {
  return (
    <div className="container">
      <div className="row">
        {projectsData.slice(0, 6).map(project => (
          <div className="col-md-4" key={project.id}>
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
