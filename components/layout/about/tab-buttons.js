"use client";
import { useState, useEffect } from "react";
import { tabContent } from "@/data/about";

export default function TabButtons() {
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
    <>
      <div className="flex">
        <button
          onClick={() => setActiveTab("what-we-do")}
          className={`mr-5 w-full rounded-md border-2 border-primary py-4 text-center font-spartan text-lg font-bold uppercase leading-6 ${
            activeTab === "what-we-do" ? "bg-primary text-white" : ""
          }`}
        >
          What We Do
        </button>
        <button
          onClick={() => setActiveTab("what-we-offer")}
          className={`w-full rounded-md border-2 border-primary py-4 text-center font-spartan text-lg font-bold uppercase leading-6 ${
            activeTab === "what-we-offer" ? "bg-primary text-white" : ""
          }`}
        >
          What We Offer
        </button>
      </div>
      <div className="h-[200px] p-4 pt-8">
        <ul>
          {tabContent[activeTab]?.map((text, index) => (
            <li
              key={index}
              className={`text-lg leading-relaxed text-gray-one ${index > 0 ? "mt-2" : ""}`}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
