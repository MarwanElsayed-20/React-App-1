import React from "react";

export default function Title() {
  const title = window.location.href.split("/")[5];
  console.log(title);
  return (
    <>
      <h1 className="text-uppercase mb-3 fw-bolder fs-1">
        {title === "" ? "start framework" : `${title} COMPONENT`}
      </h1>
    </>
  );
}
