import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, name, designation, company, image }) => (
  <div className="flex-shrink-0 min-w-[320px] max-w-max">
    <motion.div
      drag // Enable dragging for the element
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Limit dragging within the container
      dragElastic={0.8}
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl max-w-max"
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
            className="rounded-full object-cover"
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
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} mb-10`}>Team Members.</h2>
      </motion.div>
      <div className={`bg-black-100 rounded-[20px] overflow-x-auto`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} ${styles.heroSubText}`}>
              Management Ecosytem
            </p>
          </motion.div>
        </div>
        <div
          className={`-mt-20 pb-14 ${styles.paddingX} flex space-x-4 overflow-x-auto`}
        >
          {testimonials.map((testimonial, index) => (
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
