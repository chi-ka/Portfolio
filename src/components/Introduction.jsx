import React from "react";
import Introcard from "./intocard"
import "../styles/Introduction.css"

const cardDetails = [
  {
      job: "Rpa Developer",
      intro: "I build smart automation solutions using UIPath and Python. By streamlining workflows and reducing manual tasks, I help businesses boost productivity. Check out my work below! 🚀."
  },
  {
      job: "Python Developer",
      intro: "I design and build efficient and scalable applications using Python. From automation to web development and data processing, I create solutions that enhance productivity. Check out my work below! 🚀"
  },
  {
      job: "Web Developer",
      intro: "I design and build efficient and scalable applications using Python. From automation to web development and data processing, I create solutions that enhance productivity. Check out my work below! 🚀"
  }
];


function Introduction() {
    return(
        <section id="introduction">
        <div class="container px-4 py-5" id="custom-cards">        
          <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4">
            {cardDetails.map((item, index) => (
                <div class="col">
                    <Introcard
                      key = {index}
                      job={item.job}
                      intro={item.intro}
                    />
                </div>
            ))}

          </div>
        </div>
      </section>
    );
}

export default Introduction;