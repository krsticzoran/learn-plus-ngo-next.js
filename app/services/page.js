import Image from "next/image";
import Accordion from "@/components/ui/accordion";
import { questions, options } from "@/data/services";

export default function Services() {
  return (
    <section className="bg-white bg-[url('/images/shape-15.png')] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 md:px-8 md:py-20 xl:px-0 xl:pt-40">
        <div className="lg:flex">
          {/* Left Content Section */}
          <div className="pb-10 lg:my-auto lg:w-1/2 lg:pb-0 lg:pr-4">
            <h1 className="mb-6 text-3xl font-extrabold leading-9">
              OUR SERVICES
            </h1>
            <ul className="flex flex-col text-lg">
              {questions.map((el, index) => (
                <li className="mt-2" key={index}>
                  <span className="mr-2 text-2xl font-medium uppercase text-secondary">
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
          <div className="ml-4 lg:w-1/2">
            <Image
              src="/images/services.jpg"
              alt="man thinking"
              width={640}
              height={426}
              className="h-auto w-full rounded-[20px]"
              priority
            />
          </div>
        </div>
        <div className="mt-12 md:mt-16 xl:mt-20">
          <Accordion data={options} />
        </div>
      </div>
    </section>
  );
}
