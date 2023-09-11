import React, { useEffect } from "react";
import Title from "../Title/Title";
import Line from "../Line/Line";
import "../About/about.css";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <section className="about py-5 text-white text-center">
        <div className="container d-flex align-items-center justify-content-center flex-column">
          <div className="header-info">
            <Title />
            <Line />
          </div>
          <div className="row text-start">
            <div className="col-md-5 offset-md-1">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
