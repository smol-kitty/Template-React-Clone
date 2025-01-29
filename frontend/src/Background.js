import React from "react";

export default function Background() {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100"
      style={{
        backgroundImage: "url('/Background/bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        zIndex: -1,
      }}
    />
  );
}
