import React, { useState } from "react";
import LandingImageCarousel from "./LandingImageCarousel";

export default function LandingPage() {
  const [style1, setStyle1] = useState();
  const [style2, setStyle2] = useState();
  const [style3, setStyle3] = useState();
  const [style4, setStyle4] = useState();
  const handleMouseEnter = () => {
    setStyle1({
      marginTop: "60vh",
      marginLeft: "-45vw",
      transform: "rotate(-5deg)",
      transition: "all 2s ease-in-out",
    });
    setStyle2({
      marginTop: "60vh",
      marginLeft: "45vw",
      transform: "rotate(5deg)",
      transition: "all 2s ease-in-out",
    });
    setStyle3({
      marginTop: "20vh",
      marginLeft: "-45vw",
      transform: "rotate(5deg)",
      transition: "all 2s ease-in-out",
    });
    setStyle4({
      marginTop: "20vh",
      marginLeft: "45vw",
      transform: "rotate(-5deg)",
      transition: "all 2s ease-in-out",
    });
  };
  const handleMouseLeave = () => {
    setStyle1({
      marginTop: "50vh",
      marginLeft: "-12.5vw",
      transform: "rotate(0deg)",
      transition: "all 2s ease-in-out",
    });
    setStyle2({
      marginTop: "50vh",
      marginLeft: "12.5vw",
      transform: "rotate(0deg)",
      transition: "all 2s ease-in-out",
    });
    setStyle3({
      marginTop: "30vh",
      marginLeft: "-12.5vw",
      transform: "rotate(0deg)",
      transition: "all 2s ease-in-out",
    });
    setStyle4({
      marginTop: "30vh",
      marginLeft: "12.5vw",
      transform: "rotate(0deg)",
      transition: "all 2s ease-in-out",
    });
  };

  return (
    <>
      <div
        className="text-white d-flex flex-column align-items-center"
        style={{
          textShadow: "0rem 0rem 1rem purple",
          padding: "12.5rem 19rem 0rem 19rem",
          height: "100vh",
        }}
      >
        <div className="fw-bold" style={{ fontSize: "3rem" }}>
          ABOUT BLITHCHRON
        </div>
        <div
          className="fs-4"
          style={{
            marginTop: "2.5rem",
            textAlign: "center",
            lineHeight: "1.75rem",
          }}
        >
          Blithchron, the flagship three-day cultural festival of IIT
          Gandhinagar, serves as a vibrant platform for emerging talent from
          universities, colleges, and institutes across India. Each year, the
          fest brings together students in a celebration of creativity,
          competition, and camaraderie, with events like Antarangee (street
          play), Panache (fashion show), the electrifying rock competition
          String Theory, the high-energy dance-off Synchronize, and Pronites
          among many others. With a remarkable footfall of over 22,000 students
          from Ahmedabad, Vadodara, Surat, and Gandhinagar, Blithchron has
          become one of the most anticipated college festivals in the region.
        </div>
      </div>
      <div
        className="d-flex flex-row justify-content-center"
        style={{ height: "100vh", gap: "7.5rem" }}
      >
        <div
          className="d-flex flex-column align-items-center gap-3"
          style={{
            height: "55vh",
            width: "40vw",
            backgroundColor: "rgb(76, 20, 124)",
            marginTop: "30vh",
            borderRadius: "1rem",
          }}
        >
          <div
            className="text-white text-center fs-5"
            style={{
              marginTop: "0.5rem",
              textShadow: "0rem 0rem 0.5rem white",
            }}
          >
            Blithchron 15th Edition Theme Release
          </div>
          <iframe
            title="Video"
            src="https://youtube.com/embed/uGOBZxO32pg"
            width={575}
            height={325}
            style={{ borderRadius: "1rem" }}
          ></iframe>
        </div>
        <div
          className="d-flex flex-column align-items-start gap-3"
          style={{
            height: "55vh",
            width: "37.5vw",
            marginTop: "25vh",
            paddingTop: "10vh",
          }}
        >
          <div
            className="text-white fs-1 fw-bold"
            style={{ textShadow: "0rem 0rem 1rem purple" }}
          >
            THEME
          </div>
          <div
            className="fs-1 fw-italic"
            style={{ color: "rgb(253, 194, 240)" }}
          >
            Relinquish Reality
          </div>
          <div className="text-white fs-6" style={{ lineHeight: "1.25rem" }}>
            The theme of the 15th Edition of Blithchron is “Relinquish Reality”,
            where creativity reigns and the lines between fantasy and reality
            blur. Prepare to step into a realm where the unexpected becomes the
            norm and new experiences unfold at every turn.
          </div>
        </div>
      </div>
      <div
        className="d-flex flex-column align-items-center text-center"
        style={{
          height: "100vh",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="/LandingAnimation/1.webp"
          alt="image-1"
          style={{
            position: "absolute",
            marginLeft: "-12.5vw",
            marginTop: "50vh",
            height: "33vh",
            ...style1,
          }}
        />
        <img
          src="/LandingAnimation/2.webp"
          alt="image-1"
          style={{
            position: "absolute",
            marginLeft: "12.5vw",
            marginTop: "50vh",
            height: "33vh",
            ...style2,
          }}
        />
        <img
          src="/LandingAnimation/3.webp"
          alt="image-3"
          style={{
            position: "absolute",
            marginLeft: "-12.5vw",
            marginTop: "30vh",
            height: "33vh",
            ...style3,
          }}
        />
        <img
          src="/LandingAnimation/4.webp"
          alt="image-4"
          style={{
            position: "absolute",
            marginLeft: "12.5vw",
            marginTop: "30vh",
            height: "33vh",
            ...style4,
          }}
        />
        <div className="text-white fs-1 fw-bold" style={{ marginTop: "30vh" }}>
          Dive Into The
          <br /> <span style={{ color: "rgb(255,65,255)" }}>Cultural</span>
          <br />
          <span style={{ color: "rgb(255,65,255)" }}>Wonderland</span> And
          <br /> Explore Our
          <br /> <span style={{ color: "rgb(255,65,255)" }}>EVENTS</span>
        </div>
        <div
          className="text-white fs-4"
          style={{
            marginTop: "2.5vh",
            padding: "0.7rem 2.5rem",
            borderRadius: "1rem",
            backgroundColor: "rgb(169, 24, 189)",
          }}
        >
          Explore
        </div>
      </div>
      <div
        className="text-white d-flex flex-column align-items-center fs-2"
        style={{
          height: "100vh",
          textShadow: "0rem 0rem 1rem purple",
          paddingTop: "25vh",
        }}
      >
        <div>
          EXPERIENCE <b>BLITHCHRON</b> THROUGH OUR LENS
        </div>
        <div>
          CHECK OUT OUR <b>GALLERY</b> FOR MORE
        </div>
        <div
          className="fs-5"
          style={{
            marginTop: "1rem",
            padding: "0.75rem 2.25rem",
            borderRadius: "0.5rem",
            backgroundColor: "rgb(185,21,205)",
          }}
        >
          More
        </div>
        <LandingImageCarousel />
        <div
          className="text-white fs-4 d-flex flex-column"
          style={{
            height: "12.5vh",
            width: "100%",
            paddingLeft: "1vw",
            gap: "0.5vh",
            backgroundImage: "url('/LandingFooter/Bg.webp')",
          }}
        >
          <div>CONTACT US</div>
          <div className="d-flex flex-row" style={{ gap: "0.5vw" }}>
            <img
              src="/LandingFooter/Insta.png"
              alt="instagram"
              style={{ height: "2.3rem" }}
            />
            <img
              src="/LandingFooter/Yt.png"
              alt="youtube"
              style={{ height: "2.3rem" }}
            />
            <img
              src="/LandingFooter/Twitt.png"
              alt="twitter"
              style={{ height: "2.3rem" }}
            />
            <img
              src="/LandingFooter/Thread.png"
              alt="threads"
              style={{ height: "2.3rem" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
