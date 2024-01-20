import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { bmmData, founders } from "../constants";
import { citiesByState, indianStates } from "../utils/In-State";
import franchiseAvatar from "../assets/franchise/franchise-avatar.png";
import allState from "../utils/In-State";
import axios from "axios";
import baseUrl from "../../baseUrl";
import { Button, Modal, message } from "antd";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

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

const FeedbackCard = ({ name, stateHandlerId, state }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const formattedState = state.join(", ");
  const navigate = useNavigate();
  console.log(bmm);
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Function to handle closing the modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [pin, setPin] = useState(Number);

  const handlePinChange = (otp) => {
    setPin(otp);
  };

  useEffect(() => {
    isPinSix();
  }, [pin]);

  const isPinSix = () => {
    if (pin.length === 6) {
      console.log(typeof pin, stateHandlerId);
      let data = {
        loginOtp: Number(pin),
        stateHandlerId: stateHandlerId,
      };

      axios
        .post(`${baseUrl.apiUrl}/state/state/state-verify-login-otp`, data)
        .then((res) => {
          message.success(res.data.message);
          setIsModalVisible(false);
          setTimeout(() => {
            openInNewTab("http://business.jettradefx.in/");
          }, [2000]);
          setPin("");
        })
        .catch((err) => {
          message.warning(err.response.data.message);
        });
    }
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  const otpInputStyles = {
    display: "flex",
    justifyContent: "space-between",
    width: "200px", // Adjust the width as needed
  };

  const inputStyle = {
    backgroundColor: "lightgray", // Set the background color
    width: "40px", // Adjust the width of each input field
    height: "40px", // Adjust the height of each input field
    marginRight: "5px", // Adjust the spacing between input fields
  };

  return (
    <>
      {/* go to login moodal */}

      <Modal
        title="Verify PIN to Login"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <div>
          <label>Enter 6-digit PIN:</label>
          <OtpInput
            numInputs={6}
            value={pin}
            separator={<span>-</span>}
            onChange={handlePinChange}
            renderInput={(props) => <input {...props} />}
            isInputNum
            inputStyle={inputStyle}
            containerStyle={otpInputStyles}
          />
        </div>
      </Modal>

      <div className="bg-black-200 p-10 rounded-3xl w-[300px] shadow-md shadow-[#151030]">
        <div className="">
          <div className="mt-8 flex flex-col-reverse items-center w-[200px] justify-center">
            <div className="flex-1 flex flex-col items-center">
              <p className="text-white font-medium text-[15px]">
                <span className="blue-text-gradient">@</span>
                {name}
              </p>
              <p className="mt-1 text-secondary text-[12px] text-center">
                BMM of {formattedState}
              </p>
            </div>
            <img
              src={franchiseAvatar}
              alt={`feedback_by-${name}`}
              className="rounded-full object-cover h-28 w-28"
            />
            <Button className="goToLogin" type="primary" onClick={showModal}>
              Go to Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const Feedbacks = () => {
  const customPrevArrow = (
    <CustomArrow className="slick-prev" icon="Previous" />
  );
  const customNextArrow = <CustomArrow className="slick-next" icon="Next" />;

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
  
  const [selectedState, setSelectedState] = useState("");
  const [data, setData] = useState([]);
  const states = allState.states.map((stateData) => stateData.state);
  console.log(bmmData);
  const fetchAllState = async () => {
    try {
      const response = await axios.get(
        `${baseUrl.apiUrl}` + "/portfolio/get-all-states"
      );
      console.log("Data fetched", response.data.data);
      setData(response.data.data);
    } catch (err) {
      console.log("Error Occurred");
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchAllState();
  }, []);

  const handleStateChange = (e) => {
    setData([]);
    const state = e.target.value;
    console.log(state);
    let data = {
      state: e.target.value,
    };
    axios
      .post(`${baseUrl.apiUrl}` + "/portfolio/filter-sho-by-state", data) //localhost:4000/portfolio/filter-franchise-by-state{

      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <>
      <div>
        <h2 className={`${styles.sectionHeadText}`}>Team Members.</h2>
      </div>
      <div className={`bg-black-100 rounded-[20px] overflow-x-auto`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}
        >
          <div className="flex sm:flex-row sm:justify-between flex-col gap-2">
            <p className={`${styles.sectionSubText} ${styles.heroSubText}`}>
              BMM
            </p>
          </div>
        </div>
        <div
          className="-mt-20 pb-14"
          style={{ overflowX: "auto", whiteSpace: "nowrap" }}
        >
          <div>
            <Slider {...sliderSettings}>
              {bmmData.map((item, index) => (
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
  );
};

export default SectionWrapper(Feedbacks, "");
