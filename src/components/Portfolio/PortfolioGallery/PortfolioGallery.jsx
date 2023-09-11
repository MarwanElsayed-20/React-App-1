import React from "react";
import "../PortfolioGallery/portfolio-gallery.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function PortfolioGallery({ img, showImg }) {
  return (
    <>
      <div className="col-md-4 p-4">
        <div className="work rounded-3 overflow-hidden position-relative">
          <LazyLoadImage src={img} alt="" className="w-100 rounded-3" />
          <div
            className="over-flow position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center"
            onClick={() => {
              showImg(img);
            }}
          >
            <i className="fa-solid fa-plus text-white fa-6x"></i>
          </div>
        </div>
      </div>
    </>
  );
}
