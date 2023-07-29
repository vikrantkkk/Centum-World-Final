import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { techTeam } from "../constants";

const FeedbackCard = ({ index, name, designation, company, image }) => (
  <div className="flex-shrink-0 min-w-[320px] max-w-max">
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl w-[270px]"
    >
      <div className="">
        <div className="mt-7 flex flex-col-reverse items-center gap-2">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="rounded-full object-cover h-28 w-28"
          />
        </div>
      </div>
    </motion.div>
  </div>
);

const Feedbacks = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <div className={`bg-black-100 rounded-[20px] overflow-x-auto -translate-y-24`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} ${styles.heroSubText}`}>
              Technical Team
            </p>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex space-x-4 overflow-x-auto `}>
          {techTeam.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
