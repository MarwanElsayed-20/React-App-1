import React from "react";
import "../Line/line.css";

export default function Line() {
  return (
    <div className="line-style d-flex justify-content-center align-items-center mb-3">
      <div className="line me-3"></div>
      <i className="fa-solid fa-star"></i>
      <div className="line ms-3"></div>
    </div>
  );
}
