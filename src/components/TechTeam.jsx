import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { techTeam, techTeam2 } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ onClick, className, children }) => (
  <div className={className} onClick={onClick} style={{ padding: '0 20px', zIndex: '99' }}>
    {children}
  </div>
);

const FeedbackCard = ({ name, designation, image }) => (
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
  const customPrevArrow = <CustomArrow className="slick-prev">Previous</CustomArrow>;
  const customNextArrow = <CustomArrow className="slick-next">Next</CustomArrow>;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: customPrevArrow,
    nextArrow: customNextArrow,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`bg-black-100 rounded-[20px] overflow-x-auto -translate-y-24`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <p className={`${styles.sectionSubText} ${styles.heroSubText}`}>
          Technical Team
        </p>
        <p className="mb-14 mt-10">SaaS, AI Apps Development, NFT</p>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-center items-center gap-10`}>
        <Slider {...sliderSettings}>
          {techTeam.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} {...testimonial} />
          ))}
        </Slider>
      </div>
      <p className="mb-14 mt-10 text-center md:ml-10 lg:text-start">SaaS, AI Apps & Blockchain Dev</p>
      <div className={`mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-center items-center gap-10`}>
        <Slider {...sliderSettings}>
          {techTeam2.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} {...testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
