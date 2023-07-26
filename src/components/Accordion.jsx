import React, { useState } from "react";
import { styles } from "../styles";

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4">
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
          {/* Content for the answer goes here */}
          {answer}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className=" ">
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className={`${styles.sectionHeadText} text-right`}>Frequenlty Asked Question(FAQ.)</h2>
        <div className="space-y-8">
          {/* Add more questions and answers as needed */}
          <AccordionItem question="Question 1" answer="Answer 1" />
          <AccordionItem question="Question 2" answer="Answer 2" />
          {/* Add more questions and answers as needed */}
        </div>
      </div>
    </div>
  );
}

export default App;
