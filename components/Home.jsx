import React from "react";
import Image from "next/image";
import Logo from "../public/Images/noble.png";
import TypoGraphy from "./TypoGraphy";

const Home = () => {
  const styles = {
    container: {
      flex: 1,
      height: "100vh",
    },
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
    <div
      id="home"
      style={styles.container}
      className=" flex flex-col justify-center items-center"
    >
      <div className="flex">
        <Image src={Logo} width={200} height={200} alt="image" />
      </div>

      <div
        style={styles.title}
        className="text-5xl flex flex-col justify-center items-center py-5 w-8/12"
      >
        <h1 className="font-semibold">Hello, I'm Shamsad Alam</h1>
        <br />
        <div className="text-gray-300 -mt-10">
          <TypoGraphy />
        </div>
      </div>
      <p className="text-gray-300 w-5/12 text-center">
        A Full Stack Web Development Using MERN Stack Technology. I specialize
        in React Native cross-platform Application Development (Android & iOS),
        and Responsive Designs.
      </p>
      <div className="flex w-3/12 justify-around mt-5">
        <a href="https://www.linkedin.com/in/shamsadalam7084/" target="_sham">
          <button className="border p-3 rounded-3xl bg-white text-black text-sm hover:bg-[#FF5E69] hover:text-white px-10 hover:border-none">
            HIRE ME
          </button>
        </a>
        <a
          href="https://drive.google.com/file/d/1w-WnVM2kVqJK9VQVKNnrZSb56zKBDdZp/view"
          target="_sham"
        >
          <button className="border p-3 rounded-3xl text-white text-sm hover:bg-[#FF5E69] hover:text-white px-10 hover:border-none">
            RESUME
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
