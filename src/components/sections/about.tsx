import { Container } from "@/components/layout/container";
import Osijek from "@/assets/images/osijek.webp";
import Image from "next/image";

export default function About() {
  return (
    <Container
      as="section"
      aria-labelledby="about-heading"
      className="rounded-4xl bg-white p-6"
    >
      <div className="my-2.5 flex flex-col gap-[10px] sm:text-lg lg:flex-row">
        <div className="bg-background-muted/50 flex h-80 w-full flex-col rounded-3xl p-4 sm:bg-white sm:p-6 lg:w-1/2">
          <div>
            <div className="border-border-muted hidden w-fit rounded-4xl border px-6 py-1 text-sm sm:block">
              <p className="text-black-muted/60">about us</p>
            </div>
            <h2
              id="about-heading"
              className="text-2xl font-medium sm:mt-3 sm:text-4xl xl:text-5xl"
            >
              Find Out Who We Are
            </h2>
          </div>
          <p className="mt-auto">
            Through our seminars, lessons, tailor-made courses, job shadowing,
            group mobilities and different types of non-formal education we
            provide our members and participants career guidance and better
            chances in their professional and private lives.
          </p>
        </div>
        <div className="bg-blue-muted flex h-80 w-full flex-col rounded-3xl p-4 text-white sm:p-6 lg:w-1/2">
          <h3 className="text-2xl sm:text-3xl">
            Expertise That Comes With Experience
          </h3>

          <p className="mt-auto">
            Although we are new NGO, all our members and board staff have huge
            experience in working with and for national and international
            stakeholders, organizations like UN, International Organization for
            Migration (IOM) and similar.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 lg:flex-row">
        <div className="bg-black-muted flex h-80 w-full flex-col rounded-3xl p-4 text-white sm:p-6 lg:w-1/2">
          <h3 className="text-2xl sm:text-3xl">What We Offer</h3>

          <p className="mt-auto">
            We provide a diverse array of educational services, including
            personalized coaching, workshops, and seminars. Our goal is to help
            participants develop new skills, expand their knowledge, and enhance
            their career opportunities.
          </p>
        </div>
        <div className="bg-background relative h-80 w-full overflow-hidden rounded-3xl lg:w-1/2">
          <Image
            fill
            src={Osijek}
            alt="Photo of Osijek, where the main office is located"
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="rounded-3xl object-cover"
          />
          <div className="absolute inset-0 z-10 rounded-3xl bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute top-4 left-4 z-20 w-fit rounded-4xl border border-white px-6 py-1 text-sm">
            <p className="text-white">location</p>
          </div>
          <p className="absolute bottom-4 left-4 z-20 w-[90%] font-medium text-white sm:left-6 sm:w-[95%]">
            Our main office is located in Osijek, the center of Osijek-Baranya
            county, in the easternmost part of Croatia, very near three
            countries - Serbia, Bosnia and Herzegovina and Hungary.
          </p>{" "}
        </div>
      </div>
    </Container>
  );
}
