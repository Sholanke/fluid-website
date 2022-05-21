import React, { useState } from "react";
import "./style.scss";
import arrowIcon from "../../assets/images/arrow-down.svg";

const industries = [
  {
    checked: true,
    name: "Retail & Shopping",
    src: "https://images.squarespace-cdn.com/content/v1/572e522f044262a7f8bb164f/1509467650324-MAVH2BWW0OC7G5R9RBR4/online+shopping+cover+photo.jpg?format=1500w",
    description: `Enable your users to engage, explore, and "play with" products while shopping online.`,
  },
  {
    name: "Games",
    src: "https://media.istockphoto.com/photos/asian-chinese-sibling-brother-sitting-on-sofa-playing-online-video-picture-id1299947977?b=1&k=20&m=1299947977&s=170667a&w=0&h=7nLM0WMYFjvBhrRhvVzJkOXc_TlZng_KLTXs9lOM9U0=",
    description: "Create touchless games for more action, and more excitement.",
  },
  {
    name: "Websites & Apps",
    src: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGljYXRpb24lMjBkZXNpZ258ZW58MHx8MHx8&w=1000&q=80",
    description:
      "Enable touchless navigation, content selection & manipulation.",
  },
  {
    name: "Marketing & Advertising",
    src: "https://images.unsplash.com/photo-1557858310-9052820906f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2ZXJ0aXNpbmd8ZW58MHx8MHx8&w=1000&q=80",
    description:
      "Create captivating, unforgettable brand & product experiences.",
  },
  {
    name: "Public Menus & Kiosks",
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmlydHVhbCUyMHNjcmVlbnxlbnwwfHwwfHw%3D&w=1000&q=80",
    description:
      "Create touchless menus for cleaner & more usable interactions.",
  },
];

const heroSliderList = [
  {
    text: "Static Gestures & Dynamic Actions",
    src: "https://www.wallpaperflare.com/static/759/378/531/mi-vr-xiaomi-vr-virtual-reality-wallpaper.jpg",
  },
  {
    text: "Touchless Device control",
    src: "https://media.istockphoto.com/photos/happy-young-man-using-virtual-reality-glasses-picture-id1306303354?b=1&k=20&m=1306303354&s=170667a&w=0&h=6s5YyqmIcoEgjqy-h47T4qcRfT7wirCnWWyVnqbgpQg=",
  },
  {
    text: "Static Gestures & Dynamic Actions",
    src: "https://www.wallpaperflare.com/static/759/378/531/mi-vr-xiaomi-vr-virtual-reality-wallpaper.jpg",
  },
  {
    text: "Touchless Device control",
    src: "https://media.istockphoto.com/photos/happy-young-man-using-virtual-reality-glasses-picture-id1306303354?b=1&k=20&m=1306303354&s=170667a&w=0&h=6s5YyqmIcoEgjqy-h47T4qcRfT7wirCnWWyVnqbgpQg=",
  },
  {
    text: "Static Gestures & Dynamic Actions",
    src: "https://www.wallpaperflare.com/static/759/378/531/mi-vr-xiaomi-vr-virtual-reality-wallpaper.jpg",
  },
  {
    text: "Touchless Device control",
    src: "https://media.istockphoto.com/photos/happy-young-man-using-virtual-reality-glasses-picture-id1306303354?b=1&k=20&m=1306303354&s=170667a&w=0&h=6s5YyqmIcoEgjqy-h47T4qcRfT7wirCnWWyVnqbgpQg=",
  },
  {
    text: "Static Gestures & Dynamic Actions",
    src: "https://www.wallpaperflare.com/static/759/378/531/mi-vr-xiaomi-vr-virtual-reality-wallpaper.jpg",
  },
  {
    text: "Touchless Device control",
    src: "https://media.istockphoto.com/photos/happy-young-man-using-virtual-reality-glasses-picture-id1306303354?b=1&k=20&m=1306303354&s=170667a&w=0&h=6s5YyqmIcoEgjqy-h47T4qcRfT7wirCnWWyVnqbgpQg=",
  },
  {
    text: "Static Gestures & Dynamic Actions",
    src: "https://www.wallpaperflare.com/static/759/378/531/mi-vr-xiaomi-vr-virtual-reality-wallpaper.jpg",
  },
  {
    text: "Touchless Device control",
    src: "https://media.istockphoto.com/photos/happy-young-man-using-virtual-reality-glasses-picture-id1306303354?b=1&k=20&m=1306303354&s=170667a&w=0&h=6s5YyqmIcoEgjqy-h47T4qcRfT7wirCnWWyVnqbgpQg=",
  },
  {
    text: "Static Gestures & Dynamic Actions",
    src: "https://www.wallpaperflare.com/static/759/378/531/mi-vr-xiaomi-vr-virtual-reality-wallpaper.jpg",
  },
  {
    text: "Touchless Device control",
    src: "https://media.istockphoto.com/photos/happy-young-man-using-virtual-reality-glasses-picture-id1306303354?b=1&k=20&m=1306303354&s=170667a&w=0&h=6s5YyqmIcoEgjqy-h47T4qcRfT7wirCnWWyVnqbgpQg=",
  },
];

export default function Index() {
  const [industry, setIndustry] = useState(industries[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) =>
      prev === heroSliderList.length - 1 ? prev : prev + 1
    );
  };

  const previous = () => {
    setActiveIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  const generateClass = (index) => {
    if (activeIndex === heroSliderList.length - 1)
      if (index === 0) return "next";
    if (activeIndex === 0)
      if (index === heroSliderList.length - 1) return "done";
    if (index < activeIndex) return "done";
    else if (index === activeIndex) return "active";
    else if (index - 1 === activeIndex) return "next";
    return "inActive";
  };

  const handleIndustryChange = ({ currentTarget: { value } }) => {
    const _industry = industries.filter((industry) => {
      return industry.name.toLocaleLowerCase() === value;
    })[0];
    setIndustry(_industry);
  };

  const scrollToDemo = () => {
    const demoSection = document.querySelector("#fluid-ride");
    demoSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="app-container">
        <div className="app-container__section home__hero">
          <div className="home__hero__text">
            <span>NO TOUCH, NO GADGET,</span>
            <h1 className="color-gradient">
              More human
              <br /> user experiences.
            </h1>

            <p>
              Build touchless experiences your users love, with pre-made,
              all-software Motion Interaction solutions from Fluid.
            </p>

            <button onClick={scrollToDemo} className="btn--primary">
              Try a Fluid demo
              <img src={arrowIcon} alt="" srcSet="" />
            </button>

            <svg
              width="46"
              height="98"
              viewBox="0 0 46 98"
              fill="none"
              className="home__hero__scroll-arrow"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41 5L23 23L5 5"
                stroke="#DAE0FA"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M41 40L23 58L5 40"
                stroke="#DAE0FA"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M41 75L23 93L5 75"
                stroke="#DAE0FA"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="home__hero__image">
            <div className="home__hero__image__illustration">
              {heroSliderList.map(({ src }, index) => (
                <div
                  className={`image-container ${
                    index === activeIndex ? "active" : ""
                  } ${index < activeIndex ? "done" : ""}`}
                >
                  <img src={src} alt="" srcSet="" key={index} />
                </div>
              ))}
            </div>
            <div className="home__hero__image__line"></div>
            <div className="home__hero__image__text">
              <button onClick={previous}>
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="13.5"
                    cy="13.5"
                    r="13.5"
                    transform="rotate(-90 13.5 13.5)"
                    fill="#072AC8"
                  />
                  <path
                    d="M9 15L13 11L17 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p>
                {heroSliderList.map(({ text }, index) => (
                  <span className={generateClass(index)} key={index}>
                    {text}
                  </span>
                ))}
              </p>
              <button onClick={next}>
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="13.5"
                    cy="13.5"
                    r="13.5"
                    transform="rotate(90 13.5 13.5)"
                    fill="#072AC8"
                  />
                  <path
                    d="M18 12L14 16L10 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="app-container">
        <div className="app-container__section home__ride video">
          <h2 data-aos="fade-up">
            See the magical <strong className="color-gradient">Fluid</strong>{" "}
            vision.
          </h2>

          <div className="home__ride__video" data-aos="fade-up">
            <div className="home__hero__image__play">
              <svg
                width="142"
                height="142"
                viewBox="0 0 142 142"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="70.98" cy="70.98" r="70.48" stroke="#072AC8" />
              </svg>

              <svg
                width="67"
                height="67"
                viewBox="0 0 67 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="play-btn"
              >
                <circle cx="33.0298" cy="33.0298" r="33.0298" fill="#072AC8" />
                <path
                  d="M42.5957 29.5658C45.2624 31.1054 45.2624 34.9544 42.5957 36.494L31.247 43.0462C28.5803 44.5858 25.247 42.6613 25.247 39.5821L25.247 26.4777C25.247 23.3985 28.5804 21.474 31.247 23.0136L42.5957 29.5658Z"
                  fill="white"
                />
              </svg>

              <p>Play Video</p>
            </div>
          </div>
        </div>
      </div>

      <div className="app-container home-video-arrows">
        <svg
          width="640"
          height="98"
          viewBox="0 0 640 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M41 5L23 23L5 5"
              stroke="#DAE0FA"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M41 40L23 58L5 40"
              stroke="#DAE0FA"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M41 75L23 93L5 75"
              stroke="#DAE0FA"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          <g>
            <path
              d="M635 5L617 23L599 5"
              stroke="#DAE0FA"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M635 40L617 58L599 40"
              stroke="#DAE0FA"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M635 75L617 93L599 75"
              stroke="#DAE0FA"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      <div className="app-container" id="fluid-ride">
        <div className="app-container__section home__ride simulation-container">
          <h2 data-aos="fade-up">
            Try a <strong className="color-gradient">Demo</strong>, Immerse
            yourself.
          </h2>

          <div
            className="home__ride__video simulation"
            data-aos="fade-up"
          ></div>
        </div>
      </div>

      <div className="app-container home__why-container">
        <div className="app-container__section home__why">
          <h2 data-aos="fade-up">
            Grow your business by dramatically improving{" "}
            <strong className="color-gradient">Access,</strong>{" "}
            <strong className="color-gradient">Usability,</strong> and{" "}
            <strong className="color-gradient">Satisfaction.</strong>
          </h2>

          <div className="video home__why__reasons" data-aos="fade-up">
            <HomeReason
              title="Drive brand value. <br/> Boost sales."
              description="Touch or Mouse is <strong>not</strong> the right way to experience 3D or public content. Give your users better, by empowering them to interact using natural Motion."
            />
            <HomeReason
              title="Runs on-device. <br/> Private & secure."
              description="Our proprietary Motion Understanding technology runs directly on your users' devices—not the cloud. This means it's not only fast & accurate, but also private & secure."
            />
            <HomeReason
              title={`"It's just software." <br/> And, it just works.`}
              description="No special cameras, glasses, gloves, or batteries required. Integrate Fluid—with as little as a few lines of code—and get advanced, always up-to-date Motion Interaction instantly."
            />
          </div>
        </div>
      </div>

      <div className="app-container">
        <div className="app-container__section home__navigation">
          <h2 data-aos="fade-up">
            Motion Interaction{" "}
            <strong className="color-gradient">Capabilities</strong>
          </h2>
          <p className="home__navigation__description" data-aos="fade-up">
            Instinctive. Intuitive. Interact with 3D objects just as you would
            in real life. Manipulate 2D content—or navigate 2D app
            interfaces—just as you would with touch, but from afar.
          </p>

          <div className="home__navigation__tab-ctrl" data-aos="fade-up">
            <button style={{ opacity: 0.5 }}>
              2D Capabilities (coming soon)
            </button>
            <button className="active color-gradient">3D Capabilities</button>
          </div>
          <div className="home__navigation__tab">
            <div className="text">
              <h3 className="color-gradient" data-aos="fade-up">
                3D Asset Interaction
              </h3>
              <p data-aos="fade-up">
                Rotate with an open hand. <br />
                Zoom with a pinch. <br />
                Spin with a swipe.
              </p>

              <button
                data-aos="fade-up"
                onClick={scrollToDemo}
                className="btn--primary"
              >
                Try a Fluid 3D demo
                <img src={arrowIcon} alt="" srcSet="" />
              </button>
            </div>
            <div className="image" data-aos="fade-left"></div>
          </div>
        </div>
      </div>

      <div className="app-container home__magic-container">
        <div className="app-container__section home__magic">
          <div className="text">
            <h3 className="color-gradient" data-aos="fade-up">
              Digital superpowers
              <br />
              you can share.
            </h3>
            <p data-aos="fade-up">
              Elegantly pleasing on the outside, remarkably advanced on the
              inside. Get up & running quickly with our simple JS plugin that
              you can add directly to your website or web app. Imbue your
              existing user experiences with magical Motion Interaction.
            </p>
          </div>
        </div>
      </div>

      <div className="app-container home__usable-container">
        <div className="app-container__section home__usable">
          <div className="img">
            {industries.map((i) => (
              <img
                src={i.src}
                className={`${i.name === industry.name ? "active" : ""}`}
                alt=""
                srcSet=""
              />
            ))}
          </div>
          <div className="text">
            <h3 className="text__heading" data-aos="fade-up">
              Tailored solutions for{" "}
              <strong className="color-gradient">Many Industries.</strong>
            </h3>
            <p className="text__description" data-aos="fade-up">
              Different use cases require different solutions. That's why we
              provide a carefully curated—pre-made— Motion Interaction solution
              "template" for each scenario.
            </p>

            <div data-aos="fade-up">
              {industries.map((i) => (
                <UsableIn
                  onChange={handleIndustryChange}
                  checked={i.checked}
                  {...i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function UsableIn({ checked, name, description, onChange }) {
  return (
    <label className="home__usable__use-container">
      <input
        defaultChecked={checked}
        onChange={onChange}
        value={name.toLocaleLowerCase()}
        type="radio"
        name="use"
        id="use"
      />
      <div className="home__usable__use">
        <div className="home__usable__use__header">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 14H5C3.34315 14 2 12.6569 2 11V5C2 3.34315 3.34315 2 5 2H15C16.6569 2 18 3.34315 18 5V11C18 12.6569 16.6569 14 15 14H11V16H13C13.5523 16 14 16.4477 14 17C14 17.5523 13.5523 18 13 18H7C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16H9V14ZM15 4H5C4.44772 4 4 4.44772 4 5V11C4 11.5523 4.44772 12 5 12H15C15.5523 12 16 11.5523 16 11V5C16 4.44772 15.5523 4 15 4Z"
                fill="black"
              />
            </svg>
          </span>

          <div>
            <h5>{name}</h5>
            <p className="home__usable__use__description">{description}</p>

            <a className="home__usable__use__link" href="/">
              See It In Action{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 6L11 10L7 14"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </label>
  );
}

function HomeReason({ title, description }) {
  const createMarkup = (innerHTML) => {
    return { __html: innerHTML };
  };

  return (
    <div className=" home__why__reasons__reason">
      <div className="icon-holder">
        <span>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.175 20H37.5V12.5C37.5 12.5 37.5 0 25 0C12.5 0 12.5 12.5 12.5 12.5V20H9.825C8.54533 20 7.31807 20.5083 6.41321 21.4132C5.50835 22.3181 5 23.5453 5 24.825V45.2C5.00661 46.4753 5.51787 47.6962 6.42202 48.5956C7.32617 49.4951 8.54965 50 9.825 50H40.175C41.4547 50 42.6819 49.4916 43.5868 48.5868C44.4916 47.6819 45 46.4547 45 45.175V24.825C45 23.5453 44.4916 22.3181 43.5868 21.4132C42.6819 20.5083 41.4547 20 40.175 20ZM17.5 13.75C17.5 10 17.5 5 25 5C32.5 5 32.5 10 32.5 13.75V20H17.5V13.75ZM25 40C24.0111 40 23.0444 39.7068 22.2221 39.1573C21.3999 38.6079 20.759 37.827 20.3806 36.9134C20.0022 35.9998 19.9031 34.9945 20.0961 34.0245C20.289 33.0546 20.7652 32.1637 21.4645 31.4645C22.1637 30.7652 23.0546 30.289 24.0245 30.0961C24.9945 29.9031 25.9998 30.0022 26.9134 30.3806C27.827 30.759 28.6079 31.3999 29.1573 32.2221C29.7068 33.0444 30 34.0111 30 35C30 36.3261 29.4732 37.5979 28.5355 38.5355C27.5979 39.4732 26.3261 40 25 40Z"
              fill="#072AC8"
            />
          </svg>
        </span>
        <h3 dangerouslySetInnerHTML={createMarkup(title)}></h3>
      </div>
      <p dangerouslySetInnerHTML={createMarkup(description)}></p>
    </div>
  );
}
