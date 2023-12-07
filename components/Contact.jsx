import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [Message, setMessage] = useState("");

  const notify = () => toast("Message Sent !!");

  const sendEmail = (e) => {
    e.preventDefault();

    const emailServiceId = "service_tjlpfbd";
    const emailTemplateId = "template_jj0etwv";
    const userId = "QSHBe0kbxByZuVEe-";

    console.log(emailServiceId, emailTemplateId, userId);

    const templateParams = {
      FullName: name,
      Email: email,
      PhoneNo: phoneNo,
      message: Message,
    };

    emailjs.send(emailServiceId, emailTemplateId, templateParams, userId).then(
      (result) => {
        console.log("Email sent successfully!", result.text);
      },
      (error) => {
        console.error("Email could not be sent:", error.text);
      }
    );
  };

  const styles = {
    title: {
      backgroundImage:
        "linear-gradient(to right, #B16CEA, #FF5E69, #FF8A56, #FFA84B)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
      textFillColor: "transparent",
    },
    button: {
      backgroundImage:
        "linear-gradient(to right, #B16CEA, #FF5E69, #FF8A56, #FFA84B)",
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
        id="contact-me"
        className="m-4 sm:m-8 lg:m-12 flex flex-col justify-between sm:flex-row lg:flex-row"
      >
        <div style={styles.title} className="m-4 sm:m-8 lg:m-12">
          <h1 className="text-2xl sm:text-lg lg:text-5xl font-semibold sm:px-5 lg:px-5">
            Contact Me.
          </h1>
          <p className="text-gray-300 text-base p-5">
            Looking to hire a dedicated and skilled professional? <br /> Look no
            further! With a passion for excellence and a proven track record,{" "}
            <br /> I am the perfect candidate for your team. My expertise,
            commitment, and <br />
            adaptability make me an ideal fit for your organization&apos;s
            success. <br />
            Let&apos;s collaborate for mutual growth.
          </p>
          <div className="text-base sm:text-lg lg:text-xl px-5 font-base">
            <div className="">
              <MailIcon className="text-gray-300" />
              <a
                className="mx-3 text-[#FFA84B] opacity-80 cursor-pointer hover:opacity-100"
                href="mailto:nobleperson.dev@gmail.com"
              >
                nobleperson.dev@gmail.com
              </a>
            </div>
            <div className="flex mt-2">
              <PhoneIcon className="text-gray-300" />
              <a
                className="mx-3 text-[#FFA84B] opacity-80 cursor-pointer hover:opacity-100"
                href="tel:+917571062202"
              >
                +91 7571062202
              </a>
            </div>
            <div className="flex mt-2">
              <HomeIcon className="text-gray-300" />
              <p className="mx-3 text-[#FFA84B] opacity-80 cursor-pointer hover:opacity-100">
                {" "}
                Kushinagar UP, India-274402
              </p>
            </div>
          </div>
        </div>
        <div className="m-4 sm:m-8 lg:m-12 lg:w-1/2 text-sm sm:text-lg lg:text-lg">
          <form onSubmit={sendEmail}>
            <div className="flex flex-col p-2">
              <h2>Your Name</h2>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                className="p-3 bg-[#1C1C22] rounded-md"
              />
            </div>
            <div className="flex flex-col p-2">
              <h2>Your Email</h2>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 bg-[#1C1C22] rounded-md"
              />
            </div>
            <div className="flex flex-col p-2">
              <h2>Your Phone No.</h2>
              <input
                type="text"
                name="phoneNo"
                value={phoneNo}
                placeholder="Enter your Phone No."
                onChange={(e) => setPhoneNo(e.target.value)}
                className="p-3 bg-[#1C1C22] rounded-md"
              />
            </div>
            <div className="flex flex-col p-2">
              <h2>Message</h2>
              <textarea
                name="Message"
                placeholder="Write your message to Shamsad Alam"
                cols="30"
                rows="10"
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-3 bg-[#1C1C22] rounded-md"
              />
            </div>
            <div>
              <button
                style={styles.button}
                className="w-fit p-3 m-3 px-5 text-sm rounded-3xl "
                type="submit"
                onClick={notify}
              >
                SUBMIT NOW
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </Reveal>
  );
};

export default Contact;
