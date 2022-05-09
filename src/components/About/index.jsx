import React, { useEffect, useState } from "react";
import "./style.scss";
import { Application } from "@splinetool/runtime";

export default function Index() {
  const vision = `To elevate human experiences using AI that understands the physical world.`;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      let scroll = window.scrollY;
      setScrollY(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const canvas = document.getElementById("canvas3d");
      const app = new Application(canvas);
      app.load("https://prod.spline.design/jOIaI0ihd5cBmxSp/scene.spline");
    }, 5000);
  }, []);

  return (
    <>
      {/* <canvas id="canvas3d"></canvas> */}

      <div className="app-container about__hero-section">
        <div className="app-container__section about__hero">
          <h1>
            Make the World <br />
            <strong className="color-gradient">Human & Inspiring</strong>
          </h1>
          <p>
            As Video AI (Computer Vision) continues to improve exponentially,
            it’s going to transform and continue transforming many domains of
            our life. Fluid aims to drive this transformation.
          </p>
        </div>
      </div>

      <div className="app-container about__vision-container">
        <div className="app-container__section about__vision">
          <p>VISION</p>
          <h1 className="animate-text" data-aos="fade-animation">
            {vision.split("").map((letter, index) => (
              <span
                style={{
                  display: letter === " " ? "inline" : "inline-block",
                }}
              >
                <span
                  style={{
                    "--transitionDelay": `${index * 0.02}s`,
                    display: letter === " " ? "inline" : "inline-block",
                  }}
                >
                  {letter}
                </span>
              </span>
            ))}
          </h1>
        </div>
      </div>

      <div className="app-container">
        <div className="app-container__section">
          <p className="about__values-title">BRAND VALUES</p>
        </div>
      </div>
      <div className="app-container about__values">
        <div
          className="about__values__slider"
          style={{ "--scrollY": `-${scrollY}px` }}
        >
          <h1>Naturally Human</h1> <h1>Wondrously Magical </h1>
          <h1>Accessibly Diverse</h1>
          <h1>Elegantly Pleasing</h1> <h1>Futuristic & Forward</h1>
          <h1>Uplifting & Inspiring</h1> <h1>Powerfully Evocative</h1>
        </div>
        <div
          className="about__values__slider"
          style={{ "--scrollY": `${scrollY}px` }}
        >
          <h1>Naturally Human</h1> <h1>Wondrously Magical </h1>
          <h1>Accessibly Diverse</h1>
          <h1>Elegantly Pleasing</h1> <h1>Futuristic & Forward</h1>
          <h1>Uplifting & Inspiring</h1> <h1>Powerfully Evocative</h1>
        </div>
      </div>
    </>
  );
}
