import { useState } from 'react'
import '../styles/styles.css'
import Introduction from "../components/Introduction"
import Skills from "../components/skills"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Intro from "../components/intro"


import React from "react";

function Home() {

    return (
        <div>
          <Intro/>
          <Introduction/>
          <Skills/>
          <Contact/>
          <Footer/>
  
        </div>
    );
  }
  
  export default Home;