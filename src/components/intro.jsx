import React from "react";
import '../styles/Intro.css'

function Intro(){
    return(

            <header className=" gradient-background">
                <div className="d-flex justify-content-end py-2">
                    <div className="d-flex justify-content-end" style={{ color: "white" }}>
                        <ul className="nav nav-pills flex-wrap justify-content-end">
                            <li className="nav-item"><a href="/#" className="nav-link active" style={{ color: "white" }} aria-current="page">Home</a></li>
                            <li className="nav-item"><a href="/about" className="nav-link" style={{ color: "white" }}>About Me</a></li>
                            <li className="nav-item"><a href="/projects" className="nav-link" style={{ color: "white" }}>Projects</a></li>
                            <li className="nav-item"><a href="/contact" className="nav-link" style={{ color: "white" }}>Contact Me</a></li>
                        </ul>
                    </div>

                </div>
                <div className="px-4 pb-3 my-5 text-center gradient-background">
                    <img className="d-block mx-auto mb-4 girlcoding" src="./assets/images/chika.jpg" alt="" width="300em" height="300em"/>
                    <h1 className="display-3 fw-bold text-center lh-1">Fullstack Developer</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">
                        Hello, Welcome to my portfolio! <br /> 
                        I’m <strong>Chika Umobi</strong>, a versatile developer specializing in Robotic Process Automation (RPA), Python programming, and full-stack web development.  
                        <br />
                        Take a look at my projects to see how I can help turn your vision into reality.
                        </p>
                    </div>
                </div>
            </header> 
    );
}

export default Intro;