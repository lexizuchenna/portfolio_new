"use client";

import { useState, useEffect } from "react";
import SkeletonLoader from "@/components/Loader/SkeletonLoader";

import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client, urlFor } from "../../client";

import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  const getSkills = async () => {
    try {
      const data = await client.fetch('*[_type == "skills"]');
      setSkills(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getExperiences = async () => {
    try {
      const data = await client.fetch('*[_type == "work-experiences"]');
      setExperiences(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExperiences();
    getSkills();
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      {experiences.length < 1 || skills.length < 1 ? (
        <SkeletonLoader />
      ) : (
        <div className="app__skills-container">
          <motion.div className="app__skills-list">
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text"> {skill.name} </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="app__skills-exp">
            {experiences.map((exp) => (
              <motion.div className="app__skills-exp-item" key={exp.year}>
                <div className="app__skills-exp-year">
                  <p className="bold-text"> {exp.year} </p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {exp.works.map((work) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <h4 className="bold-text"> {work.title} </h4>
                        <p className="p-text">
                          <i>{work.company}</i>
                        </p>
                        <ul>
                          {work.desc.map((d, i) => (
                            <li
                              key={i}
                              className="p-text2"
                              style={{ fontSize: "15px" }}
                            >
                              {d}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                      {/* <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip> */}
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
