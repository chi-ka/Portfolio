import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import './styles/App.css';
import ProjectPage from "./pages/ProjectPage";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactMe from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;



