import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[210px] mx-5 my-5">
    <div
      // variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
      >
        JETTRADE FX is a user-friendly and reliable trading platform that caters
        to traders of all levels. It offers a wide range of trading instruments,
        including major and minor currency pairs, commodities, indices, and
        cryptocurrencies. The platform provides DEMO and REAL accounts with
        unique features such as minimum deposit requirements, leverage options,
        and spreads. It supports popular trading platforms like JTF and
        MetaTrader (MT4) with advanced charting tools and expert advisors to
        enhance efficiency. Customer support is prompt and accessible via email,
        live chat, and phone. Multiple deposit and withdrawal options, including
        bank transfers and online methods, ensure convenience for traders
        worldwide. Overall, JETTRADE FX provides a comprehensive trading
        environment with user-friendliness and exceptional support.
      </p>

      <p className={`${styles.sectionSubText} mt-10`}>Services</p>
      <div className=" flex flex-wrap gap-10 justify-evenly">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
