import TabButtons from "./tab-buttons";

import Image from "next/image";

export default function Tabs() {
  return (
    <section className="bg-white-one relative " id="what-we-do">
      <div id="what-we-offer" className="py-20">
        <div className="max-w-screen-xl mx-auto  flex">
          <div className=" w-[50%] pr-10 pt-16 ">
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
              <TabButtons />
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
