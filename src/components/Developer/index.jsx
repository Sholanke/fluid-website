import React, { useEffect } from "react";
import { BusinessPageHero, BusinessPageReasons } from "../Business";
import "./style.scss";
import arrowIcon from "../../assets/images/arrow-down.svg";
import { Link } from "react-router-dom";

export default function Index() {
  useEffect(() => {
    window.hljs.highlightAll();
  }, []);

  return (
    <>
      <BusinessPageHero>
        <>
          <h1>
            <strong className="color-gradient">Integrate Fluid</strong> to your
            web & mobile platform.
          </h1>
          <p>
            Try out a more customized experience business by simulating your
            platform in the Fluid simulator.
          </p>
          <button className="btn--primary">
            Join Fluid Today
            <img src={arrowIcon} alt="" srcSet="" />
          </button>
        </>
      </BusinessPageHero>

      <div className="app-container developer__code-container">
        <div className="app-container__section developer__code">
          <pre>
            <code className="language-js">
              {`// Install with: npm i Fluid-node-v3

            // Add Fluid as a dependency to your project
            const Fluid = require('Fluid-node-v3');

            // Add Fluid as a dependency to your project
            const Fluid = require('Fluid-node-v3');

            // Add Fluid as a dependency to your project
            const Fluid = require('Fluid-node-v3');
            
            // Initialize with your API keys
            const flw = new Fluid(process.env.FLD_PUBLIC_KEY, process.env.FLD_SECRET_KEY);
            
            // Add your payload details
            const details = {
                 ... 
            };
            `}
            </code>
          </pre>

          <div className="text">
            <h3>
              Develop{" "}
              <strong className="color-gradient">Custom Experiences</strong>
            </h3>

            <p>
              Try out a more customized experience for your project, business or
              platform by simulating your platform in the Fluid simulator.
            </p>

            <Link to="/simulator" className="btn--primary">
              Simulate Platform
            </Link>
          </div>
        </div>
      </div>

      <BusinessPageReasons />
    </>
  );
}
