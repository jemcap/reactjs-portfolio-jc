import React from 'react'
import "./index.css";
import Home from "./components/Home"
import ProjectGallery from "./components/ProjectGallery"
import Contact from "./components/Contact"
import NavigationBar from "./components/Navbar"
import projectsData from "./projects.json"
import Project from "./components/Project"

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projectgallery" element={<ProjectGallery />} />
        <Route path="contact" element={<Contact />} />
        {projectsData.map((project) => (
          <Route key={project.id} path={`/projects/${project.id}`} element={<Project project={project} />} />
        ))}
      </Routes>
    </>
  );
}

export default App;
