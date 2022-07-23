import React from "react";

export default function Layout({ row, col, imgSrc }) {
  return (
    <div
      className={`flex ${
        col == "reverse" ? "flex-col-reverse" : "flex-col"
      } md:${row == "reverse" ? "flex-row-reverse" : "flex-row"} items-center`}
    >
      <div className="w-full md:w-6/12">{children}</div>
      <div className="w-full md:w-6/12">
        <img
          src={imgSrc}
          alt="image"
          className="w-full select-none pointer-events-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
