import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[210px] mx-5 my-5">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
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
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
      >
        Jet tradefx is a trading platform where you learn about the forex
        trading , market price execution ,instant execution or pending orders as
        per your convenience. You need to invest money in the jettrade fx and it
        will trade and make profit for you. Jettrade fx provides a paid and
        unpaid software version.In which the customer will choose one of them
        which he needs. Paid version – In the paid version the customer firstly
        login the page and pay the software usage charge plan of rupees 3500 for
        a month at the time of deposit. Unpaid version – In the unpaid version
        the customer needs to pay according to his will and desire . Every plans
        for the software usage charge will be same .If the customer wants to pay
        the plan then he may get the benefit of the paid version but he is
        supposed to sign up for the first time as a new member,merely then he is
        able to take the advantage of it.
      </motion.p>

      <p className={`${styles.sectionSubText} mt-10`}>Services</p>
      <div className=" flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
