"use client";

import { useState } from "react";

export default function Accordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className={` ${index === data.length - 1 ? "" : "mb-8"}  bg-white rounded-lg shadow-md pl-7 pr-10 py-4`}
        >
          <h5 id={`accordion-title-${index}`}>
            <button
              className="flex items-center justify-between w-full  text-left font-semibold py-2 "
              onClick={(e) => {
                e.preventDefault();
                toggleAccordion(index);
              }}
              aria-expanded={openIndex === index}
              aria-controls={`accordion-text-${index}`}
              id={`accordion-button-${index}`}
            >
              <div>
                <span className="text-secondary text-2xl mr-2 font-medium uppercase">
                  {index + 1}.
                </span>
                <span className="text-xl ">{item.question}</span>
              </div>

              <svg
                className="fill-secondary shrink-0 ml-8 "
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center transition duration-200 ease-out ${openIndex === index && "!rotate-180"}`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${openIndex === index && "!rotate-180"}`}
                />
              </svg>
            </button>
          </h5>
          <div
            id={`accordion-text-${index}`}
            role="region"
            aria-labelledby={`accordion-button-${index}`}
            className={`grid   overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden">
              <p className="pb-3 ">{item.answer}</p>
              {item.secondAnswer && (
                <p className="pb-3 ">{item.secondAnswer}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
