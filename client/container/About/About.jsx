"use client";

import "./About.scss";

import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  return (
    <>
      <h2 className="head-text">
        About<span> Me</span>
      </h2>
      <div className="app__profiles">
        <motion.div
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          <p className="p-text2">
            A seasoned <span>full-stack developer</span> with over 6 years of
            hands-on experience in building robust web applications. My journey
            began with <span>HTML, CSS, and JavaScript</span>, where I honed my
            skills over the course of 6 years, mastering the art of crafting
            intuitive and engaging user interfaces.
            <br /> <br />
            💻 For the past 5 years, I've delved deep into the world of modern
            web development, specializing in{" "}
            <span>React, Next.js, and Node.js (Express).</span> Whether it's
            crafting dynamic front-end experiences with React or architecting
            scalable back-end solutions with Node.js, I thrive on the challenges
            that come with building cutting-edge applications.
            <br /> <br />
            🔍 In addition to my front-end and back-end expertise, I bring
            extensive experience in database management. Over the years, I've
            worked extensively with <span>MongoDB</span>, leveraging its
            flexibility and scalability to handle vast amounts of data
            efficiently. I've also dived into <span>MySQL</span>, where I've
            quickly adapted and applied my knowledge to build robust relational
            database solutions.
            <br /> <br />
            🚀 What sets me apart is my passion for crafting elegant solutions
            that not only meet but exceed user expectations. I thrive in
            collaborative environments, where I can leverage my technical
            expertise to drive innovation and deliver exceptional results.
            <br /> <br />
            Let's connect and discuss how we can bring your next project to
            life!
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
