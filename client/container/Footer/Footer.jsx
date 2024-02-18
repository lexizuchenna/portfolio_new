"use client";

import { useState } from "react";
import axios from "axios";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);

    if (Object.values(formData).includes("")) {
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post("/api/send-mail", formData);

      if (data === "success") {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setIsFormSubmitted(true);

        setTimeout(() => setIsFormSubmitted(false), 3000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="head-text">
        You can contact me using any of the medium below <br />
        or you can send me a message using the contact form
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <a href="mailto:lextechspec@gmail.com" className="p-text">
            <img src={"/images/email.png"} alt="" />
          </a>
        </div>
        <div className="app__footer-card">
          <a href="tel:+2347043696226" className="p-text">
            <img src={"/images/mobile.png"} alt="" />
          </a>
        </div>
        <div className="app__footer-card">
          <a href="https://wa.me/+2347043696226" className="p-text">
            <img src={"/images/whatsapp.png"} alt="" />
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              className="p-text"
              onChange={handleChangeInput}
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              className="p-text"
              onChange={handleChangeInput}
              name="email"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button className="p-text" type="button" onClick={handleSubmit}>
            {loading ? "Sending ..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thanks for in reaching out, 😄 <br /> I give you a reply as soon as
            possible
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
