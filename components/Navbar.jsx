import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Hamburger from "../public/hamburger.png";
import Close from "../public/close.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }
  };

  const handleItemClick = (elementId) => {
    setSelectedItem(elementId);
    scrollTo(elementId);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`flex justify-between sticky top-0 z-10 ${
        isScrolled
          ? "backdrop-blur-md bg-opacity-30 shadow-lg transition duration-300 ease-in-out"
          : "bg-transparent"
      }`}
    >
      {/* Mobile Menu Button */}
      <div className="md:hidden" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <div className="text-xl cursor-pointer font-extralight">X</div>
        ) : (
          <Image src={Hamburger} height={30} width={30} alt="hamburger" />
        )}
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-14 right-0 bg-gray-900 w-64 h-screen p-4">
          <ul className="flex flex-col gap-4">
            <li
              className={`cursor-pointer ${
                selectedItem === "home" ? "text-[#FF5E69] font-semibold" : ""
              }`}
              onClick={() => {
                handleItemClick("home");
                toggleMobileMenu();
              }}
            >
              Home
            </li>
            <li
              className={`cursor-pointer ${
                selectedItem === "about" ? "text-[#FF5E69] font-semibold" : ""
              }`}
              onClick={() => {
                handleItemClick("about");
                toggleMobileMenu();
              }}
            >
              About
            </li>
            <li
              className={`cursor-pointer ${
                selectedItem === "projects"
                  ? "text-[#FF5E69] font-semibold"
                  : ""
              }`}
              onClick={() => {
                handleItemClick("projects");
                toggleMobileMenu();
              }}
            >
              Projects
            </li>
            <li
              className={`cursor-pointer ${
                selectedItem === "skills" ? "text-[#FF5E69] font-semibold" : ""
              }`}
              onClick={() => {
                handleItemClick("skills");
                toggleMobileMenu();
              }}
            >
              Skills
            </li>
            <li
              className={`cursor-pointer ${
                selectedItem === "contact-me"
                  ? "text-[#FF5E69] font-semibold"
                  : ""
              }`}
              onClick={() => {
                handleItemClick("contact-me");
                toggleMobileMenu();
              }}
            >
              Contact Me
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <ul className="md:flex hidden h-14 gap-10 items-center">
        <li className="ml-16 text-xl font-semibold hover:text-[#FFA84B]">
          <Link href="/">NOBLE.</Link>
        </li>
        <li
          className={`ml-6 cursor-pointer ${
            selectedItem === "home"
              ? "text-[#FF5E69] font-semibold"
              : "hover:text-[#FF5E69]"
          }`}
          onClick={() => handleItemClick("home")}
        >
          Home
        </li>
        <li
          className={`cursor-pointer ${
            selectedItem === "about"
              ? "text-[#FF5E69] font-semibold"
              : "hover:text-[#FF5E69]"
          }`}
          onClick={() => handleItemClick("about")}
        >
          About
        </li>
        <li
          className={`cursor-pointer ${
            selectedItem === "projects"
              ? "text-[#FF5E69] font-semibold"
              : "hover:text-[#FF5E69]"
          }`}
          onClick={() => handleItemClick("projects")}
        >
          Projects
        </li>
        <li
          className={`cursor-pointer ${
            selectedItem === "skills"
              ? "text-[#FF5E69] font-semibold"
              : "hover:text-[#FF5E69]"
          }`}
          onClick={() => handleItemClick("skills")}
        >
          Skills
        </li>
        <li
          className={`cursor-pointer ${
            selectedItem === "contact-me"
              ? "text-[#FF5E69] font-semibold"
              : "hover:text-[#FF5E69]"
          }`}
          onClick={() => handleItemClick("contact-me")}
        >
          Contact Me
        </li>
      </ul>
      <ul className="mr-16 flex h-14 gap-10 items-center rounded-xl cursor-pointer">
        <li className="flex text-black bg-white rounded-3xl p-2 items-center text-xs font-semibold hover:bg-[#FF5E69] hover:text-white">
          <Link href="/">LET'S TALK</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
