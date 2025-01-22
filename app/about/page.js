import Image from "next/image";
import Tabs from "@/components/layout/about/tabs";
import Link from "next/link";

export default function AboutUs() {
  return (
    <main>
      <section className="relative w-full h-[70vh]">
        <Image
          src="/images/osijek.jpg"
          alt="Osijek"
          layout="fill"
          style={{ objectFit: "cover" }}
          className="absolute inset-0"
          sizes="(min-width: 250px) 100vw"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Welcome to LEARN PLUS
          </h1>
          <p className="mt-4 text-xl sm:text-2xl">
            Promoting lifelong learning and education
          </p>
        </div>
      </section>

      <section
        id="learn-plus"
        className=" bg-white bg-[url('/images/shape-15.png')] bg-cover bg-center bg-no-repeat  "
      >
        <div className="max-w-screen-xl mx-auto  py-28 flex flex-col-reverse sm:flex-row items-center">
          <div className="sm:w-1/2 ">
            <p className="text-lg font-medium uppercase text-secondary ">
              Who We Are?
            </p>
            <h2 className="text-4xl font-extrabold leading-[60px] mt-2 text-primary xl:w-[80%]">
              Empowering Lives Through Learn Plus
            </h2>
            <p className="mt-6 text-lg leading-7 text-gray-one">
              Learn Plus is a non-governmental organization dedicated to
              promoting lifelong learning and education. We believe that
              continuous education empowers individuals and fosters personal and
              professional growth.
            </p>
            <div className="flex mt-9">
              <div className="w-[120px] h-auto flex items-center justify-center ">
                <div className="flex items-center justify-center w-[90px] h-[90px] bg-white-one rounded-full hover:bg-secondary transition-colors duration-300">
                  <Link href="/services">
                    <Image
                      src="/icons/mission.png"
                      width={40}
                      height={40}
                      alt="mission"
                    />
                  </Link>
                </div>
              </div>
              <div className="w-[100%] ml-5">
                <p className="text-primary text-lg font-extrabold leading-6 mb-4">
                  Empowering Growth Through Education
                </p>
                <p className=" text-lg leading-7 text-gray-one">
                  Our mission is to deliver high-quality educational
                  opportunities tailored to the needs of our participants.
                </p>
                <p className=" text-lg leading-7 text-gray-one mt-1">
                  Through engaging seminars, personalized courses, and
                  innovative non-formal learning experiences, we aim to provide
                  tools for career advancement and self-development.
                </p>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="w-[120px] h-auto flex items-center justify-center ">
                <div className="flex items-center justify-center w-[90px] h-[90px] bg-white-one rounded-full hover:bg-secondary transition-colors duration-300">
                  <Link href="/contact#location">
                    <Image
                      src="/icons/location.png"
                      width={40}
                      height={40}
                      alt="location"
                    />
                  </Link>
                </div>
              </div>
              <div className="w-[100%] ml-5">
                <p className="text-primary text-lg font-extrabold leading-6 mb-4">
                  Learning Hub in Osijek
                </p>
                <p className=" text-lg leading-7 text-gray-one">
                  Located in the heart of Osijek, Croatia, we serve as a hub for
                  learning and collaboration, connecting diverse communities
                  across the region.
                </p>
                <p className="mt-1 text-lg leading-7 text-gray-one">
                  Whether you're seeking guidance for your career or striving
                  for personal improvement, Learn Plus is here to support your
                  journey.
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 h-auto flex justify-end  pt-20  ">
            <div className="relative ">
              <div className="z-50 relative">
                <Image
                  src="/images/about-2.jpg"
                  alt="about us"
                  width={423}
                  height={513}
                  className="rounded-lg  "
                />
              </div>
              <div className="absolute top-[403px] left-[-160px] z-50">
                <Image
                  src="/images/about-3.jpg"
                  alt="about us"
                  width={320}
                  height={220}
                  style={{ boxShadow: "0px 20px 60px 10px rgba(0, 0, 0, 0.2)" }}
                  className="rounded-lg shadow-md "
                />
              </div>
              <div className="absolute top-[40px] right-[-60px] w-[180px] h-[180px] z-0 ">
                <Image
                  src="/images/shape-16.png"
                  alt="shape"
                  width={180}
                  height={180}
                />
              </div>
              <div className="absolute bottom-[18px] left-[-250px] w-[180px] h-[180px] z-0 ">
                <Image
                  src="/images/shape-16.png"
                  alt="shape"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <h2 className="text-4xl font-extrabold leading-[60px] mt-2 xl:w-[80%]">
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
          {/* Regular Members Card */}
          <div className="flex  space-x-8">
            <div
              className="bg-white shadow-md rounded-[20px] py-16 px-8  flex-1"
              style={{
                boxShadow: "0px 0px 30px 1px rgba(0, 0, 0, 0.15)",
              }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4 uppercase">
                Regular Members
              </h3>
              <p className="text-gray-one text-lg">
                Regular members actively participate in the activities and
                programs of our association. They can be adults, persons who
                participated in the founding of the Association, their family
                members, and friends.
              </p>
              <p className="text-gray-one text-lg mt-2">
                Regular members make up the Assembly of the Association and
                actively participate in its activities while complying with the
                Statute and all the rules and guidelines of the Association and
                regularly paying the membership fee.
              </p>
            </div>

            {/* Associate Members Card */}
            <div
              className="bg-white shadow-md rounded-[20px] py-16 px-8   flex-1"
              style={{
                boxShadow: "0px 0px 30px 1px rgba(0, 0, 0, 0.15)",
              }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4 uppercase">
                Associate Members
              </h3>
              <p className="text-gray-one text-lg ">
                Associate members occasionally participate in the Association's
                activities or help the Association achieve its goals with
                financial or other support.{" "}
              </p>
              <p className="text-gray-one text-lg mt-2">
                Associated members are natural and legal persons of legal age
                and minors. Associate members also pay a regular membership fee.
              </p>
            </div>

            {/* Honorary Members Card */}
            <div
              className="bg-white shadow-md rounded-[20px] py-16 px-8  flex-1"
              style={{
                boxShadow: "0px 0px 30px 1px rgba(0, 0, 0, 0.15)",
              }}
            >
              <h3 className="text-xl font-semibold text-priamry mb-4 uppercase ">
                Honorary Members
              </h3>
              <p className="text-gray-one text-lg">
                Honorary members are persons among the members of the
                Association, other organizations, academic communities in
                Croatia and abroad who significantly contributed to the work and
                reputation of the Association and promote its activities and
                values.
              </p>
              <p className="text-gray-one text-lg mt-2">
                They are appointed exclusively by the Assembly and are not
                obliged to pay membership fees.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
