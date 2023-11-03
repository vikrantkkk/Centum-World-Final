import React from "react";
import Feedbacks from "./Feedbacks";
import TechTeam from "./TechTeam";
import Founder from "./Founder";
import Navbar from "./Navbar";
import Accordion from "./Accordion";
import { Footer } from "./Footer";
import Video from "./Video";
import { styles } from "../styles";
import FranchiseTeam from "./FranchiseTeam";
import State from "./State";
import Toturials from "./Toturials";

const Member = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="max-w-6xl mx-auto translate-y-40">
        <div>
          <h2 className={`${styles.sectionHeadText}`}>About Us</h2>
        </div>

        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify">
          Jettrade Fx trading, also referred to as foreign exchange trading, is
          the buying and selling of currencies with the aim of profiting from
          fluctuations in their value . Trillions of dollars are traded in the
          forex market daily, making it one of the largest and most liquid
          financial markets in the world . Participants in the forex market
          include individuals, corporations, institutional investors, and
          governments, among others. Forex trading can be done through financial
          institutions, brokers, or electronic trading platforms.
        </p>
        {/* <div class="flex items-center justify-center mt-10">
          <a
            href="src/assets/JetTradeFX.pdf"
            download="JetTradeFX Broucher.pdf"
            class="relative px-7 py-4 font-medium text-white group"
          >
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
            <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
            <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
            <button class="relative">Download White Paper</button>
          </a>
        </div> */}
      </div>
      <div className="p-5">
        <Video />
      </div>

      <div>
        <Toturials />
        <State />
        <FranchiseTeam />
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
