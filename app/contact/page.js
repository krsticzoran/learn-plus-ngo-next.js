import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function Contact() {
  return (
    <Container as="div" className="relative">
      <main className="mt-5 pb-10 sm:pb-20 ">
        <div>
          <div className="flex flex-col md:flex-row">
            <div className="xl:ml-auto mt-8 md:mt-40 lg:mt-48 xl:mt-[164px] w-full md:w-1/2 max-w-[640px] pt-20">
              <h1 className="text-4xl font-bold capitalize text-primary sm:text-6xl">
                get in touch
              </h1>
              <p className="mt-4 w-[90%] sm:text-lg leading-7 text-primary text-opacity-60">
                We’re here to help! Reach out to us through email or phone , and
                check out the additional info PDF for directions and more.
              </p>
              <div className="flex xl:hidden gap-6 mt-6">
                <Link href="mailto:example@example.com">
                  <Image
                    src="/icons/email.png"
                    width={35}
                    height={35}
                    alt="email"
                    className="transition-transform duration-300 hover:scale-125"
                  />
                </Link>
                <Link href="#pdf">
                  <Image
                    src="/icons/location.png"
                    width={35}
                    height={35}
                    alt="email"
                    className="transition-transform duration-300 hover:scale-125"
                  />
                </Link>
                <Link href="tel:+385992476644">
                  <Image
                    src="/icons/mobile-black.png"
                    width={35}
                    height={35}
                    alt="contact"
                    className="transition-transform duration-300 hover:scale-125"
                  />
                </Link>
              </div>
              <div className="hidden xl:flex pt-20">
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
            <div className="w-[50%] pl-[50px] mt-32 xl:mt-5 hidden md:block">
              <div className="relative  md:flex h-[400px] xl:h-[620px] items-center rounded-[20px] bg-primary pl-[345px] pt-[210px]">
                <Image
                  src="/images/contact1.png"
                  width={485}
                  height={515}
                  alt="call us"
                  priority
                  className="absolute bottom-0 md:left-[-90px] lg:left-[-100px] xl:left-[-125px]"
                />
                <div>
                  <Link
                    href="tel:+385992476644"
                    className="group hidden xl:flex flex-col items-center pt-40"
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
      </main>

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
    </Container>
  );
}
