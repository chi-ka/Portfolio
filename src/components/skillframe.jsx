import React from "react";
import "../styles/skillframe.css"

function SkillFrame(props) {
  return (
    <div className="feature col">
      <p className="card-title fw-bold">{props.skill}</p>
      <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow={props.rate} aria-valuemin="0" aria-valuemax="100">
        <div 
          className="progress-bar progress-bar-striped progress-bar-animated" 
          style={{ width: `${props.rate}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillFrame;
