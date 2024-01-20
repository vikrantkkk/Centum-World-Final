import React from 'react'
import { disitalMarketing } from '../constants'
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ onClick, className, icon }) => (
  <div
    className={className}
    onClick={onClick}
    style={{ padding: "0 75px 0 30px", zIndex: "99" }}
  >
    {icon}
  </div>
);

const Disitalmarketing = () => {
  const customPrevArrow = <CustomArrow className="slick-prev" icon="Previous" />;
  const customNextArrow = <CustomArrow className="slick-next" icon="Next" />;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
    <>
      <div className={`bg-black-100 rounded-[20px] overflow-x-auto`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}
        >
          <div className="flex sm:flex-row sm:justify-between flex-col gap-2">
            <p className={`${styles.sectionSubText} ${styles.heroSubText}`}>
              Disital Marketing
            </p>
          </div>
        </div>
        <div
          className="-mt-20 pb-14"
          style={{ overflowX: "auto", whiteSpace: "nowrap" }}
        >
          <div>
          <Slider {...sliderSettings}>
            {disitalMarketing.map((item, index) => (
              <div key={index}>
                  <img
                    src={item.image}
                    className="w-80 h-64"
                    alt={`carousel-item-${index}`}
                  />
                </div>
            ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Disitalmarketing, "");