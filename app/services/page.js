"use client";
import Image from "next/image";

import { useState } from "react";

const items = [
  {
    question: "Structured Courses",
    answer:
      "Strictly focused, adaptable and tailor-made courses for groups of 4-8 participants can provide you exactly what you need. Check some of our options or send us your questions and needs and we will try to meet them.",
  },
  {
    question: "Hosting of Individuals and Groups",
    answer:
      "As a strong regional centre of education, industry and entrepreneurship, Osijek brings you many options for your students&#39; mobilities (such as Erasmus+), job shadowings of school’s staff and structured courses. We can organize everything for you in our schools, faculties, kindergartens, companies, adult education centres according to your wishes. Just contact us and we will solve everything for you.",
  },
  {
    question: "Job shadowing program",
    answer:
      "Imagine a situation that you have lost your ideas for teaching, managing, writing and doing your job properly. What do you think about the idea to observe some experts lessons, their preparation, teaching methods, working with equipment in different environments such as schools, companies, institutes? Having in mind that in Osijek there are 18 faculties, 18 high (secondary) and 23 primary schools and lots of kindergartens there are lot of great possibilities for on-the-job training that allows participants to follow and closely observe another colleagues performing their roles in his real-life situations.",
  },
  {
    question: "Vocational Internships and Trainings",
    answer:
      "If you need great internship places for your vocational students, either in companies, public services or schools, let we find it for you. Our work is to provide you all: learning agreements, contracts with companies and schools, Europass Mobility documents etc. And we will not promise you that we can cover all areas here in Osijek - shipbuilding companies are not here :)",
  },
  {
    question: "Project writing",
    answer:
      "No matter which kind of projects we are talking about, our expertise and a huge network of our experienced project writers are here. Erasmus+, Horizon, local, regional or national projects – we can assist you and help you in all phases.",
  },
  {
    question: "Establishing Consortiums",
    answer:
      "With so many finished projects, mobilities, hostings and everything we do, we can guarantee you our partners in previous projects. Not all experiences are good – depending of your needs we will connect you with only reliable organizations and persons that can provide you their bests!",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white bg-[url('/images/shape-15.png')] bg-cover bg-center bg-no-repeat ">
      <div className="max-w-screen-xl mx-auto py-28">
        <div className="flex">
          <div className="w-1/2 my-auto pr-4 ">
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
          <div className="w-1/2">
            <Image
              src="/images/services.jpg"
              alt="man thinking"
              width={640}
              height={426}
            />
          </div>
        </div>
        <div className="mt-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-8 bg-white rounded-lg shadow-md pl-7 pr-10 py-4 "
            >
              <h5>
                <button
                  className="flex items-center justify-between w-full  text-left font-semibold py-2 "
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAccordion(index);
                  }}
                  aria-expanded={openIndex === index}
                  aria-controls={`accordion-text-${index}`}
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
                aria-labelledby={`accordion-title-${index}`}
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
