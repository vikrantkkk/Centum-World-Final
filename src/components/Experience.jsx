import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderRadius:"10px",
        borderBottom:"1px solid white",
        // width:"46%"
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      // date={experience.date}
      iconStyle={{ background: experience.iconBg, marginTop:'1%'}}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      </div>

      <ul className='mt-2 list-disc ml-5 w-full '>
        {experience.points.map((point, index) => (
          <li
            key={index}
            className='text-white-100 text-[14px] pl-2 tracking-wider w-[80%] pr-2'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center mt-0`}>
          What we have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Past Journey...
        </h2>
      </motion.div>

      <div className='mt-10 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
