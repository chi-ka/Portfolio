import React from "react";
import SkillFrame from "./skillframe";
import "../styles/skills.css";

const skills = [
    { skill: "Python", rate: 100 },
    { skill: "HTML", rate: 100 },
    { skill: "CSS", rate: 100 },
    { skill: "Web Scraping", rate: 100 },
    { skill: "React", rate: 100 },
    { skill: "API Development", rate: 100 },
    { skill: "JavaScript & JQuery", rate: 90 },
    { skill: "Node.js & Express js", rate: 90 },
    { skill: "MicrosoftSQL", rate: 100 },
    { skill: "PostgresSQL", rate: 80 },
    { skill: "Data Analysis", rate: 80 },
];

function Skills() {
    return (
        <section id="skills" className="bg-light py-5 " >
            <div className="container">
                <h2 className="mb-4 display-4 fw-bold">My Skills</h2>
                <div className="row row-cols-1 g-4">
                    <div className="col">
                        <div className="card shadow-lg rounded-5 p-4">
                            <div className="card-body">
                                <div className="row gx-5 gy-3 py-5 px-5 row-cols-1 row-cols-lg-2">
                                    {skills.map((item, index) => (
                                        <SkillFrame key={index} skill={item.skill} rate={item.rate} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
