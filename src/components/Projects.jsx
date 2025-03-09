import React from "react"
import Projectframe from "../components/Projectframe"



const projects=[
    {
        title:"Move with joy",
        image:"/assets/images/Moveit.png"
    },
    {
        title:"Tindog",
        image:"/assets/images/Tindog.png"
    },
    {
        title:"Note",
        image:"/assets/images/Moveit.png"
    }
]

function Projects(){
    return(
        <div class="container  px-4 p-5" id="Project-icons">
                <div className="d-flex justify-content-between align-items-center mb-4 border-bottom">
                    <h2 className="display-4 fw-bold">Projects</h2>
                    <div className="dropdown">
                        <button 
                            className="btn btn-light dropdown-toggle" 
                            type="button" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="true"
                        >
                            All Projects
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Rpa Projects</a></li>
                            <li><a className="dropdown-item" href="#">Python Projects</a></li>
                            <li><a className="dropdown-item" href="#">Web Projects</a></li>
                        </ul>
                    </div>
                </div>

 
            <div className="row  g-4 py-2 row-cols-1 row-cols-lg-3 ">
                {
                    projects.map((item,index) => (
                        <Projectframe title={item.title} image={item.image}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;