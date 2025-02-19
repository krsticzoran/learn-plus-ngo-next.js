"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const hash = window.location.hash.split("#")[1];
    if (hash === "what-we-offer") {
      setActiveTab(hash);
    } else {
      setActiveTab("what-we-do");
    }
  }, []);

  return (
    <section className="bg-white-one relative " id="what-we-do">
      <div id="what-we-offer" className="py-20">
        <div className="max-w-screen-xl mx-auto  flex">
          <div className=" w-[50%] pr-10 pt-10 ">
            <p className="text-lg font-medium uppercase text-secondary  mb-2">
              Unlock Your Potential
            </p>
            <h3 className="text-3xl font-semibold  text-primary mb-4">
              Learning designed around you
            </h3>
            <p className="mb-16 text-lg leading-relaxed text-gray-one">
              Our approach combines innovation and expertise, ensuring every
              step of your journey is tailored to your unique aspirations.
            </p>
            <div>
              <div className="flex  ">
                <button
                  onClick={() => setActiveTab("what-we-do")}
                  className={`text-center py-4   text-lg  font-bold leading-6  font-spartan   uppercase rounded-md border-2 border-primary w-full mr-5 ${
                    activeTab === "what-we-do" && "bg-primary text-white"
                  }`}
                >
                  What We Do
                </button>
                <button
                  onClick={() => setActiveTab("what-we-offer")}
                  className={`text-center py-4   text-lg  font-bold leading-6  font-spartan   uppercase rounded-md border-2 border-primary w-full  ${
                    activeTab === "what-we-offer" && "bg-primary text-white"
                  }`}
                >
                  What We Offer
                </button>
              </div>

              <div className="   p-4 pt-8  ">
                <div className="">
                  {activeTab === "what-we-do" ? (
                    <>
                      <p className="text-lg leading-relaxed text-gray-one">
                        At LEARN PLUS, we focus on various educational
                        activities, including tailored courses, career guidance,
                        and non-formal learning experiences.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-one mt-2">
                        Our mission is to empower individuals with the tools
                        they need to succeed both personally and professionally.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-lg leading-relaxed text-gray-one">
                        We provide a diverse array of educational services,
                        including personalized coaching, workshops, and
                        seminars.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-one mt-2">
                        Our goal is to help participants develop new skills,
                        expand their knowledge, and enhance their career
                        opportunities.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className=" w-1/2  flex flex-col ml-2">
            <div className="relative w-5/6 h-1/2 mb-4 self-end">
              <Image
                src="images/tabs3.jpg"
                fill
                className="rounded-[20px] object-cover"
                alt="seminar"
              />
            </div>
            <div className="flex   h-1/2 ">
              <div className="relative w-full mr-2 ">
                <Image
                  src="images/tabs2.jpg"
                  fill
                  className="rounded-[20px] object-cover "
                  alt="seminar"
                />
              </div>
              <div className="relative w-full ml-2  ">
                <Image
                  src="images/tabs1.jpg"
                  fill
                  className="rounded-[20px] object-cover  "
                  alt="seminar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
