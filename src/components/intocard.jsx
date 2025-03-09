 import React from "react";
 import "../styles/intocard.css"

 function Introcard(props){
    return(
        <div class="carddesign card card-cover h-100 overflow-hidden rounded-5 shadow-lg">
          <div class="d-block h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="mb-4 display-6 lh-1 fw-bold">
              {props.job}
            </h3>
            <p>
              {props.intro}
            </p>
          </div>
        </div>
    );
 }

 export default Introcard;