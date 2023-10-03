import Link from "next/link";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedItem, setSelectedItem] = useState(""); // Track the selected item

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

  return (
    <div
      className={`flex justify-between sticky top-0 z-10 ${
        isScrolled
          ? "bg-gray-300 bg-opacity-5 backdrop-blur-md bg-opacity-75 shadow-lg transition duration-300 ease-in-out"
          : "bg-transparent"
      }`}
    >
      <ul className="flex h-14 gap-10 items-center">
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
