import React from "react";
import Image from "next/image";
import Html from "../public/SVGIcons/html.svg";
import Css from "../public/SVGIcons/css.svg";
import Javascript from "../public/SVGIcons/javascript.svg";
import Typescript from "../public/SVGIcons/Typescript.svg";
import REACT from "../public/SVGIcons/React.svg";
import Next from "../public/SVGIcons/Next.svg";
import Tailwind from "../public/SVGIcons/tailwindcss.svg";
import MaterialUI from "../public/SVGIcons/material-ui.svg";
import Node from "../public/SVGIcons/node.svg";
import Express from "../public/SVGIcons/express.svg";
import Nest from "../public/SVGIcons/nest.svg";
import MongoDB from "../public/SVGIcons/mongodb.svg";
import SQL from "../public/SVGIcons/sql.svg";
import MySQL from "../public/SVGIcons/mysql.svg";
import Git from "../public/SVGIcons/git.svg";
import Github from "../public/SVGIcons/github.svg";
import Reactnative from "../public/SVGIcons/react-native.svg";
import Android from "../public/SVGIcons/android.svg";
import Ios from "../public/SVGIcons/ios.svg";
import Postman from "../public/SVGIcons/postman.svg";
import { Slide, Fade } from "react-awesome-reveal";

const Skills = () => {
  const arr = [
    {
      logo: Html,
      title: "Html5",
    },
    {
      logo: Css,
      title: "CSS3",
    },
    {
      logo: Javascript,
      title: "JavaScript",
    },
    {
      logo: Typescript,
      title: "TypeScript",
    },
    {
      logo: REACT,
      title: "React.js",
    },
    {
      logo: Next,
      title: "Next.js",
    },
    {
      logo: Tailwind,
      title: "Tailwind CSS",
    },
    {
      logo: MaterialUI,
      title: "Material UI",
    },
    {
      logo: Node,
      title: "Node.js",
    },
    {
      logo: Express,
      title: "Express.js",
    },
    {
      logo: Nest,
      title: "Nest.js",
    },
    {
      logo: MongoDB,
      title: "MongoDB",
    },
    {
      logo: SQL,
      title: "SQL",
    },
    {
      logo: MySQL,
      title: "MySQL",
    },
    {
      logo: Git,
      title: "Git",
    },
    {
      logo: Github,
      title: "Github",
    },
    {
      logo: Reactnative,
      title: "React Native",
    },
    {
      logo: Android,
      title: "Android",
    },
    {
      logo: Ios,
      title: "iOS",
    },
    {
      logo: Postman,
      title: "Postman",
    },
  ];
  const styles = {
    title: {
      "background-image":
        "linear-gradient(to right, #B16CEA, #FF5E69, #FF8A56, #FFA84B)",
      "background-clip": "text",
      "-webkit-background-clip": "text",
      color: "transparent",
      "text-fill-color": "transparent",
      "margin-top": "10vh",
    },
  };
  return (
    <Fade>
      <div
        id="skills"
        className="grid place-items-center m-4 sm:m-8 lg:m-12 text-2xl sm:text-lg lg:text-5xl"
      >
        <div style={styles.title}>
          <h1 className="font-semibold px-5 mx-20">Skills.</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:gird-cols-4 lg:grid-cols-6">
          <Fade>
            {arr.map((item) => (
              <Slide direction="up" duration={900} key={item.title}>
                <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
                  <Image
                    src={item.logo}
                    height={80}
                    width={80}
                    alt={item.title}
                  />
                  <div className="w-full p-3 text-center">
                    <h2 className="text-sm sm:text-lg lg:text-xl">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </Slide>
            ))}
          </Fade>
        </div>
      </div>
    </Fade>
  );
};

export default Skills;
