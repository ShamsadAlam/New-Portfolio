import React from "react";
import Image from "next/image";
import TypoGraphy from "./TypoGraphy";
import { Slide } from "react-awesome-reveal";
import Logo from "../public/Images/noble.png";

const Home = () => {
  const styles = {
    title: {
      "background-image":
        "linear-gradient(to right, #B16CEA, #FF5E69, #FF8A56, #FFA84B)",
      "background-clip": "text",
      "-webkit-background-clip": "text",
      color: "transparent",
      "text-fill-color": "transparent",
    },
  };
  return (
    <Slide direction="left">
      <div
        id="home"
        className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-8 m-4 sm:m-8 lg:mx-12 h-screen"
      >
        <div className="lg:w-1/2 flex justify-center items-center">
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop
                  id="stop1"
                  stop-color="rgba(248, 117, 55, 1)"
                  offset="0%"
                ></stop>
                <stop
                  id="stop2"
                  stop-color="rgba(251, 168, 31, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <mask id="mask1" mask-type="alpha">
              <path
                fill="url(#sw-gradient)"
                d="M24.9,-33.4C30.6,-30.2,32.3,-20.6,35.2,-11.5C38.1,-2.3,42.3,6.4,41.3,14.6C40.3,22.9,34.1,30.7,26.4,34.4C18.6,38.1,9.3,37.7,0.8,36.6C-7.8,35.6,-15.6,33.8,-21.4,29.5C-27.2,25.2,-31,18.3,-34.2,10.6C-37.5,2.9,-40.1,-5.5,-39.1,-14C-38.1,-22.5,-33.5,-31.2,-26.4,-33.9C-19.3,-36.6,-9.6,-33.4,0,-33.4C9.6,-33.4,19.3,-36.6,24.9,-33.4Z"
                width="100%"
                height="100%"
                transform="translate(50 50)"
                stroke-width="0"
              ></path>
            </mask>
            <g mask="url(#mask1)">
              <path
                fill="url(#sw-gradient)"
                d="M24.9,-33.4C30.6,-30.2,32.3,-20.6,35.2,-11.5C38.1,-2.3,42.3,6.4,41.3,14.6C40.3,22.9,34.1,30.7,26.4,34.4C18.6,38.1,9.3,37.7,0.8,36.6C-7.8,35.6,-15.6,33.8,-21.4,29.5C-27.2,25.2,-31,18.3,-34.2,10.6C-37.5,2.9,-40.1,-5.5,-39.1,-14C-38.1,-22.5,-33.5,-31.2,-26.4,-33.9C-19.3,-36.6,-9.6,-33.4,0,-33.4C9.6,-33.4,19.3,-36.6,24.9,-33.4Z"
                width="100%"
                height="100%"
                transform="translate(50 50)"
                stroke-width="0"
              ></path>
              <foreignObject x="8" y="12" width="90" height="90">
                <Image
                  src={Logo}
                  alt="image"
                  layout="fill"
                  objectFit="contain"
                />
              </foreignObject>
            </g>
          </svg>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-center gap-6">
          <h1
            style={styles.title}
            className="font-semibold text-2xl sm:text-lg lg:text-5xl"
          >
            Hello, <br /> I&apos;m Shamsad Alam
          </h1>

          <div className="text-gray-300 text-basic sm:text-lg lg:text-3xl">
            <TypoGraphy />
          </div>
          <div className="text-sm sm:text-lg lg:text-xl flex flex-col justify-between gap-6 sm:flex-row lg:flex-row">
            <a
              href="https://www.linkedin.com/in/shamsadalam7084/"
              target="_sham"
            >
              <button className="border p-3 rounded-3xl px-10 bg-white text-black hover:bg-[#FF5E69] hover:text-white hover:border-[#FF5E69]">
                HIRE ME
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/1Dy0Mc29E3YPkAD6TYJGJm1oc5RPbhNxE/view?usp=sharing"
              target="_sham"
            >
              <button className="border p-3 rounded-3xl px-10 text-white hover:bg-[#FF5E69] hover:text-white hover:border-[#FF5E69]">
                RESUME
              </button>
            </a>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Home;
