import React from "react";
import Tilt from "react-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  name,
  description,
  image,
}) => {
  return (
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[310px] mx-5 my-5 h-[90%] flex flex-col"
      >
        <div className="h-full flex flex-col">
          <div className="h-[90%]">
            <img
              src={image}
              alt="project_image"
              className="w-full flex-1 object-cover rounded-2xl h-full"
            />
          </div>

          <div className >
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>Our work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </div>

      <div className="w-full flex">
        <p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
        >
          We're a team of talented and committed developers with a passion for
          building innovative and high-quality products. Our goal is to Develop
          & Deliver exceptional web and mobile applications that add value for
          our users. We are a high-performing app development company that
          specializes in developing web and mobile applications for any
          Individual User, Digital Marketer, startups, enterprises, and
          government agencies. Our aim is to deliver/distribute over 100+ apps,
          with 20+ million downloads, 1+ million transactions processed, with $2
          billion Revenue Generation Process within next 12 months. The More We
          will Grow You will grow with us as a Team.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
