"use client";
import { useState } from "react";
import Image from "next/image";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("whatWeDo");

  return (
    <section className="bg-gray-100 py-20">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex justify-center space-x-8">
          
            <button
              onClick={() => setActiveTab("whatWeDo")}
              className={`px-6 py-2 text-xl font-semibold ${
                activeTab === "whatWeDo" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              What We Do
            </button>
            <button
              onClick={() => setActiveTab("whatWeOffer")}
              className={`px-6 py-2 text-xl font-semibold ${
                activeTab === "whatWeOffer" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              What We Offer
            </button>
          </div>

        
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center">
            {activeTab === "whatWeDo" ? (
              <div className="sm:w-1/2 p-8">
                <h3 className="text-3xl font-semibold mb-4">What We Do</h3>
                <p className="text-lg">
                  At LEARN PLUS, we focus on a variety of educational
                  activities, including tailored courses, career guidance, and
                  non-formal learning experiences. Our goal is to provide
                  individuals with the necessary tools to thrive both personally
                  and professionally.
                </p>
              
                <div className="relative mt-8 w-[80%] h-[400px]">
                  <Image
                    src="/images/students.png"
                    alt="Students"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
              </div>
            ) : (
              <div className="sm:w-1/2 p-8">
                <h3 className="text-3xl font-semibold mb-4">What We Offer</h3>
                <p className="text-lg">
                  We offer a diverse range of educational services such as
                  personalized coaching, workshops, and seminars. Our goal is to
                  help participants improve their skills, gain new knowledge,
                  and enhance their overall career prospects.
                </p>
             
                <div className="relative mt-8 w-[80%] h-[400px]">
                  <Image
                    src="/images/students.png"
                    alt="Students"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
  )
}
