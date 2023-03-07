import React from 'react'
import "./index.css";
import Home from "./components/Home"
import Project from "./components/Project"
import ProjectGallery from "./components/ProjectGallery"
import Contact from "./components/Contact"
import NavigationBar from "./components/Navbar"

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="projectgallery" element={<ProjectGallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
