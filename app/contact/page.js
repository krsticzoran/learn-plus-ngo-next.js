import Image from "next/image";
import Link from "next/link";
import GoogleMapComponent from "@/components/ui/google-map";

export default function Contact() {
  return (
    <>
      <section className="bg-primary bg-cover bg-center bg-no-repeat relative bg-[url('/images/shape-14.png')] ">
        <div className="max-w-screen-xl mx-auto pt-28  ">
          <div className="flex items ">
            <div className="w-[50%] mt-20">
              <h1 className="text-4xl sm:text-6xl font-bold   capitalize text-white ">
                get in touch
              </h1>
              <p className="mt-4 text-lg leading-7 text-gray-two w-[90%]">
                We’re here to help! Reach out to us through{" "}
                <Link
                  href="#email"
                  className="font-medium hover:text-secondary text-white"
                >
                  email
                </Link>{""}
                or{" "}
                <Link
                  href="#contact"
                  className="font-medium hover:text-secondary  text-white"
                >
                  phone
                </Link>
                , and check out the additional info{" "}
                <Link
                  href="#pdf"
                  className="font-medium hover:text-secondary text-white"
                >
                  PDF for directions
                </Link>{" "}
                and more.
              </p>
              <div className="mt-12  flex justify-center w-[90%]">
                <Link href="#visit">
               
                </Link>
              </div>
            </div>
            <div className="w-[50%] h-auto ">
              <Image
                src="/images/desk.jpg"
                width={640}
                height={427}
                alt="desk"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-white-one bg-cover bg-center bg-no-repeat  "
        id="visit"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="flex  space-x-8 py-28">
            {/* Visit Our Office*/}
            <div
              id="location"
              className="bg-white shadow-md rounded-[20px] py-16 px-8  flex-1 flex flex-col  items-center  "
              style={{
                boxShadow: "0px 0px 30px 1px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="flex items-center justify-center w-[70px] h-[70px] bg-white-one rounded-full   mb-6">
                <Image
                  src="/icons/location.png"
                  width={40}
                  height={40}
                  alt="location"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary  uppercase">
                Visit Our Office
              </h3>
              <p className="text-gray-one text-lg text-center">
                Josipa Jurja Strossmayera 65a
                <br className="text-center" /> 31000 Osijek
              </p>
            </div>

            {/* Let's Talk - test */}
            <div
              id="contact"
              className="bg-white shadow-md rounded-[20px] py-16 px-8  flex-1 flex flex-col  items-center  "
              style={{
                boxShadow: "0px 0px 30px 1px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="flex items-center justify-center w-[70px] h-[70px] bg-white-one rounded-full  mb-6">
                <Image
                  src="/icons/mobile-phone.png"
                  width={40}
                  height={40}
                  alt="contact"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary  uppercase">
                Let's Talk
              </h3>
              <p className="text-gray-one text-lg ">+385 99 247 66 44</p>
            </div>

            {/* E-mail Us*/}
            <div
              id="email"
              className="bg-white shadow-md rounded-[20px] py-16 px-8  flex-1 flex flex-col  items-center  "
              style={{
                boxShadow: "0px 0px 30px 1px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="flex items-center justify-center w-[70px] h-[70px] bg-white-one rounded-full  mb-6">
                <Image
                  src="/icons/email.png"
                  width={40}
                  height={40}
                  alt="email"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary  uppercase">
                E-mail Us
              </h3>
              <p className="text-gray-one text-lg">someemail@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto mt-28 pb-28 px-4 sm:px-6" id="pdf">
        <div className="mb-16">
          <iframe
            src="/information.pdf"
            className="w-full h-[70vh]  border rounded-md"
            style={{
              overflow: "hidden",
              border: "1px solid #ccc",
            }}
            title="Information PDF"
          ></iframe>
        </div>
        <div className="">
          <a
            href="/information.pdf"
            download="Information.pdf"
            className="text-white bg-primary px-12 py-3  text-lg rounded-md font-bold leading-6 transition-colors duration-300 font-spartan"
          >
            Download PDF
          </a>
        </div>
      </div>

      <section></section>
    </>
  );
}
