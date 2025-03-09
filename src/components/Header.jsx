import React, { useState } from "react";
import '../styles/Header.css'

function Header(props) {
    const [activePage, setActivePage] = useState("Home"); // Default active page

    function changeNavToActive(page) {
        setActivePage(page);
    }

    return (
        <section id="header" className="gradient-background p-3">
            <header>
                <div className="d-flex justify-content-end" style={{ color: "white" }}>
                    <ul className="nav nav-pills flex-wrap justify-content-end">
                        <li id="Home" className="nav-item">
                            <a href="/#" className={`nav-link ${activePage === "Home" ? "active" : ""}`} 
                               style={{ color: "white" }} 
                               onClick={() => changeNavToActive("Home")}>
                                Home
                            </a>
                        </li>
                        <li id="About" className="nav-item">
                            <a href="/about" className={`nav-link ${activePage === "About" ? "active" : ""}`} 
                               style={{ color: "white" }} 
                               onClick={() => changeNavToActive("About")}>
                                About Me
                            </a>
                        </li>
                        <li id="projects" className="nav-item">
                            <a href="/projects" className={`nav-link ${activePage === "Projects" ? "active" : ""}`} 
                               style={{ color: "white" }} 
                               onClick={() => changeNavToActive("Projects")}>
                                Projects
                            </a>
                        </li>
                        <li id="contact" className="nav-item">
                            <a href="/contact" className={`nav-link ${activePage === "Contact" ? "active" : ""}`} 
                               style={{ color: "white" }} 
                               onClick={() => changeNavToActive("Contact")}>
                                Contact Me
                            </a>
                        </li>
                    </ul>
                </div>
            </header> 
        </section>
    );
}

export default Header;
