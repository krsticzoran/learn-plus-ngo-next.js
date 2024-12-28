import Image from "next/image";
import Tabs from "@/components/layout/about/tabs";

import osijekImage from "../../public/images/osijek.jpg";

export default function AboutUs() {
  return (
    <main>
      <section className="relative w-full h-screen">
        <Image
          src={osijekImage}
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

      <section className="max-w-screen-xl mx-auto px-8 py-20 bg-white">
        <div className="space-y-16">
          <div className="flex flex-col-reverse sm:flex-row items-center">
            <div className="sm:w-1/2 p-8">
              <h2 className="text-3xl font-semibold">We Are LEARN PLUS</h2>
              <p className="mt-4 text-lg">
                We are a non-governmental organization with a main goal:
                promoting lifelong learning and education. Through our seminars,
                lessons, tailor-made courses, and different types of non-formal
                education, we provide our members and participants career
                guidance and better chances in their private and professional
                lives.
              </p>
            </div>
            <div className="sm:w-1/2 h-80 relative flex justify-end">
              <Image
                src={osijekImage}
                alt="Osijek"
                width={800}
                height={600}
                className="rounded-lg w-[80%]"
              />
            </div>
          </div>

          <div className="flex sm:flex-row-reverse items-center">
            <div className="sm:w-1/2 p-8">
              <h2 className="text-3xl font-semibold">Our Expertise</h2>
              <p className="mt-4 text-lg">
                Although we are a new NGO, our team brings extensive experience
                working with national and international stakeholders, including
                organizations like the UN and IOM. We offer expertise in various
                fields of education and professional development.
              </p>
            </div>
            <div className="sm:w-1/2 h-80 relative">
              <Image
                src={osijekImage}
                alt="Osijek"
                width={800}
                height={600}
                className="rounded-lg w-[80%]"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row items-center">
            <div className="sm:w-1/2 p-8">
              <h2 className="text-3xl font-semibold">Our Location</h2>
              <p className="mt-4 text-lg">
                Our main office is located in Osijek, the center of
                Osijek-Baranya County, in the easternmost part of Croatia, very
                close to three countries: Serbia, Bosnia and Herzegovina, and
                Hungary.
              </p>
            </div>
            <div className="sm:w-1/2 h-80 relative flex justify-end">
              <Image
                src={osijekImage}
                alt="Osijek"
                width={800}
                height={600}
                className="rounded-lg w-[80%]"
              />
            </div>
          </div>
        </div>
      </section>
      <Tabs />
    </main>
  );
}
