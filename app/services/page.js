import Image from "next/image";
import Accordion from "@/components/ui/accordion";
import { questions, options } from "@/data/services";

export default function Services() {
  return (
    <section className="bg-white bg-[url('/images/shape-15.png')] bg-cover bg-center bg-no-repeat  ">
      <div className="max-w-screen-xl mx-auto  py-16 md:py-20 xl:pt-40 px-4 sm:px-6 md:px-8 xl:px-0">
        <div className="lg:flex">
          {/* Left Content Section */}
          <div className="lg:w-1/2 lg:my-auto pb-10 lg:pr-4  lg:pb-0">
            <h1 className="text-3xl font-extrabold leading-9 mb-6">
              OUR SERVICES
            </h1>
            <ul className="flex flex-col text-lg">
              {questions.map((el, index) => (
                <li className="mt-2" key={index}>
                  <span className="text-secondary text-2xl font-medium uppercase mr-2">
                    q
                  </span>
                  {el}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg">
              If your answer to any of these question is YES, then consider one
              of these options.
            </p>
          </div>
          {/* Right Image Section */}
          <div className="lg:w-1/2 ml-4 ">
            <Image
              src="/images/services.jpg"
              alt="man thinking"
              width={640}
              height={426}
              className="w-full h-auto rounded-[20px]"
              priority
            />
          </div>
        </div>
        <Accordion data={options} />
      </div>
    </section>
  );
}
