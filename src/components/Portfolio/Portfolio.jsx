import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import Line from "../Line/Line";
import "../Portfolio/portfolio.css";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
import img4 from "../../assets/poert1.png";
import img5 from "../../assets/port2.png";
import img6 from "../../assets/port3.png";
import PortfolioGallery from "./PortfolioGallery/PortfolioGallery";
import { v4 as uuidv4 } from "uuid";
import SinglePhoto from "./PortfolioGallery/SinglePhoto/SinglePhoto";

export default function Portfolio() {
  const [img, setImg] = useState("");
  const [flag, setFlag] = useState(false);

  const imgs = [img1, img2, img3, img4, img5, img6];

  let showImg = (img) => {
    setImg(img);
    setFlag(true);
  };

  let removeSingleImg = () => {
    setFlag(false);
  };

  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <>
      <section className="portfolio py-5 text-center">
        <div className="container">
          <div className="header-info">
            <Title />
            <Line />
          </div>
          <div className="row">
            {imgs.map((img) => (
              <PortfolioGallery key={uuidv4()} img={img} showImg={showImg} />
            ))}
          </div>
        </div>
      </section>
      {flag && <SinglePhoto imgSrc={img} removeSingleImg={removeSingleImg} />}
    </>
  );
}
