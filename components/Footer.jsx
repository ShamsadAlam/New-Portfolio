import React from "react";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }
  };

  const styles = {
    title: {
      "background-image":
        "linear-gradient(to right, #B16CEA, #FF5E69, #FF8A56, #FFA84B)",
    },
    hr: {
      "margin-top": "10px",
      color: "gray",
      opacity: 0.4,
    },
  };
  return (
    <div className="text-base sm:text-lg lg:text-xl m-4 sm:m-8 lg:m-12">
      <hr style={styles.hr} />
      <div className="flex flex-row justify-between flex flex-col justify-between sm:flex-row lg:flex-row ">
        <div className="flex flex-col justify-around p-5">
          <h1 className="text-3xl font-semibold cursor-pointer hover:text-[#FFA84B]">
            NOBLE.
          </h1>
          <p className="text-[#FFA84B]">&copy; Designed by Shamsad Alam</p>
        </div>
        <div className="flex justify-center items-center gap-12">
          <ul className="flex gap-20">
            <li
              className="text-gray-300 text-base cursor-pointer hover:text-[#FF5E69]"
              onClick={() => scrollTo("home")}
            >
              Home
            </li>
            <li
              className="text-gray-300 text-base cursor-pointer hover:text-[#FF5E69]"
              onClick={() => scrollTo("about")}
            >
              About
            </li>
            <li
              className="text-gray-300 text-base cursor-pointer hover:text-[#FF5E69]"
              onClick={() => scrollTo("contact-me")}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-12 mt-4 sm:mt-8 lg:m-12">
          <div className="text-gray-300">
            <a
              href="https://www.linkedin.com/in/shamsadalam7084/"
              target="_sham"
            >
              <LinkedInIcon
                className="cursor-pointer hover:text-[#FFA84B]"
                fontSize="large"
              />
            </a>
          </div>
          <div className="text-gray-300">
            <a href="https://github.com/ShamsadAlam" target="_sham">
              <GitHubIcon
                className="cursor-pointer hover:text-[#FFA84B]"
                fontSize="large"
              />
            </a>
          </div>
          <div className="text-gray-300">
            <a
              href="https://www.instagram.com/mr._shamsad_alam/"
              target="_sham"
            >
              <InstagramIcon
                className="cursor-pointer hover:text-[#FFA84B]"
                fontSize="large"
              />
            </a>
          </div>
          <div className="text-gray-300">
            <a
              href="https://www.instagram.com/mr._shamsad_alam/"
              target="_sham"
            >
              <FacebookIcon
                className="cursor-pointer hover:text-[#FFA84B] hover:animate-shake"
                fontSize="large"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
