import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderRadius: "10px",
        borderBottom: "1px solid white",
      }}
      contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
      iconStyle={{ background: experience.iconBg, marginTop: "1%" }}
    >
      <div>
        <h3 className="text-white text-[22px] font-bold">{experience.title}</h3>
      </div>

      <ul className="mt-2 list-disc ml-5 w-full ">
        {experience.points.map((point, index) => (
          <li
            key={index}
            className="text-white-100 text-[14px] pl-2 tracking-wider w-[80%] pr-2"
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
      <div className="max-w-7xl">
        <p className={`${styles.sectionSubText} text-left mt-0`}>
          What we have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-left`}>
          Past Journey...
        </h2>
      </div>

      <div className="mt-10 flex flex-col">
        <VerticalTimeline animate={false}>
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

export default SectionWrapper(Experience, "");
