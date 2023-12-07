import React from "react";
import Image from "next/image";
import Logo from "../public/Images/noble-2.png";
import TypoGraphy from "./TypoGraphy";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const Home = () => {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(2%, 2%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

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
    <Reveal keyframes={customAnimation}>
      <div
        id="home"
        className="flex flex-col sm:flex-row lg:flex-row gap-8 m-4 sm:m-8 lg:mx-12 h-screen"
      >
        <div className="lg:w-1/2 flex justify-center items-center">
          <Image src={Logo} width={500} height={500} alt="image" />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-center gap-6">
          <h1
            style={styles.title}
            className="font-semibold text-2xl sm:text-lg lg:text-5xl"
          >
            Hello, <br /> I'm Shamsad Alam
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
              href="https://drive.google.com/file/d/1w-WnVM2kVqJK9VQVKNnrZSb56zKBDdZp/view"
              target="_sham"
            >
              <button className="border p-3 rounded-3xl px-10 text-white hover:bg-[#FF5E69] hover:text-white hover:border-[#FF5E69]">
                RESUME
              </button>
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Home;
