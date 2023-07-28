import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const FeedbackCard = ({ index, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 my-10 rounded-3xl max-w-max"
  >
    <div className="flex justify-center items-center">
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
);

const Feedbacks = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
    <h2 className={`{${styles.sectionHeadText}}`}>Team Members.</h2>
    <div className={`bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} ${styles.heroSubText}`}>
            Management Ecosytem...
          </p>
        </motion.div>
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={6}
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
      >
        <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
          {testimonials.map((testimonial, index) => (
            <SwiperSlide>
              <FeedbackCard
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
