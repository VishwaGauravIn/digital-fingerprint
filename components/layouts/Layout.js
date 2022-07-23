import React from "react";

export default function Layout({ row, col, imgSrc, children }) {
  return (
    <div
      className={`flex ${
        col == "reverse" ? "flex-col-reverse" : "flex-col"
      } md:${row == "reverse" ? "flex-row-reverse" : "flex-row"} justify-center`}
    >
      <div className="w-full md:w-6/12 justify-center flex flex-col">{children}</div>
      <div className="w-full md:w-6/12 flex justify-center items-center">
        <img
          src={imgSrc}
          alt="image"
          className="select-none pointer-events-none w-11/12"
          draggable={false}
        />
      </div>
    </div>
  );
}
