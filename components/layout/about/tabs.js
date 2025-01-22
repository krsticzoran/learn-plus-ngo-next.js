"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/button";

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
          <div className="flex relative">
            <div className="absolute bottom-16 left-[570px] w-[180px] h-[180px] z-0 ">
              <Image
                src="/images/shape-16.png"
                alt="shape"
                width={180}
                height={180}
              />
            </div>
            <Image
              src="/images/country-1.jpg"
              alt="Map 1"
              className="rounded-lg mr-4"
              width={350}
              height={500}
            />
            <Image
              src="/images/country-2.jpg"
              alt="Map 2"
              className="rounded-lg z-20"
              width={350}
              height={400}
            />
          </div>

          <div className=" w-[50%] px-10 pt-10 ">
            <p className="text-lg font-medium uppercase text-secondary  mb-2">
              Unlock Your Potential
            </p>
            <h3 className="text-3xl font-semibold  text-primary mb-4">
              Learning designed around you
            </h3>
            <p className="mb-12 text-lg leading-relaxed text-gray-one">
              Our approach combines innovation and expertise, ensuring every
              step of your journey is tailored to your unique aspirations.
            </p>
            <div className="    ">
              <div className="flex    ">
                <button
                  onClick={() => setActiveTab("what-we-do")}
                  className={`px-12 pt-6 pb-3 shadow-md shadow-b-none text-lg rounded-[20px] rounded-b-none  font-bold  leading-6  font-spartan w-full   uppercase ${
                    activeTab === "what-we-do"
                      ? " bg-white"
                      : "border-2 border-white"
                  }`}
                  style={{
                    boxShadow: "0px 0px 30px 1px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  What We Do
                </button>
                <button
                  onClick={() => setActiveTab("what-we-offer")}
                  className={`px-12 pt-6 pb-3 shadow-md shadow-b-none text-lg rounded-[20px] font-bold leading-6  font-spartan  rounded-b-none uppercase w-full ${
                    activeTab === "what-we-offer"
                      ? " bg-white "
                      : "border-2 border-white"
                  }`}
                  style={{
                    boxShadow: "0px 0px 30px 1px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  What We Offer
                </button>
              </div>

              <div
                className="h-[220px]   bg-white shadow-md  shadow-t-none rounded-[20px] rounded-t-none  p-4 pt-6  "
                style={{
                  boxShadow: "0px 0px 30px 1px rgba(0, 0, 0, 0.15)",
                }}
              >
                {activeTab === "what-we-do" ? (
                  <>
                    <p className="text-lg leading-relaxed text-gray-one">
                      At LEARN PLUS, we focus on various educational activities,
                      including tailored courses, career guidance, and
                      non-formal learning experiences.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-one mt-1">
                      Our mission is to empower individuals with the tools they
                      need to succeed both personally and professionally.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-lg leading-relaxed text-gray-one">
                      We provide a diverse array of educational services,
                      including personalized coaching, workshops, and seminars.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-one mt-1">
                      Our goal is to help participants develop new skills,
                      expand their knowledge, and enhance their career
                      opportunities.
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
