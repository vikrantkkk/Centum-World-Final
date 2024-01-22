import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { myFounder } from "../constants";
import { franchiseData } from "../constants";

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
    <div className="mt-20">
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
    slidesToShow: 4,
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
          title="Franchise/Business Consultant"
          data={franchiseData}
          sliderSettings={sliderSettings}
        />
        <div class="flex items-center justify-center mt-10">
          <a
            href="src/assets/JetTradeFX.pdf"
            download="JetTradeFX Broucher.pdf"
            class="relative px-7 py-4 font-medium text-white group"
          >
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
            <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
            <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
            <button class="relative">Download Brochure</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Founder;
