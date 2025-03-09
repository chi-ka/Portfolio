import React from "react";
import "../styles/Projectframe.css";

function Projectframe(props) {
    return (
        <div>
            <h4 className="mb-3 mx-4 fs-2 text-body-emphasis">{props.title}</h4>
            <div 
                className="card card-cover h-30 overflow-hidden m-2 rounded-5 shadow-lg" 
                style={{ 
                    backgroundImage: `url(${props.image})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    height: '300px', 
                }}
            >
            </div>
            <div>
                <a href="#" className="btn btn-primary m-3">See Project</a>
            </div>
        </div>
    );
}

export default Projectframe;

