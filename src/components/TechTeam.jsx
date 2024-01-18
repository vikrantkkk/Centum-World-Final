import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { techTeam } from "../constants";
import { techTeam2 } from "../constants";

const FeedbackCard = ({ index, name, designation, company, image }) => (
  <div className="bg-black-200 p-10 rounded-3xl w-[250px] shadow-md shadow-[#151030]">
    <div className="">
      <div className="mt-7 flex flex-col-reverse items-center gap-2">
        <div className="flex-1 flex flex-col items-center">
          <p className="text-white font-medium text-[15px] ">
            <span className="blue-text-gradient"></span> {name}
          </p>
          <p className="mt-1 text-secondary text-center text-[12px]">
            {designation}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="rounded-full object-cover h-28 w-28"
        />
      </div>
    </div>
  </div>
);

const Feedbacks = () => {
  return (
    <>
      <div
        className={`bg-black-100 rounded-[20px] overflow-x-auto -translate-y-24`}
      >
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}
        >
          <div>
            <p className={`${styles.sectionSubText} ${styles.heroSubText}`}>
              Technical Team
            </p>
          </div>
          <p className="mb-14 mt-10">Saas, AI Apps Development, NFT</p>
        </div>
        <div
          className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-center items-center gap-10 `}
        >
          {techTeam.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
        <p className="mb-14 mt-10 text-center md:ml-10 lg:text-start">Saas, AI Apps Development, Blockchain Technology, System Security</p>
        <div
          className={`mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-center items-center gap-10 `}
        >
          {techTeam2.map((testimonial, index) => (
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
