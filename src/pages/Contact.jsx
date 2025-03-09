import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import "../styles/Contact.css"


function ContactMe() {

    return (
    <section id="contactme" className="text-bg-light">
        <Header tag="contact"/>
        <div class="container py-4">
                <div class="row align-items-md-stretch text-bg-light">
                <div class="col-md-8">
                    <div class="h-100 p-5 text-bg-light rounded-3">
                    <h2 className="mb-4 display-4 fw-bold" style={{ color: "#06283D" }}>🔗 Contact me</h2>
                    <p>I’d love to hear from you! Whether it’s about a project, collaboration, or just a quick chat, feel free to reach out.</p>
                    <td>
                        <tr>
                            <p>📩 Email:</p>
                            <p>📞 Phone:</p>
                            <p><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" width="20" height="20"/> LinkedIn: </p>
                        </tr>
                    </td>

                    <td>
                        <tr>
                            <p>  <a href="mailto:okaforchika66@gmail.com">okaforchika66@gmail.com</a>  </p>
                            <p>  <a href="https://wa.me/+2348034269507" target="_blank">+234 803-426-9507</a></p> 
                            <p>  <a href="https://www.linkedin.com/in/your-profile" target="_blank">Connect on LinkedIn</a> </p>
                        </tr>
                    </td>
                    <p>
                        I’ll do my best to respond as soon as possible. Looking forward to hearing from you!
                    </p>
                    </div>
                </div>
                <div className="col-md-4  d-flex justify-content-center align-items-center" >
                    <img style={{opacity:0.8}} className="h-50 w-100  rounded-5"  src="/assets/images/contactme.png" alt=""/>
                </div>
                </div>

        </div>
        <Footer/>
    </section>
    
    );
  }
  
  export default ContactMe;