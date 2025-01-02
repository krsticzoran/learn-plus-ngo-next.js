import Image from "next/image";
import Tabs from "@/components/layout/about/tabs";

export default function AboutUs() {
  return (
    <main>
      <section className="relative w-full h-screen">
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

      <section className=" bg-white bg-[url('/images/shape-15.png')] bg-cover bg-center bg-no-repeat ">
        <div className="max-w-screen-xl mx-auto px-8 py-32 flex flex-col-reverse sm:flex-row items-center">
          <div className="sm:w-1/2 p-8">
            <p className="text-lg font-medium uppercase text-secondary">
              Who We Are?
            </p>
            <h2 className="text-4xl font-extrabold leading-[60px] mt-2 text-dark">
              Empowering Lives Through Learn Plus
            </h2>
            <p className="mt-6 text-lg leading-7 text-gray-one">
              Learn Plus is a non-governmental organization dedicated to
              promoting lifelong learning and education. We believe that
              continuous education empowers individuals and fosters personal and
              professional growth.
            </p>
            <div className="flex mt-4">
              <div className="w-[120px] h-auto flex items-center justify-center ">
                <div className="flex items-center justify-center w-[90px] h-[90px] bg-white-one rounded-full hover:bg-secondary transition-colors duration-300">
                  <Image
                    src="/mission.png"
                    width={40}
                    height={40}
                    alt="mission"
                  />
                </div>
              </div>
              <div className="w-[100%] ml-5">
                <p className="text-dark text-lg font-extrabold leading-6 mb-2">
                  Empowering Growth Through Education
                </p>
                <p className=" text-lg leading-7 text-gray-one">
                  Our mission is to deliver high-quality educational
                  opportunities tailored to the needs of our participants.
                  Through engaging seminars, personalized courses, and
                  innovative non-formal learning experiences, we aim to provide
                  tools for career advancement and self-development.
                </p>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="w-[120px] h-auto flex items-center justify-center ">
                <div className="flex items-center justify-center w-[90px] h-[90px] bg-white-one rounded-full hover:bg-secondary transition-colors duration-300">
                  <Image
                    src="/location.png"
                    width={40}
                    height={40}
                    alt="mission"
                  />
                </div>
              </div>
              <div className="w-[100%] ml-5">
                <p className="text-dark text-lg font-extrabold leading-6 mb-2">
                  Learning Hub in Osijek
                </p>
                <p className=" text-lg leading-7 text-grey-one">
                  Located in the heart of Osijek, Croatia, we serve as a hub for
                  learning and collaboration, connecting diverse communities
                  across the region. Whether you're seeking guidance for your
                  career or striving for personal improvement, Learn Plus is
                  here to support your journey.
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 h-auto flex justify-end  ">
            <div className="relative h-[513px]  w-[423px]">
              <div className="absolute top-0 right-0 z-20 w-[423] h-[513px]">
                <Image
                  src="/images/about-2.jpg"
                  alt="about us"
                  width={423}
                  height={513}
                  className="rounded-lg z-10 "
                />
              </div>
              <div className="absolute top-[403px] left-[-160px] z-20">
                <Image
                  src="/images/about-3.jpg"
                  alt="Sabout us"
                  width={320}
                  height={220}
                  style={{ boxShadow: "0px 20px 60px 10px rgba(0, 0, 0, 0.2)" }}
                  className="rounded-lg shadow-md"
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
              <div className="absolute bottom-[20px] left-[-250px] w-[180px] h-[180px] z-0 ">
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
    </main>
  );
}
