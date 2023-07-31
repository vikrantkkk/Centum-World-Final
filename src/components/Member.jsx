import React from "react";
import Feedbacks from "./Feedbacks";
import TechTeam from "./TechTeam";
import Founder from "./Founder";
import Navbar from "./Navbar";
import Accordion from "./Accordion";
import { Footer } from "./Footer";

const Member = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <div>
      <Feedbacks />
      <TechTeam />
      <Founder />
      </div>
      <div className="mb-10">
        <Accordion />
      </div>
      <Footer />
    </div>
  );
};

export default Member;
