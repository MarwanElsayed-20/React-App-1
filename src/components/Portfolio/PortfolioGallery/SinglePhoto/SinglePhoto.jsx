import React from "react";
import "./single-photo.css";

export default function SinglePhoto({ imgSrc, removeSingleImg }) {
  return (
    <>
      <>
        <div
          className="img-container 100vh d-flex justify-content-center align-items-center position-absolute top-0 start-0 end-0 bottom-0 bg-primary position-fixed
        "
          onClick={() => {
            removeSingleImg();
          }}
        >
          <img src={imgSrc} alt="" className="w-50 single-img" />
        </div>
      </>
    </>
  );
}
