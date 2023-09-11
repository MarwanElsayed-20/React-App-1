import React, { useEffect } from "react";
import headerImg from "../../assets/avataaars.svg";
import "../Home/home.css";
import Line from "../Line/Line";
import Title from "../Title/Title";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <section className="home py-5 text-white text-center">
        <div className="container d-flex align-items-center justify-content-center flex-column">
          <div className="header-img mb-4">
            <LazyLoadImage src={headerImg} alt="" />
          </div>
          <div className="header-info">
            <Title />
            <Line />
            <p className="text-capitalize">
              graphic artist - web designer - illustrator
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
