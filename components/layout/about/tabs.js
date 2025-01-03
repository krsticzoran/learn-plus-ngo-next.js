"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/button";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("whatWeDo");

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-screen-xl mx-auto px-8 flex">
        <div className="flex">
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
            className="rounded-lg"
            width={350}
            height={400}
          />
        </div>

        <div className=" w-[50%] px-10 pt-10 ">
          <p className="text-lg font-medium  text-secondary pb-4">
            Unlock Your Potential
          </p>
          <h2 className="text-3xl font-semibold  text-dark mb-6">
            Learning designed around you
          </h2>
          <p className="mb-12 text-lg leading-relaxed text-gray-one">
            Our approach combines innovation and expertise, ensuring every step
            of your journey is tailored to your unique aspirations.
          </p>
          <div className="flex space-x-8 mb-10">
            <button
              onClick={() => setActiveTab("whatWeDo")}
              className={`px-12 py-3 text-lg rounded-md font-bold transition-colors leading-6 duration-300  ${
                activeTab === "whatWeDo"
                  ? "text-white bg-[#1D2133]"
                  : "text-dark bg-white"
              }`}
            >
              What We Do
            </button>
            <button
              onClick={() => setActiveTab("whatWeOffer")}
              className={`px-12 py-3  text-lg rounded-md font-bold leading-6 transition-colors duration-300  ${
                activeTab === "whatWeOffer"
                  ? "text-white bg-[#1D2133]"
                  : "text-dark bg-white"
              }`}
            >
              What We Offer
            </button>
          </div>

          <div className="h-[150px]">
            {activeTab === "whatWeDo" ? (
              <p className="text-lg leading-relaxed text-gray-one">
                At LEARN PLUS, we focus on various educational activities,
                including tailored courses, career guidance, and non-formal
                learning experiences. Our mission is to empower individuals with
                the tools they need to succeed both personally and
                professionally.
              </p>
            ) : (
              <p className="text-lg leading-relaxed text-gray-one">
                We provide a diverse array of educational services, including
                personalized coaching, workshops, and seminars. Our goal is to
                help participants develop new skills, expand their knowledge,
                and enhance their career opportunities.
              </p>
            )}
          </div>
          <div className="flex justify-center">
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}
