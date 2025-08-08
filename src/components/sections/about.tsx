import { Container } from "@/components/layout/container";
import Osijek from "@/assets/images/osijek.jpg";
import Image from "next/image";

export default function About() {
  return (
    <Container
      as="section"
      aria-labelledby="about-heading"
      className="rounded-4xl bg-white p-8"
    >
      <div className="my-2.5 flex gap-[10px] text-lg">
        <div className="flex h-80 w-full flex-col rounded-3xl p-4 font-medium">
          <div>
            <div className="border-border-muted w-fit rounded-4xl border px-6 py-1 text-sm">
              <p className="text-black-muted/60">about us</p>
            </div>
            <h2 id="about-heading" className="mt-3 text-5xl font-medium">
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
        <div className="bg-blue-muted flex h-80 w-full flex-col rounded-3xl p-6 font-medium text-white">
          <h3 className="text-3xl">Expertise That Comes With Experience</h3>

          <p className="mt-auto">
            Although we are new NGO, all our members and board staff have huge
            experience in working with and for national and international
            stakeholders, organizations like UN, International Organization for
            Migration (IOM) and similar.
          </p>
        </div>
      </div>
      <div className="flex gap-2.5">
        <div className="bg-black-muted flex h-80 w-1/2 flex-col rounded-3xl p-6 text-white">
          <h3 className="text-3xl">What We Offer</h3>

          <p className="mt-auto text-lg">
            We provide a diverse array of educational services, including
            personalized coaching, workshops, and seminars. Our goal is to help
            participants develop new skills, expand their knowledge, and enhance
            their career opportunities.
          </p>
        </div>
        <div className="bg-background relative h-80 w-1/2 overflow-hidden rounded-3xl">
          <Image
            fill
            src={Osijek}
            alt="Photo of Osijek, where the main office is located"
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="rounded-3xl object-cover"
          />
          <div className="absolute inset-0 z-10 rounded-3xl bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute top-4 left-4 z-20 w-fit rounded-4xl border border-white px-6 py-1 text-sm">
            <p className="text-white">location</p>
          </div>
          <p className="absolute bottom-4 left-4 z-20 w-[95%] text-lg font-medium text-white">
            Our main office is located in Osijek, the center of Osijek-Baranya
            county, in the easternmost part of Croatia, very near three
            countries - Serbia, Bosnia and Herzegovina and Hungary.
          </p>{" "}
        </div>
      </div>
    </Container>
  );
}
