import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <section className="mt-5 px-4 pb-20 sm:px-6 lg:px-8 xl:px-0">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex">
            <div className="ml-auto mt-36 w-[640px] pt-20">
              <h1 className="text-4xl font-bold capitalize text-primary sm:text-6xl">
                get in touch
              </h1>
              <p className="mt-4 w-[90%] text-lg leading-7 text-primary text-opacity-60">
                We’re here to help! Reach out to us through email or phone , and
                check out the additional info PDF for directions and more.
              </p>
              <div className="flex pt-20">
                <Link
                  href="mailto:example@example.com"
                  className="group flex flex-col items-center"
                >
                  <Image
                    src="/icons/email.png"
                    width={35}
                    height={35}
                    alt="email"
                    className="transition-transform duration-300 group-hover:scale-150"
                  />
                  <h3 className="pt-6 text-xl font-semibold uppercase text-primary">
                    E-mail Us
                  </h3>
                  <p className="pt-1 text-lg text-primary">
                    someemail@gmail.com
                  </p>
                </Link>
                <div className="mx-16 h-[150px] w-[1px] bg-primary"></div>
                <Link href="#pdf" className="group flex flex-col items-center">
                  <Image
                    src="/icons/location.png"
                    width={35}
                    height={35}
                    alt="email"
                    className="transition-transform duration-300 group-hover:scale-150"
                  />
                  <h3 className="pt-6 text-xl font-semibold uppercase text-primary">
                    Visit Our Office
                  </h3>
                  <p className="pt-1 text-lg text-primary">
                    {" "}
                    Josipa Jurja Strossmayera 65a
                  </p>
                  <p className="text-center"> 31000 Osijek</p>
                </Link>
              </div>
            </div>
            <div className="w-[50%] pl-[50px]">
              <div className="relative flex h-[620px] items-center rounded-[20px] bg-primary pl-[345px] pt-[210px]">
                <Image
                  src="/images/contact1.png"
                  width={485}
                  height={515}
                  alt="call us"
                  priority
                  className="absolute bottom-0 left-[-125px]"
                />
                <div>
                  <Link
                    href="tel:+385992476644"
                    className="group flex flex-col items-center pt-40"
                  >
                    <Image
                      src="/icons/mobile-phone.png"
                      width={35}
                      height={35}
                      alt="contact"
                      className="transition-transform duration-300 group-hover:scale-150"
                    />
                    <h3 className="pt-6 text-xl font-semibold uppercase text-white">
                      Let's Talk
                    </h3>
                    <p className="pt-1 text-lg text-white">
                      Contact Us Anytime
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-white bg-[url('/images/shape-15.png')] bg-cover bg-center bg-no-repeat pb-28 pt-28"
        id="pdf"
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-16">
            <iframe
              src="/information.pdf"
              className="h-[70vh] w-full rounded-md border"
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
              className="rounded-md bg-primary px-12 py-3 font-spartan text-lg font-bold leading-6 text-white transition-colors duration-300"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
