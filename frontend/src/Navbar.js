import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      <div
        className="px-5 pt-3 d-flex flex-row gap-5 align-items-end fixed-navbar"
        style={{ marginLeft: "17.5vw", width: "82.5vw", marginTop: "5vh" }}
      >
        {visible && (
          <div
            className={`text-center text-white d-flex flex-row flex-grow-1 justify-content-evenly fs-5 border border-2 rounded`}
          >
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
        )}
      </div>
    </>
  );
}
