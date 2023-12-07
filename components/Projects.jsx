import React from "react";
import Image from "next/image";
import RealImage from "../public/Images/Real-Estate.png";
import NFTWeb from "../public/Images/NFT-Web.png";
import NFTApp from "../public/Images/NFT-App.jpg";
import Netflix from "../public/Images/Netflix.png";
import MessengerWeb from "../public/Images/Messenger-Web.png";
import MessengerApp from "../public/Images/Messenger-App.jpg";
import Keep from "../public/Images/Noble-Keep.png";
import Restaurant from "../public/Images/Restaurent.png";
import Portfolio from "../public/Images/portfolio.png";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  const styles = {
    title: {
      "background-image":
        "linear-gradient(to right, #B16CEA, #FF5E69, #FF5E69, #FFA84B)",
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
      <div id="projects" className="m-4 sm:m-8 lg:m-12 relative">
        <div
          style={styles.title}
          className="lg:py-5 mx-20 lg:place-items-start text-2xl sm:text-lg lg:text-5xl"
        >
          <h1 className="font-semibold text-center lg:text-start">
            {" "}
            <span className="text-white">Look At My</span> Projects.
          </h1>
        </div>
        <div style={styles.title} className="text-2xl sm:text-lg lg:text-5xl">
          <h1 className="font-semibold grid place-items-center mt-6">
            Web Projects.
          </h1>
        </div>
        {/* Web Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:gird-cols-2 lg:grid-cols-3 gap-8 m-4 sm:m-8 lg:m-12">
          <div className="bg-[#1C1C22] rounded-xl overflow-hidden hover:scale-105 ease-in-out duration-1000 overflow-hidden">
            <Image
              src={Portfolio}
              width="auto"
              height="auto"
              alt="image"
              className="p-5"
            />
            <div className="bg-[#1C1C22] p-5">
              <p className="text-xl font-semibold ">
                Personal Portfolio Website
              </p>
              <div className="flex gap-5">
                <a
                  href="https://github.com/ShamsadAlam/New-Portfolio"
                  target="_sham"
                  className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                >
                  Github Link
                </a>
                <a
                  href=""
                  target="_sham"
                  className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#1C1C22] rounded-xl overflow-hidden shadow-lg hover:scale-105 ease-in-out duration-1000 overflow-hidden">
            <Image
              src={RealImage}
              width="auto"
              height="auto"
              alt="image"
              className="p-5"
            />
            <div className="bg-[#1C1C22] p-5">
              <p className="text-xl font-semibold ">
                Real-Estate Responsive Website
              </p>
              <div className="flex gap-5">
                <a
                  href="https://github.com/ShamsadAlam/Real-Estate-Project"
                  target="_sham"
                  className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                >
                  Github Link
                </a>
                <a
                  href="https://real-estate-shamsad.vercel.app/"
                  target="_sham"
                  className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#1C1C22] overflow-hidden rounded-xl shadow-lg hover:scale-105 ease-in-out duration-1000 overflow-hidden">
            <Image
              src={NFTWeb}
              width="auto"
              height="auto"
              alt="image"
              className="p-5"
            />
            <div className="bg-[#1C1C22] p-5">
              <p className="text-xl font-semibold ">NFT Marketplace Webpage</p>
              <div className="flex gap-5">
                <a
                  href="https://github.com/ShamsadAlam/NFT-Webpage"
                  target="_sham"
                  className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                >
                  Github Link
                </a>
                <a
                  href="https://nft-marketplace-shamsad.vercel.app/"
                  target="_sham"
                  className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#1C1C22] overflow-hidden rounded-xl shadow-lg hover:scale-105 ease-in-out duration-1000 overflow-hidden">
            <Image
              src={MessengerWeb}
              width="auto"
              height="auto"
              alt="image"
              className="p-5"
            />
            <div className="bg-[#1C1C22] p-5">
              <p className="text-xl font-semibold mt-1">
                Cross-Platform Messenger Website
              </p>
              <div className="flex gap-5">
                <a
                  href="https://github.com/ShamsadAlam/Signal-Clone"
                  target="_sham"
                  className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                >
                  Github Link
                </a>
                <a
                  href="https://signal-clone-7571.web.app/"
                  target="_sham"
                  className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
          <div className=" bg-[#1C1C22] overflow-hidden rounded-xl shadow-lg hover:scale-105 ease-in-out duration-1000 overflow-hidden">
            <Image
              src={Netflix}
              width="auto"
              height="auto"
              alt="image"
              className="p-5"
            />
            <div className="bg-[#1C1C22] p-5">
              <p className="text-xl font-semibold ">
                Netflix-Clone Movie Webpage
              </p>
              <div className="flex gap-5">
                <a
                  href="https://github.com/ShamsadAlam/Netflix-clone"
                  target="_sham"
                  className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                >
                  Github Link
                </a>
                <a
                  href="https://netflix-clone-shamsadalam.vercel.app/"
                  target="_sham"
                  className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#1C1C22] overflow-hidden rounded-xl shadow-lg hover:scale-105 ease-in-out duration-1000 overflow-hidden">
            <Image
              src={Restaurant}
              width="auto"
              height="auto"
              alt="image"
              className="p-5"
            />
            <div className="bg-[#1C1C22] p-5">
              <p className="text-xl font-semibold ">Restaurant Menu WebApp</p>
              <div className="flex gap-5">
                <a
                  href="https://github.com/ShamsadAlam/restaurent-app"
                  target="_sham"
                  className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                >
                  Github Link
                </a>
                <a
                  href="https://restaurent-app-one.vercel.app/"
                  target="_sham"
                  className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#1C1C22] overflow-hidden rounded-xl shadow-lg hover:scale-105 ease-in-out duration-1000 overflow-hidden">
            <Image
              src={Keep}
              width="auto"
              height="auto"
              alt="image"
              className="p-5"
            />
            <div className="bg-[#1C1C22] p-5">
              <p className="text-xl font-semibold ">Noble-Keep WebApp</p>
              <div className="flex gap-5">
                <a
                  href="https://github.com/ShamsadAlam/Noble-Keep"
                  target="_sham"
                  className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                >
                  Github Link
                </a>
                <a
                  href="https://noble-keep.vercel.app/"
                  target="_sham"
                  className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Projects */}
        <div className="grid place-items-center m-4 sm:m-8 lg:m-12">
          <div style={styles.title}>
            <h1 className="font-semibold text-center text-2xl sm:text-lg lg:text-5xl">
              Mobile Projects.
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:gird-cols-2 lg:grid-cols-3 gap-8 py-6">
            <div className="flex bg-[#1C1C22] rounded-xl overflow-hidden hover:scale-105 ease-in-out duration-1000 overflow-hidden">
              <Image
                src={NFTApp}
                width={170}
                height={170}
                alt="image"
                className="rounded-xl object-contain"
              />
              <div className="mx-5 self-center text-sm sm:text-sm lg:text-xl">
                <p className="font-semibold">
                  NFT Marketplace React Native Application <br /> (Both iOS &
                  Android)
                </p>
                <div className="flex justify-around p-3 mt-5">
                  <a
                    href="https://github.com/ShamsadAlam/NFTMarketPlace"
                    target="_sham"
                    className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                  >
                    <GitHubIcon
                      className="block md:hidden cursor-pointer hover:text-[#FF5E69] hover:animate-shake"
                      fontSize="large"
                    />
                  </a>
                  <a
                    href="https://expo.dev/@shamsadalam/NFTMarketplace"
                    target="_sham"
                    className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                  >
                    <LanguageIcon
                      className="block md:hidden cursor-pointer hover:text-[#FF5E69] hover:animate-shake"
                      fontSize="large"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex bg-[#1C1C22] rounded-xl overflow-hidden hover:scale-105 ease-in-out duration-1000 overflow-hidden">
              <Image
                src={MessengerApp}
                width={185}
                height={185}
                alt="image"
                className="rounded-xl object-contain"
              />
              <div className="mx-5 self-center text-sm sm:text-sm lg:text-xl">
                <p className="font-semibold">
                  Messenger React Native Application <br /> (Both iOS & Android)
                </p>
                <div className="flex justify-around p-3 mt-5">
                  <a
                    href="https://github.com/ShamsadAlam/Signal-Clone"
                    target="_sham"
                    className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                  >
                    <GitHubIcon
                      className="block md:hidden cursor-pointer hover:text-[#FF5E69] hover:animate-shake"
                      fontSize="large"
                    />
                  </a>
                  <a
                    href="https://expo.dev/@nobleperson/signal-clone?serviceType=classic&distribution=expo-go"
                    target="_sham"
                    className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                  >
                    <LanguageIcon
                      className="block md:hidden cursor-pointer hover:text-[#FF5E69] hover:animate-shake"
                      fontSize="large"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Projects;
