import React from "react";

export default function Title() {
  const title = window.location.pathname;
  return (
    <>
      <h1 className="text-uppercase mb-3 fw-bolder fs-1">
        {title === "/" ? "start framework" : `${title.slice(1)} COMPONENT`}
      </h1>
    </>
  );
}
