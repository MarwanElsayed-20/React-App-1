import React, { useEffect } from "react";
import Line from "../Line/Line";
import "../Contact/contact.css";
import Form from "./Form/Form";

export default function Contact() {
  let showLabel = (e) => {
    if (e.target.value.length !== 0) {
      e.target.previousElementSibling.style.cssText = "bottom: 0";
    } else {
      e.target.previousElementSibling.style.cssText = "bottom: -30px";
    }
  };

  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <>
      <section className="contact py-5 ">
        <div className="container">
          <div className="header-info text-center">
            <h1 className="text-uppercase mb-3 fw-bolder fs-1">contact</h1>
            <Line />
          </div>
          <Form showLabel={showLabel} />
        </div>
      </section>
    </>
  );
}
