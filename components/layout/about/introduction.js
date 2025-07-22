import Link from "next/link";
import Image from "next/image";

export default function Introduction() {
  return (
    <>
      <section
        id="learn-plus"
        className="bg-white bg-[url('/images/shape-15.png')] bg-cover bg-center bg-no-repeat"
      >
        <div className="mx-auto grid max-w-screen-xl grid-cols-12 grid-rows-4 gap-4 pb-28 pt-40">
          <div className="col-span-8 row-span-2 rounded-[20px] bg-primary">
            <div className="flex h-[500px] flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-white sm:text-6xl">
                We are LEARN PLUS
              </h1>
              <p className="mt-4 px-10 text-center text-xl text-white sm:text-xl">
                a non-governmental organization with a main goal - promoting
                lifelong learning and education.
              </p>
            </div>
          </div>
          <div className="relative col-span-4 row-span-2">
            <Image
              src="/images/about1.jpg"
              fill
              alt="exam"
              className="overflow-hidden rounded-[20px] object-cover"
            />
          </div>
          <div className="col-span-4 row-span-2 flex flex-col items-center justify-center rounded-[20px] bg-secondary px-5 text-lg font-semibold">
            <p>
              Through our seminars, lessons, tailor-made courses and different
              types of non-formal education we provide our members and
              participants career guidance and better chances in their both
              private and professional lives.
            </p>
            <p className="mt-2">
              Although we are pretty new NGO, all our members and board staff
              have huge experience in working with and for national and
              international stakeholders, organizations like UN, International
              Organization for Migration (IOM) and similar. In that manner we
              can provide you expertise in many fields.
            </p>
          </div>
          <div className="relative col-span-8 row-span-2">
            <Image
              src="/images/osijek.jpg"
              fill
              alt="exam"
              className="rounded-[20px] object-cover"
            />
            <div className="absolute inset-0 rounded-[20px] bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-10 px-10 text-lg font-medium">
              <p className="text-white">
                Our main office is located in Osijek, the center of
                Osijek-Baranya county, in the easternmost part of Croatia, very
                near three countries - Serbia, Bosnia and Herzegovina and
                Hungary.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
