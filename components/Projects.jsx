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
import GitHubIcon from "@mui/icons-material/GitHub";
import GitHub from "@mui/icons-material/GitHub";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";

const Projects = () => {
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
    card: {
      height: "25vmax",
    },
  };
  return (
    <div
      id="projects"
      className="grid place-items-center m-4 sm:m-8 lg:m-12 border"
    >
      <div style={styles.title} className="text-5xl mx-20">
        <h1 className="font-semibold px-5">
          <p className="text-white">Look At My</p>
          Projects.
        </h1>
      </div>
      <div
        style={styles.card}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-5 mx-20 justify-around"
      >
        <div className="border border-gray-200 border-opacity-20 relative rounded-xl w-96 shadow-lg shadow-gray-800 hover:scale-105 ease-in-out duration-1000">
          <div className="h-4/6 rounded-t-xl flex justify-center items-center px-3">
            <Image src={Portfolio} width={430} height={430} alt="image" />
          </div>
          <div className="relative border-t border-gray-200 border-opacity-20 absolute bottom-0 bg-[#1C1C22] h-2/6 w-full rounded-b-xl p-6">
            <p className="text-xl font-semibold ">Personal Portfolio Website</p>
            <div className="flex gap-5 absolute bottom-2 p-3 left-2">
              <a
                href=""
                className="text-gray-300 text-sm cursor-pointer hover:text-[#FF8A56]"
              >
                Github Link
              </a>
              <a
                href=""
                className="text-gray-300 text-sm cursor-pointer hover:text-[#FF8A56]"
              >
                Deployed Link
              </a>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 border-opacity-20 relative rounded-xl w-96 shadow-lg shadow-gray-800 hover:scale-105 ease-in-out duration-1000">
          <div className="h-4/6 rounded-t-xl flex justify-center items-center px-3">
            <Image src={RealImage} width={430} height={430} alt="image" />
          </div>
          <div className="relative border-t border-gray-200 border-opacity-20 absolute bottom-0 bg-[#1C1C22] h-2/6 w-full rounded-b-xl p-6">
            <p className="text-xl font-semibold ">
              Real-Estate Responsive Website
            </p>
            <div className="flex gap-5 absolute bottom-2 p-3 left-2">
              <a
                href="https://github.com/ShamsadAlam/Real-Estate-Project"
                target="_sham"
                className="text-gray-300 text-sm cursor-pointer hover:text-[#FF8A56]"
              >
                Github Link
              </a>
              <a
                href="https://real-estate-shamsad.vercel.app/"
                target="_sham"
                className="text-gray-300 text-sm cursor-pointer hover:text-[#FF8A56]"
              >
                Deployed Link
              </a>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 border-opacity-20 relative rounded-xl w-96 shadow-lg shadow-gray-800 hover:scale-105 ease-in-out duration-1000">
          <div className="h-4/6 rounded-t-xl flex justify-center items-center px-3">
            <Image src={NFTWeb} width={430} height={430} alt="image" />
          </div>
          <div className="relative border-t border-gray-200 border-opacity-20 absolute bottom-0 bg-[#1C1C22] h-2/6 w-full rounded-b-xl p-6">
            <p className="text-xl font-semibold ">NFT Marketplace Webpage</p>
            <div className="flex gap-5 absolute bottom-2 p-3 left-2">
              <a
                href="https://github.com/ShamsadAlam/NFT-Webpage"
                className="text-gray-300 text-sm cursor-pointer hover:text-[#FF8A56]"
              >
                Github Link
              </a>
              <a
                href="https://nft-marketplace-shamsad.vercel.app/"
                className="text-gray-300 text-sm cursor-pointer hover:text-[#FF8A56]"
              >
                Deployed Link
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={styles.card}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div className="border border-gray-200 border-opacity-20 relative rounded-xl w-96 shadow-lg shadow-gray-800 hover:scale-105 ease-in-out duration-1000">
          <div className="h-4/6 rounded-t-xl flex justify-center items-center px-3">
            <Image src={MessengerWeb} width={430} height={430} alt="image" />
          </div>
          <div className="relative border-t border-gray-200 border-opacity-20 absolute bottom-0 bg-[#1C1C22] h-2/6 w-full rounded-b-xl p-5">
            <p className="text-xl font-semibold mt-1">
              Cross-Platform Messenger Website
            </p>
            <div className="flex gap-5 absolute bottom-2 p-3 left-2">
              <a
                href="https://github.com/ShamsadAlam/Signal-Clone"
                className="text-gray-300 text-sm cursor-pointer hover:text-[#FF8A56]"
              >
                Github Link
              </a>
              <a
                href="https://signal-clone-7571.web.app/"
                className="text-gray-300 text-sm cursor-pointer hover:text-[#FF8A56]"
              >
                Deployed Link
              </a>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 border-opacity-20 relative rounded-xl w-96 shadow-lg shadow-gray-800 hover:scale-105 ease-in-out duration-1000">
          <div className="h-4/6 rounded-t-xl flex justify-center items-center px-3">
            <Image src={Netflix} width={430} height={430} alt="image" />
          </div>
          <div className="relative border-t border-gray-200 border-opacity-20 absolute bottom-0 bg-[#1C1C22] h-2/6 w-full rounded-b-xl p-6">
            <p className="text-xl font-semibold ">
              Netflix-Clone Movie Webpage
            </p>
            <div className="flex gap-5 absolute bottom-2 p-3 left-2">
              <a
                href="https://github.com/ShamsadAlam/Netflix-clone"
                className="text-gray-300 text-sm cursor-pointer hover:text-[#FF8A56]"
              >
                Github Link
              </a>
              <a
                href="https://netflix-clone-shamsadalam.vercel.app/"
                className="text-gray-300 text-sm cursor-pointer hover:text-[#FF8A56]"
              >
                Deployed Link
              </a>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 border-opacity-20 relative rounded-xl w-96 shadow-lg shadow-gray-800 hover:scale-105 ease-in-out duration-1000">
          <div className="h-4/6 rounded-t-xl flex justify-center items-center px-3">
            <Image src={Restaurant} width={430} height={430} alt="image" />
          </div>
          <div className="relative border-t border-gray-200 border-opacity-20 absolute bottom-0 bg-[#1C1C22] h-2/6 w-full rounded-b-xl p-6">
            <p className="text-xl font-semibold ">Restaurant Menu WebApp</p>
            <div className="flex gap-5 absolute bottom-2 p-3 left-2">
              <a
                href="https://github.com/ShamsadAlam/restaurent-app"
                className="text-gray-300 text-sm cursor-pointer hover:text-[#FF8A56]"
              >
                Github Link
              </a>
              <a
                href="https://restaurent-app-one.vercel.app/"
                className="text-gray-300 text-sm cursor-pointer hover:text-[#FF8A56]"
              >
                Deployed Link
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={styles.card}
        className="flex flex-row m-5 mx-20 justify-start px-10"
      >
        <div className="border border-gray-200 border-opacity-20 relative rounded-xl w-96 shadow-lg shadow-gray-800 hover:scale-105 ease-in-out duration-1000">
          <div className="h-4/6 rounded-t-xl flex justify-center items-center px-3">
            <Image src={Keep} width={430} height={430} alt="image" />
          </div>
          <div className="relative border-t border-gray-200 border-opacity-20 absolute bottom-0 bg-[#1C1C22] h-2/6 w-full rounded-b-xl p-6">
            <p className="text-xl font-semibold ">Noble-Keep WebApp</p>
            <div className="flex gap-5 absolute bottom-2 p-3 left-2">
              <a
                href="https://github.com/ShamsadAlam/Noble-Keep"
                className="text-gray-300 text-sm cursor-pointer hover:text-[#FF8A56]"
              >
                Github Link
              </a>
              <a
                href="https://noble-keep.vercel.app/"
                className="text-gray-300 text-sm cursor-pointer hover:text-[#FF8A56]"
              >
                Deployed Link
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around pt-5">
        <div className="flex flex-row border bg-[#1C1C22] border-gray-200 border-opacity-20 rounded-xl shadow-lg shadow-gray-800 hover:scale-105 ease-in-out duration-1000">
          <Image
            src={NFTApp}
            width={160}
            height={160}
            alt="image"
            className="rounded-xl object-contain"
          />
          <div className="mx-5 self-center">
            <p className="text-xl font-semibold w-80">
              NFT Marketplace React Native Application (Both iOS & Android)
            </p>
            <div className="flex justify-around p-3 mt-5">
              <a
                href="https://github.com/ShamsadAlam/NFTMarketPlace"
                className="text-gray-300 text-sm cursor-pointer hover:text-[#FF8A56]"
              >
                Github Link
              </a>
              <a
                href="https://expo.dev/@shamsadalam/NFTMarketplace"
                className="text-gray-300 text-sm cursor-pointer hover:text-[#FF8A56]"
              >
                Deployed Link
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row border bg-[#1C1C22] border-gray-200 border-opacity-20 rounded-xl shadow-lg shadow-gray-800 hover:scale-105 ease-in-out duration-1000">
          <Image
            src={MessengerApp}
            width={170}
            height={170}
            alt="image"
            className="rounded-xl object-contain"
          />
          <div className="mx-5 self-center">
            <p className="text-xl font-semibold w-80">
              Messenger React Native Application (Both iOS & Android)
            </p>
            <div className="flex justify-around p-3 mt-5">
              <a
                href="https://github.com/ShamsadAlam/Signal-Clone"
                className="text-gray-300 text-sm cursor-pointer hover:text-[#FF8A56]"
              >
                Github Link
              </a>
              <a
                href="https://expo.dev/@nobleperson/signal-clone?serviceType=classic&distribution=expo-go"
                className="text-gray-300 text-sm cursor-pointer hover:text-[#FF8A56]"
              >
                Deployed Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
