import React from 'react';
import Project from './Project';
import projectsData from '../projects.json';

const ProjectGallery = () => {
  return (
    <div>
      {projectsData.slice(0, 6).map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGallery;
