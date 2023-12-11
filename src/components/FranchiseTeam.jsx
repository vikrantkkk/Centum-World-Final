import React, { useEffect } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { citiesByState, indianStates } from "../utils/In-State";
import allState from "../utils/In-State";
import franchiseAvatar from "../assets/franchise/franchise-avatar.png";
import { useState } from "react";
import axios from "axios";
import baseUrl from "../../baseUrl";
import { Button, Modal, message } from "antd";
import OtpInput from 'react-otp-input';
import { useNavigate } from "react-router-dom";

const FeedbackCard = ({ name,frenchiseId, state }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [pin, setPin] = useState(Number);

  const handlePinChange = (otp) => {
    setPin(otp);

  };


  const otpInputStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '200px',  // Adjust the width as needed
  };

  const inputStyle = {
    backgroundColor: 'lightgray',  // Set the background color
    width: '40px',  // Adjust the width of each input field
    height: '40px',  // Adjust the height of each input field
    marginRight: '5px',  // Adjust the spacing between input fields
  };

  useEffect(()=>{
    isPinSix()
  },[pin])
 
  const isPinSix = ()=>{
    if(pin.length === 6){
      console.log(pin,frenchiseId)
      let data = {
        frenchiseId:frenchiseId,
        loginOtp:Number(pin)
      }
      axios.post(`${baseUrl.apiUrl}/franchise/frenchise/frenchise-verify-login-otp`, data)
      .then((res)=>{
        message.success(res.data.message)
        setIsModalVisible(false);
        setTimeout(() => {
          openInNewTab('http://business.jettradefx.in/');
        },[2000]);
        setPin('')
       
      })
      .catch((err)=>{
        message.warning(err.response.data.message)
      })
    }
  }
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (

    <>
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
                <span className="blue-text-gradient">@</span>{name}
              </p>
              <p className="mt-1 text-secondary text-[12px] text-center">
                Franchise of {state}
              </p>
              <Button type="primary" onClick={showModal}>Got to Login</Button>
            </div>
            <img
              src={franchiseAvatar}
              alt={`feedback_by-${name}`}
              className="rounded-full object-cover h-28 w-28"
            />
          </div>

        </div>
      </div>
    </>
  );
};

const FranchiseTeam = () => {
  const [selectedState, setSelectedState] = useState("");
  const [data, setData] = useState([]);



  const states = allState.states.map((stateData) => stateData.state);

  const fetchAllFranchise = async () => {
    try {
      const response = await axios.get(`${baseUrl.apiUrl}/portfolio/portfolio/get-all-franchise`
      );
      console.log("Data fetched", response.data.data);
      setData(response.data.data);
    } catch (err) {
      console.log("Error Occurred");
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchAllFranchise();
  }, []);


  const handleStateChange = (e) => {
    setData([])
    const state = e.target.value;
    console.log(state)
    let data = {
      state: e.target.value
    }
    axios.post(`${baseUrl.apiUrl}/portfolio/filter-franchise-by-state`, data)//localhost:4000/portfolio/filter-franchise-by-state{

      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  };

  return (
    <>
      <div className={`bg-black-100 rounded-[20px] overflow-x-auto`}>
        <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
          <div className="flex sm:flex-row sm:justify-between flex-col gap-2">
            <p className={`${styles.sectionSubText} ${styles.heroSubText}`}>
              Franchise
            </p>

            <select
              value={selectedState}
              onChange={handleStateChange}
              className="bg-transparent border rounded-md"
              id="in-state"
            >
              <option value="" className="bg-primary">Select a State</option>
              {states.map((state) => (
                <option key={state} value={state} className="bg-primary">
                  {state}

                </option>

              ))}

            </select>
          </div>

        </div>

        <div className="-mt-20 pb-14" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <div className={`flex ${styles.paddingX} gap-10`}>
            {data.map((item, index) => (
              <div key={item.fname}>
                <FeedbackCard
                  name={item.fname}
                  frenchiseId={item.frenchiseId}
                  key={item.fname}
                  index={index}
                  data={data}
                  state={item.franchiseState}
                />

              </div>
            ))}
          </div>

        </div>

      </div>
    </>
  );
};

export default SectionWrapper(FranchiseTeam, "");

