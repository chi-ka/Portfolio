import React, { useState } from 'react';
import "../styles/Projects.css";
import Header from '../components/Header';
import Projects from "../components/Projects";
import Footer from "../components/footer";

function ProjectPage() {

    return (
        <div>
          <Header tag="project"/>
          <Projects/>
          <Footer/>
        </div>
    );
  }
  
export default ProjectPage;