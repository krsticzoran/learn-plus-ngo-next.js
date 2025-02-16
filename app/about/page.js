import Image from "next/image";
import Tabs from "@/components/layout/about/tabs";
import Introduction from "@/components/layout/about/introduction";

import { membership } from "@/data/about";

export default function AboutUs() {
  return (
    <main>
      <Introduction />
      <Tabs />
      <section id="membership" className=" bg-primary relative ">
        <Image
          src="/images/shape-23.png"
          alt="shape"
          width={356}
          height={170}
          className="absolute top-0 right-0"
        />
        <div className="max-w-screen-xl mx-auto  py-28 flex text-white ">
          <div className="xl:w-1/2 pr-5">
            <div className="xl:h-[180px]">
              <p className="text-lg font-medium uppercase text-secondary ">
                Join Us to Contribute, Learn, and Grow
              </p>
              <h2 className="text-4xl font-extrabold leading-[60px] mt-2 xl:w-[80%] text-white">
                Membership Eligibility and Opportunities
              </h2>
            </div>
            <div className="flex items-center mb-4 ">
              <div className="flex items-center justify-center w-[70px] h-[70px] bg-blue-one rounded-full hover:bg-secondary transition-colors duration-300">
                <Image
                  src="/icons/people.png"
                  width={40}
                  height={40}
                  alt="Who Can Join"
                />
              </div>
              <p className="text-white text-lg font-extrabold leading-6 ml-6">
                Who Can Join
              </p>
            </div>
            <p className="text-lg leading-7 text-gray-two ">
              Any natural person of Croatian or foreign citizenship and legal
              entity registered in Croatia who is interested in participating in
              the Association's activities and contributing to the achievement
              of the Association's goals, and who accepts the provisions of the
              Statute, can become a member of the Association.
            </p>
          </div>
          <div className="xl:w-1/2  pl-5">
            <div className="flex items-center mb-4 ">
              <div className="flex items-center justify-center w-[70px] h-[70px] bg-blue-one rounded-full hover:bg-secondary transition-colors duration-300">
                <Image
                  src="/icons/clipboards.png"
                  width={40}
                  height={40}
                  alt=" How to Join"
                />
              </div>
              <p className="text-white text-lg font-extrabold leading-6 ml-6">
                How to Join
              </p>
            </div>

            <p className="text-lg leading-7 mt-4 text-gray-two">
              One becomes a member of the Association by registering in the list
              of members and signing the application form accepting the Statute
              and other acts of the Association.
            </p>
            <p className="text-lg leading-7 pt-2 text-gray-two">
              Persons under the age of 14 can become members with a written
              declaration signed by their parents or legal guardians as well as
              minors over the age of 14 where is necessary that their parents
              give us written consent.
            </p>
            <div className="flex items-center mb-4 mt-6">
              <div className="flex items-center justify-center w-[70px] h-[70px] bg-blue-one rounded-full hover:bg-secondary transition-colors duration-300">
                <Image
                  src="/icons/lamp.png"
                  width={40}
                  height={40}
                  alt="lightbulb"
                />
              </div>
              <p className="text-white text-lg font-extrabold leading-6 ml-6">
                Member Benefits
              </p>
            </div>

            <p className="text-lg leading-7 mt-4 text-gray-two">
              As our member you can have many opportunities - mobilities, free
              seminars, study visits, field work and other activities.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white bg-[url('/images/shape-15.png')] bg-cover bg-center bg-no-repeat ">
        <div className="max-w-screen-xl mx-auto py-28  ">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold leading-[60px]   text-center text-primary">
              Choose the Best Membership Plan for You
            </h2>
            <h3 className="text-2xl  font-semibold  mt-2 text-pretty">
              For the year 2025 the
              <span className="text-secondary"> membership fee </span>is 10 EUR
            </h3>
          </div>

          <div className="flex  space-x-8">
            {membership.map((el) => (
              <div
                className="bg-white shadow-md rounded-[20px] py-16 px-8  flex-1"
                style={{
                  boxShadow: "0px 0px 30px 1px rgba(0, 0, 0, 0.15)",
                }}
              >
                <h3 className="text-xl font-semibold text-primary mb-4 uppercase">
                  {el.question}
                </h3>
                <p className="text-gray-one text-lg">{el.answer}</p>
                <p className="text-gray-one text-lg mt-2">{el.secondAnswer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
