import React from "react";
import "./loading.css";

export default function Loading() {
  return (
    <>
      <div className="loading">
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    </>
  );
}
