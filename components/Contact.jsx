import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [Message, setMessage] = useState("");

  const notify = () => toast("Message Sent !!");

  // Function to send the email using Email.js
  const sendEmail = (e) => {
    e.preventDefault();

    // Configure the Email.js service and template IDs and your user ID
    const emailServiceId = "service_tjlpfbd";
    const emailTemplateId = "template_jj0etwv";
    const userId = "QSHBe0kbxByZuVEe-";

    console.log(emailServiceId, emailTemplateId, userId);
    // Create a template parameters object with the form data
    const templateParams = {
      FullName: name,
      Email: email,
      PhoneNo: phoneNo,
      message: Message,
    };

    // Send the email
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
    container: {
      flex: 1,
      height: "100%",
      marginTop: "15vh",
    },
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

  return (
    <div
      id="contact-me"
      style={styles.container}
      className="flex m-20 px-5 mb-10"
    >
      <div style={styles.title} className="text-5xl w-1/2 flex flex-col gap-10">
        <h1 className="font-semibold px-5 mt-5">Contact Me.</h1>
        <p className="text-gray-300 text-base px-5">
          Looking to hire a dedicated and skilled professional? Look no further!
          With a passion for excellence and a proven track record, I am the
          perfect candidate for your team. My expertise, commitment, and
          adaptability make me an ideal fit for your organization's success.
          Let's collaborate for mutual growth.
        </p>
        <div className="text-sm px-5 font-base">
          <div className="flex">
            <MailIcon className="text-gray-300" />
            <a
              className="mx-3 text-lg text-[#FFA84B] opacity-80 cursor-pointer hover:opacity-100"
              href="mailto:nobleperson.dev@gmail.com"
            >
              nobleperson.dev@gmail.com
            </a>
          </div>
          <div className="flex mt-2">
            <PhoneIcon className="text-gray-300" />
            <p className="mx-3 text-lg text-[#FFA84B] cursor-pointer hover:opacity-100 opacity-80">
              +91 7571062202
            </p>
          </div>
          <div className="flex mt-2">
            <HomeIcon className="text-gray-300" />
            <p className="mx-3 text-lg text-[#FFA84B] opacity-80 cursor-pointer hover:opacity-100">
              {" "}
              Kushinagar UP, India-274402
            </p>
          </div>
          <div className="shadow-lg shadow-gray-800 border w-fit mt-5 rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14251.97075686637!2d83.9038037973133!3d26.744609390248822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993eb4321c21665%3A0x64d79606f3bc3c54!2sKasia%20Bazaar%2C%20Uttar%20Pradesh%20274402!5e0!3m2!1sen!2sin!4v1696353560375!5m2!1sen!2sin"
              width="600"
              height="500"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <form onSubmit={sendEmail}>
          <div className="flex flex-col p-2">
            <h2 className="font-semibold">Your Name</h2>
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
            <h2 className="font-semibold">Your Email</h2>
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
            <h2 className="font-semibold">Your Phone No.</h2>
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
            <h2 className="font-semibold">Message</h2>
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
              className="w-fit p-3 m-3 px-5 text-sm rounded-3xl"
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
  );
};

export default Contact;
