import Image from "next/image";
import Accordion from "@/components/ui/accordion";

export default function Services() {
  return (
    <div className="bg-white bg-[url('/images/shape-15.png')] bg-cover bg-center bg-no-repeat ">
      <div className="max-w-screen-xl mx-auto  py-16 md:py-20 xl:py-28 px-4 sm:px-6 md:px-8 xl:px-0">
        <div className="lg:flex">
          <div className="lg:w-1/2 lg:my-auto pb-10 lg:pr-4  lg:pb-0">
            <h1 className="text-3xl font-extrabold leading-9 mb-6">
              OUR SERVICES
            </h1>
            <div className="flex flex-col text-l">
              <p>
                <span className="text-secondary text-2xl mr-4 font-medium uppercase">
                  q
                </span>
                Are you looking for a new place for your job shadowing program?
              </p>
              <p className="mt-2">
                <span className="text-secondary text-2xl mr-4 font-medium uppercase">
                  q
                </span>
                Do you think that students should not learn only in classrooms?
              </p>
              <p className="mt-2">
                <span className="text-secondary text-2xl mr-4 font-medium uppercase">
                  q
                </span>
                Are you looking for reliable partner for your current or future
                projects?
              </p>
            </div>
            <p className="mt-4">
              If your answer to any of these question is YES, then consider one
              of these options.
            </p>
          </div>
          <div className="lg:w-1/2 ">
            <Image
              src="/images/services.jpg"
              alt="man thinking"
              width={640}
              height={426}
              className="w-full h-auto rounded-[20px]"
            />
          </div>
        </div>
        <Accordion />
      </div>
    </div>
  );
}
