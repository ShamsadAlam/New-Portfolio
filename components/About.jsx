import React from "react";

const About = () => {
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
      "margin-top": "25vh",
    },
    hr: {
      "margin-top": "10px",
      color: "gray",
      opacity: 0.4,
    },
  };
  return (
    <div
      id="about"
      style={styles.container}
      className=" flex flex-row justify-between"
    >
      <div style={styles.title} className="text-5xl mx-20">
        <h1 className="font-semibold px-5">Education</h1>
        <div className="p-5 hover:-translate-y-2 ease-in-out duration-500">
          <h2 className="text-white text-xl cursor-pointer">
            <a href="https://mjpru.ac.in/index.aspx">
              Mahatma Jyotiba Phule Rohilkhand University (MJPRU) Bareilly, UP
              India
            </a>
          </h2>
          <div className="flex flex-row justify-between">
            <p className="text-gray-300 text-sm">
              Bachelor of Technology (B.Tech) in
              <br />
              Computer Science and Information Technology Engineering
            </p>
            <p className="text-gray-300 text-sm">2020 - 2024</p>
            <hr className="absolute bottom-0 left-0" />
          </div>
          <hr style={styles.hr} />
        </div>
        <div className="p-5 hover:-translate-y-2 ease-in-out duration-500">
          <h2 className="text-white text-xl">
            <a href="https://www.mavmkasia.co.in/">
              Maharshi Arvind Vidya Mandir Kasia Kushinagar, UP India
            </a>
          </h2>
          <div className="flex flex-row justify-between">
            <p className="text-gray-300 text-sm">
              Intermediate (XII) in Mathematics
            </p>
            <p className="text-gray-300 text-sm">2017 - 2019</p>
          </div>
          <hr style={styles.hr} />
        </div>
        <div className="p-5 hover:-translate-y-2 ease-in-out duration-500">
          <h2 className="text-white text-xl cursor-pointer">
            <a href="https://www.mavmkasia.co.in/">
              Maharshi Arvind Vidya Mandir Kasia Kushinagar, UP India
            </a>
          </h2>
          <div className="flex flex-row justify-between">
            <p className="text-gray-300 text-sm">HighSchool (X) in Science</p>
            <p className="text-gray-300 text-sm">2015 - 2017</p>
          </div>
          <hr style={styles.hr} />
        </div>
      </div>
      <div style={styles.title} className="text-5xl mx-20">
        <h1 className="font-semibold px-5">Work Experience</h1>
        <div className="p-5 hover:-translate-y-2 ease-in-out duration-500">
          <h2 className="text-white text-xl cursor-pointer">
            <a href="https://www.builtvisor.com/" target="_shamsad">
              BuiltVisor Pvt. Ltd.
            </a>
          </h2>
          <div className="flex flex-row justify-between">
            <p className="text-gray-300 text-sm">Software Engineer Intern</p>
            <p className="text-gray-300 text-sm">Jan 2023 - Present</p>
          </div>
          <hr style={styles.hr} />
        </div>
      </div>
    </div>
  );
};

export default About;
