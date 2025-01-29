import React from "react";

export default function Navbar() {
  return (
    <div className="px-5 pt-3 d-flex flex-row gap-5 align-items-end fixed-navbar">
      <img src="/logo.svg" alt="logo" width="200px" />
      <div className="text-center text-white d-flex flex-row flex-grow-1 justify-content-evenly fs-5 border border-2 rounded">
        <div
          className="d-flex flex-grow-1 justify-content-center nav-element"
          style={{ cursor: "pointer" }}
        >
          EVENTS
        </div>
        <div
          className="d-flex flex-grow-1 justify-content-center nav-element"
          style={{ cursor: "pointer" }}
        >
          GALLERY
        </div>
        <div
          className="d-flex flex-grow-1 justify-content-center nav-element"
          style={{ cursor: "pointer" }}
        >
          MERCH
        </div>
        <div
          className="d-flex flex-grow-1 justify-content-center nav-element"
          style={{ cursor: "pointer" }}
        >
          CA PROGRAM
        </div>
        <div
          className="d-flex flex-grow-1 justify-content-center nav-element"
          style={{ cursor: "pointer" }}
        >
          TEAM
        </div>
        <div
          className="d-flex flex-grow-1 justify-content-center nav-element"
          style={{ cursor: "pointer" }}
        >
          SPONSORS
        </div>
      </div>
    </div>
  );
}
