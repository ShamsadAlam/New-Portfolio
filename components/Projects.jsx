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
import { Slide, Fade } from "react-awesome-reveal";
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

  const projectsData = [
    // Web Projects
    {
      image: Portfolio,
      title: "Personal Portfolio Website",
      githubLink: "https://github.com/ShamsadAlam/New-Portfolio",
      liveLink: "/",
    },
    {
      image: RealImage,
      title: "Real-Estate Responsive Website",
      githubLink: "https://github.com/ShamsadAlam/Real-Estate-Project",
      liveLink: "https://real-estate-shamsad.vercel.app/",
    },
    {
      image: NFTWeb,
      title: "NFT Marketplace Webpage",
      githubLink: "https://github.com/ShamsadAlam/NFT-Webpage",
      liveLink: "https://nft-marketplace-shamsad.vercel.app",
    },
    {
      image: MessengerWeb,
      title: "Cross-Platform Messenger Website",
      githubLink: "https://github.com/ShamsadAlam/Signal-Clone",
      liveLink: "https://signal-clone-7571.web.app/",
    },
    {
      image: Netflix,
      title: "Netflix-Clone Movie Webpage",
      githubLink: "https://github.com/ShamsadAlam/Netflix-clone",
      liveLink: "https://netflix-clone-shamsadalam.vercel.app/",
    },
    {
      image: Restaurant,
      title: "Restaurant Menu WebApp",
      githubLink: "https://github.com/ShamsadAlam/restaurent-app",
      liveLink: "https://restaurent-app-one.vercel.app/",
    },
    {
      image: Keep,
      title: "Noble-Keep WebApp",
      githubLink: "https://github.com/ShamsadAlam/Noble-Keep",
      liveLink: "https://noble-keep.vercel.app/",
    },

    // Mobile Projects
    {
      image: NFTApp,
      title: 'React Native App "Pronef" - An NFT Marketplace',
      githubLink: "https://github.com/ShamsadAlam/NFTMarketPlace",
      liveLink: "https://expo.dev/@shamsadalam/NFTMarketplace",
      width: 170,
      height: 170,
    },
    {
      image: MessengerApp,
      title: 'React Native App "Messenger" - A Chat Application',
      githubLink: "https://github.com/ShamsadAlam/Signal-Clone",
      liveLink:
        "https://expo.dev/@nobleperson/signal-clone?serviceType=classic&distribution=expo-go",
      width: 185,
      height: 185,
    },
  ];

  return (
    <Fade>
      <div id="projects" className="m-4 sm:m-8 mt-16 lg:m-12 relative">
        <div
          style={styles.title}
          className="lg:py-5 lg:place-items-start text-2xl sm:text-lg lg:text-5xl"
        >
          <h1 className="font-semibold text-center lg:text-start">
            <span className="text-white">Look At My</span> Projects.
          </h1>
        </div>
        <Fade>
          <div style={styles.title} className="text-2xl sm:text-lg lg:text-5xl">
            <h1 className="font-semibold grid place-items-center mt-6">
              Web Projects.
            </h1>
          </div>
          {/* Web Projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:gird-cols-2 lg:grid-cols-3 gap-8 m-4 sm:m-8 lg:m-12">
            <Slide direction="up" duration={1500}>
              {projectsData
                .filter((project) => !project.width && !project.height)
                .map((project, index) => (
                  <div
                    key={index}
                    className="bg-[#1C1C22] rounded-xl overflow-hidden hover:scale-105 ease-in-out duration-1000 overflow-hidden"
                  >
                    <Image
                      src={project.image}
                      width="auto"
                      height="auto"
                      alt="image"
                      className="p-5"
                    />
                    <div className="bg-[#1C1C22] p-5">
                      <p className="text-xl font-semibold ">{project.title}</p>
                      <div className="flex gap-5">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                        >
                          Github Link
                        </a>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                        >
                          Live Link
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </Slide>
          </div>

          {/* Mobile Projects */}
          <div className="grid place-items-center m-4 sm:m-8 lg:m-12">
            <div style={styles.title}>
              <h1 className="font-semibold text-center text-2xl sm:text-lg lg:text-5xl">
                Mobile Projects.
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
              <Slide direction="up" duration={1500}>
                {projectsData
                  .filter((project) => project.width && project.height)
                  .map((project, index) => (
                    <div
                      key={index}
                      className="flex bg-[#1C1C22] rounded-xl overflow-hidden hover:scale-105 ease-in-out duration-1000 overflow-hidden"
                    >
                      <Image
                        src={project.image}
                        width={project.width}
                        height={project.height}
                        alt="image"
                        className="rounded-xl object-contain"
                      />
                      <div className="mx-5 self-center text-sm sm:text-sm lg:text-xl">
                        <p className="font-semibold">{project.title}</p>
                        <div className="flex justify-around p-3 mt-5">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                          >
                            <GitHubIcon
                              className="cursor-pointer hover:text-[#FF5E69] hover:animate-shake"
                              fontSize="large"
                            />
                          </a>
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 text-sm cursor-pointer hover:text-[#FF5E69]"
                          >
                            <LanguageIcon
                              className="cursor-pointer hover:text-[#FF5E69] hover:animate-shake"
                              fontSize="large"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </Slide>
            </div>
          </div>
        </Fade>
      </div>
    </Fade>
  );
};

export default Projects;
