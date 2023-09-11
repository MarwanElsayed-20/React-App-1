import React, { useEffect } from "react";
import Title from "../Title/Title";
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
            <Title />
            <Line />
          </div>
          <Form showLabel={showLabel} />
        </div>
      </section>
    </>
  );
}
