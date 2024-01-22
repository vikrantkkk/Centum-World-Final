import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { hrd } from "../constants";

const TeamSection = ({ title, data, sliderSettings }) => {
  const sliderRef = useRef(null);
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="mb-56">
      <div className="text-3xl font-semibold w-full text-center mt-10">
        {title}
      </div>
      <div className="w-full">
        <Slider ref={sliderRef} {...sliderSettings}>
          {data.map((item, index) => (
            <div key={index} className="">
              <div className="w-full flex justify-center items-center text-center mt-6">
                <img
                  src={item.image}
                  alt="Profile"
                  className="h-64 w-80 rounded-md  shadow-lg transition-transform transform hover:scale-105 duration-300"
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center gap-8 mt-3">
          <div onClick={handlePrev}>
            <FaArrowLeft className="" />
          </div>
          <div onClick={handleNext}>
            <FaArrowRight className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Founder = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
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
    <>
      <div>
        <TeamSection
          title="Asst. HRD"
          data={hrd}
          sliderSettings={sliderSettings}
        />
      </div>
    </>
  );
};

export default Founder;
