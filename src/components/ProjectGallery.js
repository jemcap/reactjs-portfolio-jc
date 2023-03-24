import React from 'react';
import Project from './Project';
import projectsData from '../projects.json';
import feeltunejournal from '../assets/feeltune-journal.png';
import codingquiz from '../assets/coding-quiz.png';
import diaryjournal from '../assets/online-diary-planner-ss.png'
import onlinecohort from '../assets/roster-demo.png'
import passgen from '../assets/online-password-generator.png'
import mealmaster from '../assets/mealmaster.png'

const ProjectGallery = () => {
  const imgArray = [feeltunejournal, codingquiz, diaryjournal, onlinecohort, passgen, mealmaster]
  return (
    <div className="container mt-5">
      <div className="row">
        {projectsData.slice(0, 6).map((project,i) => (
          <div className="col-md-4 p-5" key={project.id}>
            <Project project={project} image={imgArray[i]}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
