import React from "react";
import "./style.scss";
import arrowIcon from "../../assets/images/arrow-down.svg";

export default function index() {
  return (
    <>
      <BusinessPageHero />

      {/* supported industries */}
      <div className="app-container">
        <div className="app-container__section business__support">
          <h1>Supported Industries</h1>
        </div>
      </div>

      <div className="business__support__slider-container">
        <div className="business__support__slider">
          <SupportCard />
          <SupportCard />
          <SupportCard />
          <SupportCard />
          <SupportCard />
          <SupportCard />
          <SupportCard />
        </div>
      </div>
      {/* end supported industries */}

      <BusinessPageReasons />
    </>
  );
}

export function BusinessPageHero() {
  return (
    <div className="app-container">
      <div className="app-container__section business__hero">
        <div className="text">
          <h1>
            <strong className="color-gradient">Grow your business</strong> by
            improving visitor & <span>user interaction</span>
          </h1>
          <p>
            Try out a more customized experience business by simulating your
            platform in the Fluid simulator.
          </p>

          <button className="btn--primary">
            Join Fluid Today
            <img src={arrowIcon} alt="" srcSet="" />
          </button>
        </div>
        <div className="img"></div>
      </div>
    </div>
  );
}

export function BusinessPageReasons() {
  return (
    <div className="app-container">
      <div className="app-container__section business__reasons">
        <h1>
          Why is <strong className="color-gradient">Fluid</strong> a good thing{" "}
          <br /> for businesses?
        </h1>

        <div className="business__reasons__grid">
          <div className="business__reasons__reason">
            <svg
              width="102"
              height="101"
              viewBox="0 0 102 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M86.7294 31.6462C86.7055 31.5353 86.7055 31.4205 86.7294 31.3096C86.709 31.2124 86.709 31.1121 86.7294 31.015V30.6362L86.4769 30.005C86.3744 29.8327 86.2467 29.6767 86.0982 29.5421L85.7194 29.2054H85.509L68.9282 18.7266L53.2732 9.04748C52.911 8.76018 52.4965 8.5458 52.0528 8.41623H51.7161C51.34 8.35344 50.956 8.35344 50.5798 8.41623H50.159C49.6702 8.52435 49.2015 8.70899 48.7703 8.96331L17.334 28.5321L16.9553 28.8266L16.5765 29.1633L16.1557 29.4579L15.9453 29.7104L15.6928 30.3416V30.7204V30.9729C15.6519 31.252 15.6519 31.5355 15.6928 31.8146V68.5533C15.6913 69.2685 15.8722 69.9723 16.2183 70.5981C16.5643 71.224 17.0642 71.7514 17.6707 72.1304L49.2332 91.6571L49.8644 91.9096H50.2011C50.9131 92.1354 51.6775 92.1354 52.3894 91.9096H52.7261L53.3574 91.6571L84.6674 72.425C85.2738 72.0459 85.7737 71.5186 86.1198 70.8927C86.4658 70.2668 86.6467 69.5631 86.6453 68.8479V32.1091C86.6453 32.1091 86.7294 31.8146 86.7294 31.6462ZM51.0007 17.5483L58.4915 22.1775L34.9669 36.7383L27.434 32.1091L51.0007 17.5483ZM46.7924 80.6733L23.6465 66.5333V39.6421L46.7924 53.9504V80.6733ZM51.0007 46.5437L42.9628 41.7041L66.4874 27.1012L74.5674 32.1091L51.0007 46.5437ZM78.3549 66.4071L55.209 80.7996V53.9504L78.3549 39.6421V66.4071Z"
                fill="#072ac8"
              />
            </svg>

            <h4>Here is a Reason</h4>
            <p>
              Camera data is processed on-device. Data never leaves your device.
              (No cloud/web services.)
            </p>
          </div>

          <div className="business__reasons__reason">
            <svg
              width="102"
              height="101"
              viewBox="0 0 102 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M86.7294 31.6462C86.7055 31.5353 86.7055 31.4205 86.7294 31.3096C86.709 31.2124 86.709 31.1121 86.7294 31.015V30.6362L86.4769 30.005C86.3744 29.8327 86.2467 29.6767 86.0982 29.5421L85.7194 29.2054H85.509L68.9282 18.7266L53.2732 9.04748C52.911 8.76018 52.4965 8.5458 52.0528 8.41623H51.7161C51.34 8.35344 50.956 8.35344 50.5798 8.41623H50.159C49.6702 8.52435 49.2015 8.70899 48.7703 8.96331L17.334 28.5321L16.9553 28.8266L16.5765 29.1633L16.1557 29.4579L15.9453 29.7104L15.6928 30.3416V30.7204V30.9729C15.6519 31.252 15.6519 31.5355 15.6928 31.8146V68.5533C15.6913 69.2685 15.8722 69.9723 16.2183 70.5981C16.5643 71.224 17.0642 71.7514 17.6707 72.1304L49.2332 91.6571L49.8644 91.9096H50.2011C50.9131 92.1354 51.6775 92.1354 52.3894 91.9096H52.7261L53.3574 91.6571L84.6674 72.425C85.2738 72.0459 85.7737 71.5186 86.1198 70.8927C86.4658 70.2668 86.6467 69.5631 86.6453 68.8479V32.1091C86.6453 32.1091 86.7294 31.8146 86.7294 31.6462ZM51.0007 17.5483L58.4915 22.1775L34.9669 36.7383L27.434 32.1091L51.0007 17.5483ZM46.7924 80.6733L23.6465 66.5333V39.6421L46.7924 53.9504V80.6733ZM51.0007 46.5437L42.9628 41.7041L66.4874 27.1012L74.5674 32.1091L51.0007 46.5437ZM78.3549 66.4071L55.209 80.7996V53.9504L78.3549 39.6421V66.4071Z"
                fill="#072ac8"
              />
            </svg>

            <h4>Here is a Reason</h4>
            <p>
              Camera data is processed on-device. Data never leaves your device.
              (No cloud/web services.)
            </p>
          </div>

          <div className="business__reasons__reason">
            <svg
              width="102"
              height="101"
              viewBox="0 0 102 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M86.7294 31.6462C86.7055 31.5353 86.7055 31.4205 86.7294 31.3096C86.709 31.2124 86.709 31.1121 86.7294 31.015V30.6362L86.4769 30.005C86.3744 29.8327 86.2467 29.6767 86.0982 29.5421L85.7194 29.2054H85.509L68.9282 18.7266L53.2732 9.04748C52.911 8.76018 52.4965 8.5458 52.0528 8.41623H51.7161C51.34 8.35344 50.956 8.35344 50.5798 8.41623H50.159C49.6702 8.52435 49.2015 8.70899 48.7703 8.96331L17.334 28.5321L16.9553 28.8266L16.5765 29.1633L16.1557 29.4579L15.9453 29.7104L15.6928 30.3416V30.7204V30.9729C15.6519 31.252 15.6519 31.5355 15.6928 31.8146V68.5533C15.6913 69.2685 15.8722 69.9723 16.2183 70.5981C16.5643 71.224 17.0642 71.7514 17.6707 72.1304L49.2332 91.6571L49.8644 91.9096H50.2011C50.9131 92.1354 51.6775 92.1354 52.3894 91.9096H52.7261L53.3574 91.6571L84.6674 72.425C85.2738 72.0459 85.7737 71.5186 86.1198 70.8927C86.4658 70.2668 86.6467 69.5631 86.6453 68.8479V32.1091C86.6453 32.1091 86.7294 31.8146 86.7294 31.6462ZM51.0007 17.5483L58.4915 22.1775L34.9669 36.7383L27.434 32.1091L51.0007 17.5483ZM46.7924 80.6733L23.6465 66.5333V39.6421L46.7924 53.9504V80.6733ZM51.0007 46.5437L42.9628 41.7041L66.4874 27.1012L74.5674 32.1091L51.0007 46.5437ZM78.3549 66.4071L55.209 80.7996V53.9504L78.3549 39.6421V66.4071Z"
                fill="#072ac8"
              />
            </svg>

            <h4>Here is a Reason</h4>
            <p>
              Camera data is processed on-device. Data never leaves your device.
              (No cloud/web services.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportCard() {
  return (
    <div className="business__support__card">
      <p className="business__support__card__sub-heading">Lorem ipsum</p>
      <h4 className="color-gradient">Ecommerce.</h4>
      <p className="business__support__card__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut
      </p>
    </div>
  );
}
