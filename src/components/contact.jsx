import React from "react";  
import { Link } from "react-router-dom";



function Contact(){
    return(
            <section id="contact " className="border-top">
                <div className="px-4 py-5 mt-5 text-center bg-light">
                    <img className="d-block mx-auto mb-4" src="/assets/images/Chat.png" alt="" width="72" height="57"/>
                    <h1 className="display-5 fw-bold text-body-emphasis">Let’s Connect!</h1>
                    <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Love coffee as much as I do? Let’s chat over a cup (or two) and talk about automating the world, building cool web apps, or just sharing Python puns. I promise it’ll be brew-tiful! ☕🐍 </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
                            <Link to="/contact" className="text-white text-decoration-none">Contact Me</Link>
                        </button>
                    </div>
                    </div>
                </div>
            </section>
    );
}

export default Contact;