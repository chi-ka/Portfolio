import React from "react";

function Footer(){
    return(
        <section id="footer" className="gradient-background">
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
              <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                  <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
              </div>
          
              <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
              </ul>
            </footer>
          </div>
    </section>
    );
}

export default Footer;