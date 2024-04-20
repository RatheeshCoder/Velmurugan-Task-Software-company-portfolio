import React, { useState } from "react";
import { faqs } from "../Data/WebData";

const FaqSection = () => {
  const [questions, setQuestions] = useState(
    faqs.map((q) => ({ ...q, open: false }))
  );

  const toggleAnswer = (index) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = prevQuestions.map((q, i) => {
        if (i === index) {
          return { ...q, open: !q.open };
        } else {
          return { ...q, open: false };
        }
      });
      return updatedQuestions;
    });
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#e3e6df] sm:text-4xl lg:text-5xl">
            Explore Common Questions
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 space-y-4 md:mt-16 faq-grid">
          {questions.map((qa, index) => (
            <div
              key={index}
              className="transition-all duration-200 cursor-pointer hover:bg-[#30353b]"
            >
              <button
                type="button"
                onClick={() => toggleAnswer(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-left text-[#e3e6df]">
                  {qa.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 transform ${
                    qa.open ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {qa.open && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-[#e3e6df]">
                  <p>{qa.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
