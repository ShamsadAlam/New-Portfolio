import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const About = () => {
  const styles = {
    title: {
      "background-image":
        "linear-gradient(to right, #B16CEA, #FF5E69, #FF8A56, #FFA84B)",
      "background-clip": "text",
      "-webkit-background-clip": "text",
      color: "transparent",
      "text-fill-color": "transparent",
    },
    hr: {
      "margin-top": "10px",
      color: "gray",
      opacity: 0.4,
    },
  };
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
  return (
    <Reveal keyframes={customAnimation}>
      <div
        id="about"
        className="flex flex-col justify-between sm:flex-row lg:flex-row m-4 sm:m-8 lg:m-12 h-screen/2"
      >
        {/* EDUCATION */}
        <div style={styles.title} className=" m-4 sm:m-8 lg:m-12">
          <h1 className="text-2xl sm:text-lg lg:text-5xl font-semibold grid place-items-center sm:px-5 lg:px-5">
            Education
          </h1>
          <div className="p-5 hover:-translate-y-2 ease-in-out duration-500">
            <h2 className="text-base sm:text-lg lg:text-xl text-white cursor-pointer">
              <a href="https://mjpru.ac.in/index.aspx">
                Mahatma Jyotiba Phule Rohilkhand University (MJPRU) Bareilly, UP
                India
              </a>
            </h2>
            <div className="flex flex-row justify-between">
              <p className="text-gray-300 text-sm">
                Bachelor of Technology (B.Tech)
                <br />
                Computer Science and IT Engineering
              </p>
              <p className="text-gray-300 text-sm">2020 - 2024</p>
              <hr className="absolute bottom-0 left-0" />
            </div>
            <hr style={styles.hr} />
          </div>
          <div className="p-5 hover:-translate-y-2 ease-in-out duration-500">
            <h2 className="text-white text-base sm:text-lg lg:text-xl">
              <a href="https://www.mavmkasia.co.in/">
                Maharshi Arvind Vidya Mandir Kasia Kushinagar, UP India
              </a>
            </h2>
            <div className="flex flex-row justify-between">
              <p className="text-gray-300 text-sm">
                Intermediate (XII) Mathematics
              </p>
              <p className="text-gray-300 text-sm">2017 - 2019</p>
            </div>
            <hr style={styles.hr} />
          </div>
          <div className="p-5 hover:-translate-y-2 ease-in-out duration-500">
            <h2 className="text-white text-base sm:text-lg lg:text-xl cursor-pointer">
              <a href="https://www.mavmkasia.co.in/">
                Maharshi Arvind Vidya Mandir Kasia Kushinagar, UP India
              </a>
            </h2>
            <div className="flex flex-row justify-between">
              <p className="text-gray-300 text-sm">HighSchool (X) Science</p>
              <p className="text-gray-300 text-sm">2015 - 2017</p>
            </div>
            <hr style={styles.hr} />
          </div>
        </div>

        {/* WORK EXPERIENCE */}
        <div style={styles.title} className="m-4 sm:m-8 lg:m-12">
          <h1 className="text-2xl sm:text-lg lg:text-5xl font-semibold grid place-items-center sm:px-5 lg:px-5">
            Work Experience
          </h1>
          <div className="p-5 hover:-translate-y-2 ease-in-out duration-500">
            <h2 className="text-white text-base sm:text-lg lg:text-xl cursor-pointer">
              <a href="https://www.builtvisor.com/" target="_shamsad">
                BuiltVisor Pvt. Ltd.
              </a>
            </h2>
            <div className="flex flex-row justify-between">
              <p className="text-gray-300 text-sm">Software Engineer Intern</p>
              <p className="text-gray-300 text-sm">Jan 2023 - Present</p>
            </div>
            <hr style={styles.hr} />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default About;
