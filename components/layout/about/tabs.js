"use client";
import { useState } from "react";
import Image from "next/image";

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

        <div className=" w-[50%] px-10 ">
          <p className="text-lg font-medium  text-secondary pb-[15px]">
            Unlock Your Potential
          </p>
          <h2 className="text-3xl font-extrabold  text-dark mb-[25px]">
            Learning designed around you
          </h2>
          <div className="flex space-x-8 mb-6">
            <button
              onClick={() => setActiveTab("whatWeDo")}
              className={`px-6 py-2 text-xl font-semibold transition-colors duration-300 ${
                activeTab === "whatWeDo"
                  ? "text-blue-600 underline"
                  : "text-gray-600"
              }`}
            >
              What We Do
            </button>
            <button
              onClick={() => setActiveTab("whatWeOffer")}
              className={`px-6 py-2 text-xl font-semibold transition-colors duration-300 ${
                activeTab === "whatWeOffer"
                  ? "text-blue-600 underline"
                  : "text-gray-600"
              }`}
            >
              What We Offer
            </button>
          </div>

          <div>
            {activeTab === "whatWeDo" ? (
              <>
                <p className="text-lg leading-relaxed">
                  At LEARN PLUS, we focus on various educational activities,
                  including tailored courses, career guidance, and non-formal
                  learning experiences. Our mission is to empower individuals
                  with the tools they need to succeed both personally and
                  professionally.
                </p>
              </>
            ) : (
              <>
                <p className="text-lg leading-relaxed">
                  We provide a diverse array of educational services, including
                  personalized coaching, workshops, and seminars. Our goal is to
                  help participants develop new skills, expand their knowledge,
                  and enhance their career opportunities.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
