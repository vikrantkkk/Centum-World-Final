import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { myFounder } from '../constants';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const CustomArrow = ({ onClick, className, children }) => (
  <div className={className} onClick={onClick} style={{ padding: '0 20px', zIndex: '99' }}>
    {children}
  </div>
);

const Com = () => {
  const customPrevArrow = <CustomArrow className="slick-prev">Previous</CustomArrow>;
  const customNextArrow = <CustomArrow className="slick-next">Next</CustomArrow>;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className={`bg-black-100 rounded-[20px] overflow-x-auto shadow-md shadow-[#151030] mb-48`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <div className="flex sm:flex-row sm:justify-between flex-col gap-2">
          <p className={`${styles.sectionSubText} ${styles.heroSubText}`}>Founder & Co-Founder</p>
        </div>
      </div>
      <div className="-mt-20 pb-14" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <Slider {...sliderSettings}>
          {myFounder.map((item, index) => (
            <div key={index} className="flex justify-center items-center h-auto">
              <img src={item.image} alt={`Founder ${index + 1}`} className="w-80 h-64" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionWrapper(Com, '');
