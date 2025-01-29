import React, { useEffect, useRef } from "react";
import "./LandingImageCarousel.css";

const LandingImageCarousel = () => {
  const images = [
    "/LandingCarousel/Image-1.webp",
    "/LandingCarousel/Image-2.webp",
    "/LandingCarousel/Image-3.webp",
    "/LandingCarousel/Image-4.webp",
    "/LandingCarousel/Image-5.webp",
    "/LandingCarousel/Image-6.webp",
    "/LandingCarousel/Image-7.webp",
    "/LandingCarousel/Image-8.webp",
    "/LandingCarousel/Image-9.webp",
  ];

  const imageContainerRef = useRef(null);

  useEffect(() => {
    const container = imageContainerRef.current;
    container.style.animation = "slide 15s linear infinite";
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="image-belt" ref={imageContainerRef}>
        {images.concat(images).map((src, index) => (
          <img key={index} src={src} alt={`carousel-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default LandingImageCarousel;
