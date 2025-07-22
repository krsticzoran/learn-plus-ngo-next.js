import TabButtons from "./tab-buttons";

import Image from "next/image";

export default function Tabs() {
  return (
    <section className="relative bg-white-one" id="what-we-do">
      <div id="what-we-offer" className="py-20">
        <div className="mx-auto flex max-w-screen-xl">
          <div className="w-[50%] pr-10 pt-16">
            <p className="mb-2 text-lg font-medium uppercase text-secondary">
              Unlock Your Potential
            </p>
            <h3 className="mb-4 text-3xl font-semibold text-primary">
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
          <div className="ml-2 flex w-1/2 flex-col">
            <div className="relative mb-4 h-1/2 w-5/6 self-end">
              <Image
                src="images/tabs3.jpg"
                fill
                className="rounded-[20px] object-cover"
                alt="seminar"
              />
            </div>
            <div className="flex h-1/2">
              <div className="relative mr-2 w-full">
                <Image
                  src="images/tabs2.jpg"
                  fill
                  className="rounded-[20px] object-cover"
                  alt="seminar"
                />
              </div>
              <div className="relative ml-2 w-full">
                <Image
                  src="images/tabs1.jpg"
                  fill
                  className="rounded-[20px] object-cover"
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
