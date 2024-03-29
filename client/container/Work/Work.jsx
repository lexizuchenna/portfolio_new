"use client";

import { useState, useEffect } from "react";
import SkeletonLoader from "@/components/Loader/SkeletonLoader";

import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client, urlFor } from "../../client";

import "./Work.scss";

const Work = () => {
  const items = [
    "Mobile App",
    "Next JS",
    "Web App",
    "Node JS",
    "React JS",
    "All",
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const getWorks = async () => {
    try {
      const data = await client.fetch('*[_type == "works"]');
      setFilterWork(data);
      setWorks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWorks();
  }, []);

  return (
    <>
      <h2 className="head-text">
        My Works &<span> Projects </span>
      </h2>

      <div className="app__work-filter">
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {filterWork.length < 1 && works.length < 1 ? (
        <SkeletonLoader />
      ) : (
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {filterWork.map((work, i) => (
            <div className="app__work-item app__flex" key={i}>
              <div className="app__work-img app__flex">
                <img src={urlFor(work.imgUrl)} alt={work.name} />
                <motion.div
                  // whileTap={{ opacity: [0, 0.5] }}
                  // onTapStart={{ opacity: [0, 0.7] }}
                  whileInView={{ opacity: [0, 1] }}
                  onTap={{ opacity: [0, 0.7] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>
                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
