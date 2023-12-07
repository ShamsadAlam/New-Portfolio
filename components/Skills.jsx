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
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const Skills = () => {
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
        id="skills"
        className="grid place-items-center m-4 sm:m-8 lg:m-12 text-2xl sm:text-lg lg:text-5xl"
      >
        <div style={styles.title}>
          <h1 className="font-semibold px-5 mx-20">Skills.</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:gird-cols-4 lg:grid-cols-6">
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image src={Html} height={80} width={80} alt="html" />
            <div className="w-full p-3 text-center">
              <h2 className="text-sm sm:text-lg lg:text-xl">Html5</h2>
            </div>
          </div>
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image src={Css} height={80} width={80} alt="css" />
            <div className="w-full p-3 text-center">
              <h2 className="text-sm sm:text-lg lg:text-xl">CSS3</h2>
            </div>
          </div>
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image
              src={Javascript}
              height={80}
              width={80}
              alt="javascript"
              className="mt-2"
            />
            <div className="w-full p-3 text-center">
              <h2 className="text-sm sm:text-lg lg:text-xl">JavaScript</h2>
            </div>
          </div>
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image src={Typescript} height={80} width={80} alt="typescript" />
            <div className="w-full p-3 text-center">
              <h2 className="text-sm sm:text-lg lg:text-xl">TypeScript</h2>
            </div>
          </div>
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image src={REACT} height={80} width={80} alt="React" />
            <div className="w-full p-3 text-center">
              <h2 className="text-sm sm:text-lg lg:text-xl">React.js</h2>
            </div>
          </div>
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image
              src={Next}
              height={80}
              width={80}
              alt="Next"
              className="mt-2"
            />
            <div className="w-full p-3 text-center">
              <h2 className="text-sm sm:text-lg lg:text-xl">Next.js</h2>
            </div>
          </div>
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image src={Tailwind} height={80} width={80} alt="TailwindCSS" />
            <div className="w-full p-3 text-center">
              <h2 className="text-sm sm:text-lg lg:text-xl">Tailwind CSS</h2>
            </div>
          </div>
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image src={MaterialUI} height={80} width={80} alt="Material-UI" />
            <div className="w-full p-3 text-center">
              <h2 className="text-sm sm:text-lg lg:text-xl">Material UI</h2>
            </div>
          </div>
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image src={Node} height={80} width={80} alt="Node.js" />
            <div className="w-full p-3 text-center">
              <h2 className="text-sm sm:text-lg lg:text-xl">Node.js</h2>
            </div>
          </div>
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image src={Express} height={80} width={80} alt="Express" />
            <div className="w-full p-3 text-center">
              <h2 className="text-sm sm:text-lg lg:text-xl">Express.js</h2>
            </div>
          </div>
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image src={Nest} height={80} width={80} alt="Nest.js" />
            <div className="w-full p-3 text-center">
              <h2 className="text-sm sm:text-lg lg:text-xl">Nest.js</h2>
            </div>
          </div>
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image
              src={MongoDB}
              height={80}
              width={80}
              alt="MongoDB"
              className="mt-2"
            />
            <div className="w-full p-3 text-center">
              <h2 className="text-sm sm:text-lg lg:text-xl">MongoDB</h2>
            </div>
          </div>
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image
              src={SQL}
              height={80}
              width={80}
              alt="SQL"
              className="mt-2"
            />
            <div className="w-full p-3 text-center">
              <h2 className="text-sm sm:text-lg lg:text-xl">SQL</h2>
            </div>
          </div>
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image src={MySQL} height={80} width={80} alt="MySQL" />
            <div className="w-full p-3 text-center">
              <h2 className="text-sm sm:text-lg lg:text-xl">MySQL</h2>
            </div>
          </div>
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image src={Git} height={80} width={80} alt="Git" />
            <div className="w-full p-3 text-center">
              <h2 className="text-xl">Git</h2>
            </div>
          </div>
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image
              src={Github}
              height={80}
              width={80}
              alt="Github"
              className="mt-2"
            />
            <div className="w-full p-3 text-center">
              <h2 className="text-sm sm:text-lg lg:text-xl">Github</h2>
            </div>
          </div>
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image
              src={Reactnative}
              height={80}
              width={80}
              alt="React-Native"
            />
            <div className="w-full p-3 text-center">
              <h2 className="text-sm sm:text-lg lg:text-xl">React Native</h2>
            </div>
          </div>
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] overflow-hidden border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image src={Android} height={80} width={80} alt="Android" />
            <div className="w-full p-3 text-center">
              <h2 className="text-sm sm:text-lg lg:text-xl">Android</h2>
            </div>
          </div>
          <div className="pt-3 bg-gradient-to-t from-[#2e2d2d] via-[#353536] to-[#414040] border border-gray-500 border-opacity-20 rounded-xl m-8 flex flex-col justify-center items-center shadow-lg shadow-gray-1000 hover:scale-105 ease-in-out duration-1000">
            <Image src={Ios} height={80} width={80} alt="iOS" />
            <div className="w-full p-3 text-center">
              <h2 className="text-sm sm:text-lg lg:text-xl">iOS</h2>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Skills;
