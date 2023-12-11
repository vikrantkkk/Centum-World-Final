import React, { useEffect } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { founders } from "../constants";
import { citiesByState, indianStates } from "../utils/In-State";
import franchiseAvatar from "../assets/franchise/franchise-avatar.png";
import { useState } from "react";
import allState from "../utils/In-State";
import axios from "axios";
import baseUrl from "../../baseUrl";
import { Modal } from "antd"
import Video from "./Video";

const FeedbackCard = ({ thumbnail, title, videoOne }) => {
    console.log
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleImageClick = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="bg-black-200 p-10 rounded-3xl w-[300px] shadow-md shadow-[#151030]">
            <div className="">
                <div className="mt-8 flex flex-col-reverse items-center w-[200px] justify-center">
                    <div className="flex-1 flex flex-col items-center" style={{ background: "white" }}>
                        <img
                            src={thumbnail}
                            alt={`feedback_by-${title}`}
                            className="rounded-full object-cover h-20 w-50"
                            onClick={handleImageClick}
                        />
                    </div>

                </div>
            </div>
            <Modal open={isModalVisible} onCancel={handleCloseModal} footer={null}>
                <div style={{fontFamily:"Calibri", fontSize:"20px", color:"#800080"}}>{title}</div>
                <video src={videoOne} controls width="100%" height="400px" />
            </Modal>
        </div>
    );
};


const Feedbacks = () => {
    const [selectedState, setSelectedState] = useState("");
    const [data, setData] = useState([]);
    const states = allState.states.map((stateData) => stateData.state);



    const tutorialsVideos = async () => {
        axios.get(`${baseUrl.apiUrl}/portfolio/get-all-videos-for-portfolio`)
            .then((res) => {
                setData(res.data.videos)
            })
            .catch((err) => {
                console.log(err.response.data.message)
            })
    };

    useEffect(() => {
        tutorialsVideos();
    }, []);

    return (
        <>
            <div>
                {/* <h2 className={`${styles.sectionHeadText} mt-32`}>Tutorials</h2> */}
            </div>
            <div className={`bg-black-100 rounded-[20px] overflow-x-auto`}>
                {/* <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
                    <div className="flex justify-between items-center">
                        <p className={`${styles.sectionSubText} ${styles.heroSubText}`}>
                            Tutorials
                        </p>
                    </div>
                </div> */}
                <div className="-mt-20 pb-14" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
                    <div className={`flex ${styles.paddingX} gap-10`}>
                        {data.map((item, index) => (
                            <FeedbackCard
                                thumbnail={item.thumbnail}
                                title={item.title}
                                videoOne={item.videoOne}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(Feedbacks, "");
