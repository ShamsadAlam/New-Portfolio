import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypoGraphy = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Front-End Developer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Back-End Developer",
        1000,
        "Full-Stack (MERN) Developer",
        1000,
        "React-Native Application Developer",
        1000,
        "Open-Source Contributor @ Hecktober Fest",
        1000,
      ]}
      speed={40}
      repeat={Infinity}
    />
  );
};

export default TypoGraphy;
