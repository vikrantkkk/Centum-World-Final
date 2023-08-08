import { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import welcomeVideoEnglish from "../assets/video/welcome-video-english.mp4";
import welcomeVideoHindi from "../assets/video/welcome-video-hindi.mp4";
import { IoClose } from "react-icons/io5";
import { FaRegCirclePlay } from "react-icons/fa6";

const Hero = () => {
  const [popupVisible, setPopupVisible] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("english"); // Default language
  const videoRef = useRef(null);
  const playButtonRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("canplaythrough", handleCanPlay);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("canplaythrough", handleCanPlay);
      }
    };
  }, [videoRef]);

  const handleCanPlay = () => {
    videoRef.current.pause();
    videoRef.current.muted = false;
  };

  const closePopup = () => {
    setPopupVisible(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      playButtonRef.current.style.display = "none"; // Hide the play button
    }
  };

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
  };
  return (
    <section className={`relative h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 overflow-hidden`}
      >
        <div className="z-10">
          <h1 className={`${styles.heroHeadText} text-[#915EFF]`}>
            Welcome to{" "}
            <span className="text-white uppercase"> JetTrade FX</span>
          </h1>
          <p className={`${styles.heroSubText} mt-36 text-white-100`}>
            Advance Forex trading platform <br className="sm:block hidden" />
            AI based smart trading apps
          </p>
        </div>
        <div className="absolute h-[40%] w-[100%] sm:h-[60%] sm:w-[60%] top-[25%] sm:top-[20%] sm:right-[-5%]">
          <EarthCanvas />
        </div>
      </div>
      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="relative h-max sm:h-full">
            <video
              ref={videoRef}
              src={
                selectedLanguage === "english"
                  ? welcomeVideoEnglish
                  : welcomeVideoHindi
              }
              className="h-full w-full"
              onEnded={closePopup}
              preload="auto"
            />
            <button
              ref={playButtonRef}
              onClick={handlePlayButtonClick}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border-none text-white hover:text-gray-300 focus:outline-none"
            >
              <FaRegCirclePlay fontSize={50} />
            </button>
            <button
              onClick={closePopup}
              className="absolute top-0 right-0 m-4 text-white hover:text-gray-300 focus:outline-none"
            >
              <IoClose fontSize={40} />
            </button>

            <div className="absolute bottom-4 right-4">
              <select value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
