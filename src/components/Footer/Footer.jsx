import React from "react";
import "../Footer/footer.css";

export default function Footer() {
  return (
    <>
      <footer className=" text-center text-white ">
        <div className="footer-info py-5">
          <div className="container my-5">
            <div className="row">
              <div className="col-md-4">
                <div className="location">
                  <h3 className="text-uppercase fw-bold">location</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="links">
                  <h3 className="text-uppercase fw-bold">around the web</h3>
                  <ul className="d-flex align-items-center justify-content-center">
                    <li>
                      <i className="fa-brands fa-facebook mx-1"></i>
                    </li>
                    <li>
                      <i className="fa-brands fa-twitter mx-1"></i>
                    </li>
                    <li>
                      <i className="fa-brands fa-linkedin-in mx-1"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-globe mx-1"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about-info">
                  <h3 className="text-uppercase fw-bold">about freelancer</h3>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right py-4">Copyright © Your Website 2021</div>
      </footer>
    </>
  );
}
