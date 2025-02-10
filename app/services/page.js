"use client";
import Image from "next/image";
import items from "@/data/services";

import { useState } from "react";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white bg-[url('/images/shape-15.png')] bg-cover bg-center bg-no-repeat ">
      <div className="max-w-screen-xl mx-auto  py-16 md:py-20 xl:py-28 px-4 sm:px-6 md:px-8 xl:px-0">
        <div className="lg:flex">
          <div className="lg:w-1/2 lg:my-auto pb-10 lg:pr-4  lg:pb-0">
            <h1 className="text-3xl font-extrabold leading-9 mb-6">
              OUR SERVICES
            </h1>
            <div className="flex flex-col text-l">
              <p>
                <span className="text-secondary text-2xl mr-4 font-medium uppercase">
                  q
                </span>
                Are you looking for a new place for your job shadowing program?
              </p>
              <p className="mt-2">
                <span className="text-secondary text-2xl mr-4 font-medium uppercase">
                  q
                </span>
                Do you think that students should not learn only in classrooms?
              </p>
              <p className="mt-2">
                <span className="text-secondary text-2xl mr-4 font-medium uppercase">
                  q
                </span>
                Are you looking for reliable partner for your current or future
                projects?
              </p>
            </div>
            <p className="mt-4">
              If your answer to any of these question is YES, then consider one
              of these options.
            </p>
          </div>
          <div className="lg:w-1/2 ">
            <Image
              src="/images/services.jpg"
              alt="man thinking"
              width={640}
              height={426}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="mt-12 md:mt-16 xl:mt-20">
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-8 bg-white rounded-lg shadow-md pl-7 pr-10 py-4 "
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
