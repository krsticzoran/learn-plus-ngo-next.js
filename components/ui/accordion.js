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
          className={` ${index === data.length - 1 ? "" : "mb-8"} rounded-lg bg-white py-4 pl-7 pr-10 shadow-md`}
        >
          <h5 id={`accordion-title-${index}`}>
            <button
              className="flex w-full items-center justify-between py-2 text-left font-semibold"
              onClick={(e) => {
                e.preventDefault();
                toggleAccordion(index);
              }}
              aria-expanded={openIndex === index}
              aria-controls={`accordion-text-${index}`}
              id={`accordion-button-${index}`}
            >
              <div>
                <span className="mr-2 text-2xl font-medium uppercase text-secondary">
                  {index + 1}.
                </span>
                <span className="text-xl">{item.question}</span>
              </div>

              <svg
                className="ml-8 shrink-0 fill-secondary"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`origin-center transform transition duration-200 ease-out ${openIndex === index && "!rotate-180"}`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`origin-center rotate-90 transform transition duration-200 ease-out ${openIndex === index && "!rotate-180"}`}
                />
              </svg>
            </button>
          </h5>
          <div
            id={`accordion-text-${index}`}
            role="region"
            aria-labelledby={`accordion-button-${index}`}
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden">
              <p className="pb-3">{item.answer}</p>
              {item.secondAnswer && <p className="pb-3">{item.secondAnswer}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
