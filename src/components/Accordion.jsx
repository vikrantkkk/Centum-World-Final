import React, { useState } from "react";
import { styles } from "../styles";

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4 max-h-max">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-tertiary flex items-center justify-between rounded-md px-4 py-2 text-lg font-medium text-left "
      >
        {question}
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open && (
        <div className="px-4 pt-4 pb-2 text-black bg-secondary rounded-md">
          {answer}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="mt-52" id="faq">
      <div className=" px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className={`${styles.sectionHeadText} mb-10`}>
          Frequently Asked Question(FAQ.)
        </h2>
        <div className="space-y-8">
          <AccordionItem
            question="What is JETTRADE FX?"
            answer="JETTRADE FX  is a  trading platform that allows users to trade various financial instruments, including currency pairs, indices, commodities, and cryptocurrencies."
          />
          <AccordionItem
            question="How can I open an account with JETTRADE FX?"
            answer="To open an account with JETTRADE FX
         You need to visit website,
         Click on the 'Trade Now or Sign Up' button 
         Fill out registration form.
         You'll require to provide some personal information and verify your identity before you can start trading."
          />
          <AccordionItem
            question="What trading platforms does JETTRADE FX offer? "
            answer="JETTRADE FX  states  significant way to  access to the trading platforms such as  JETTRADE FX (JTF). This platform has robust features and  getting benefits  with the enhanced AI(Artificial Intelligence ) technologies and user-friendly interfaces."
          />
          <AccordionItem
            question="What is the minimum deposit required to start trading on JETTRADE FX?"
            answer="The minimum deposit amount  is required  3,500 rupees  to start trading on JETTRADE FX."
          />
          <AccordionItem
            question="What financial instruments can I trade on JETTRADE FX?"
            answer="JETTRADE FX offers a range of tradable assets, including major and minor currency pairs  and cryptocurrencies."
          />
          <AccordionItem
            question="What are the trading hours on JETTRADE FX?"
            answer="The trading hours depend on the specific market you're interested in trading. Forex markets are typically open 24 hours a day from Monday to Friday, while other markets have specific trading sessions."
          />
          <AccordionItem
            question="What are the available payment methods for deposits and withdrawals?"
            answer="JETTRADE FX usually supports various payment methods, such as bank transfers, credit/debit cards, and online payment systems like Skrill and Neteller."
          />
          <AccordionItem
            question="Is JETTRADE FX regulated?"
            answer="JETTRADE FX claims to be a regulated broker. You should check the  website or contact the support team to confirm the regulatory status."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
