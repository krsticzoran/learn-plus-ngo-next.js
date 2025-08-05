import { Container } from "@/components/layout/container";
import Osijek from "@/assets/images/osijek.jpg";
import Image from "next/image";

export default function About() {
  return (
    <Container
      as="section"
      aria-labelledby="about-heading"
      className="bg-white rounded-4xl p-8 "
    >
      <div className="flex gap-[10px] my-2.5 text-lg">
        <div className="font-medium h-80 w-full rounded-3xl p-4 flex flex-col">
          <div>
            <div className="py-1 text-sm px-6 border border-border-muted w-fit rounded-4xl ">
              <p className="text-black-muted/60">about us</p>
            </div>
            <h2 id="about-heading" className="text-5xl font-medium mt-3">
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
        <div className="bg-blue-muted text-white font-medium h-80 w-full rounded-3xl p-6 flex flex-col">
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
        <div className="bg-black-muted text-white  w-1/2 h-80 rounded-3xl p-6 flex flex-col">
          <h3 className="text-3xl">What We Offer</h3>

          <p className="mt-auto text-lg">
            We provide a diverse array of educational services, including
            personalized coaching, workshops, and seminars. Our goal is to help
            participants develop new skills, expand their knowledge, and enhance
            their career opportunities.
          </p>
        </div>
        <div className="bg-background h-80 rounded-3xl w-1/2 relative overflow-hidden">
          <Image
            fill
            src={Osijek}
            alt="Photo of Osijek, where the main office is located"
            className="object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-3xl z-10" />
          <div className="absolute top-4 left-4 text-sm px-6 py-1 border border-white w-fit rounded-4xl z-20">
            <p className="text-white">location</p>
          </div>
          <p className="absolute bottom-4 left-4 w-[95%] text-white z-20 text-lg font-medium">
            Our main office is located in Osijek, the center of Osijek-Baranya
            county, in the easternmost part of Croatia, very near three
            countries - Serbia, Bosnia and Herzegovina and Hungary.
          </p>{" "}
        </div>
      </div>
    </Container>
  );
}
