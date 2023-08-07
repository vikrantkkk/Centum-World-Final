import React from "react";
import Feedbacks from "./Feedbacks";
import TechTeam from "./TechTeam";
import Founder from "./Founder";
import Navbar from "./Navbar";
import Accordion from "./Accordion";
import { Footer } from "./Footer";
import Video from "./Video";
import { motion } from "framer-motion";
// import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Member = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="max-w-6xl mx-auto translate-y-40">
        <>
          <div>
            <h2 className={`${styles.sectionHeadText}`}>About Us</h2>
          </div>

          <p
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
          >
            Jettrade Fx trading, also referred to as foreign exchange trading,
            is the buying and selling of currencies with the aim of profiting
            from fluctuations in their value . Trillions of dollars are traded
            in the forex market daily, making it one of the largest and most
            liquid financial markets in the world . Participants in the forex
            market include individuals, corporations, institutional investors,
            and governments, among others. Forex trading can be done through
            financial institutions, brokers, or electronic trading platforms.
          </p>
        </>
      </div>
      <div className="p-5">
      <Video />
      </div>
      <div>
        <Feedbacks />
        <TechTeam />
        <Founder />
      </div>
      <div className="mb-10 -translate-y-40">
        <Accordion />
      </div>
      <Footer />
    </div>
  );
};

export default Member;
