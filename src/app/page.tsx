import { Container } from "@/components/layout/container";
import CustomButton from "@/components/ui/custom-button";
import ParallaxImg from "@/components/ui/parallax-img";
import Hero from "@/assets/images/hero.jpg";
import Osijek from "@/assets/images/osijek.jpg";
import ScrollingText from "@/components/ui/scrolling-text";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container
        as="main"
        className="relative  mt-[90px] lg:mt-[105px] gap-[10px] h-[calc(100vh-95px)] lg:h-[calc(100vh-110px)] flex flex-col pb-[10px]"
      >
        <div className="flex justify-start items-center flex-1 w-full gap-[10px]">
          <div className="z-30 flex flex-col w-2/3 rounded-4xl bg-background p-12 h-full">
            <h1 className="text-4xl sm:text-6xl font-medium mb-6 leading-tight">
              Empowering Growth Through Lifelong Learning
            </h1>

            <p className="w-[75%] mb-8 text-lg">
              Learn Plus is a non-governmental organization with a core mission
              to promote{" "}
              <span className="text-blue-muted">lifelong learning</span> and
              empower individuals through education, exploration, and continuous{" "}
              <span className="text-blue-muted">personal growth</span>.
            </p>
            <div className="flex gap-2">
              <CustomButton href="/"> Explore Programs</CustomButton>
              <CustomButton variant="secondary">Become a Member</CustomButton>
            </div>
            <div className="mt-auto flex gap-8">
              <div>
                <p className="text-4xl mb-2">200+</p>
                <p className="text-sm">Students successfully trained</p>
              </div>
              <div>
                <p className="text-4xl mb-2">6+</p>
                <p className="text-sm">Years of experience</p>
              </div>
              <div>
                <p className="text-4xl mb-2">10+</p>
                <p className="text-sm">Countries we reached</p>
              </div>
              <div>
                <p className="text-4xl mb-2"> 50+</p>
                <p className="text-sm">Trainings delivered worldwide</p>
              </div>
            </div>
          </div>
          <div className="bg-background h-full rounded-4xl w-1/3 relative overflow-hidden">
            <ParallaxImg src={Hero} alt="Hero Image" />
          </div>
        </div>
        <div className="w-full bg-background  rounded-4xl overflow-hidden flex items-center justify-center min-h-[70px] lg:min-h-[80px">
          <ScrollingText />
        </div>
      </Container>
      <Container as="section" className="bg-white rounded-4xl p-8 ">
        <div>
          <div className="py-2.5 text-sm px-6 border border-border-muted w-fit rounded-4xl ">
            <p className="text-black-muted/60">about us</p>
          </div>
          <h2 className="text-5xl font-medium mt-3">Find Out Who We Are</h2>
        </div>
        <div className="flex gap-[10px] my-2.5">
          <div className="bg-background-muted h-60 w-full rounded-4xl p-4 flex flex-col">
            <h3 className="text-3xl">
              Guiding You Toward Personal and Professional Success
            </h3>
            <p className="mt-auto">
              Through our seminars, lessons, tailor-made courses, job shadowing,
              group mobilities and different types of non-formal education we
              provide our members and participants career guidance and better
              chances in their professional and private lives.
            </p>
          </div>
          <div className="bg-background-muted h-60 w-full rounded-4xl p-6 flex flex-col">
            <h3 className="text-3xl">Expertise That Comes With Experience</h3>

            <p className="mt-auto">
              Although we are new NGO, all our members and board staff have huge
              experience in working with and for national and international
              stakeholders, organizations like UN, International Organization
              for Migration (IOM) and similar. In that manner we can provide you
              expertise in many fields.
            </p>
          </div>
        </div>
        <div className="bg-background h-100 rounded-4xl w-full relative overflow-hidden">
          <Image
            fill
            src={Osijek}
            alt="Osijek"
            className="object-cover rounded-4xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-4xl z-10" />
          <p className="absolute bottom-4 left-4 w-[70%] text-white z-20 text-lg font-medium">
            Our main office is located in Osijek, the center of Osijek-Baranya
            county, in the easternmost part of Croatia, very near three
            countries - Serbia, Bosnia and Herzegovina and Hungary.
          </p>{" "}
        </div>
        <div className="flex gap-[10px] my-2.5">
          <div className="bg-background-muted h-60 w-full rounded-4xl p-4 flex flex-col">
            <h3 className="text-3xl"> What We Do</h3>
            <p className="mt-auto">
              Through our seminars, lessons, tailor-made courses, job shadowing,
              group mobilities and different types of non-formal education we
              provide our members and participants career guidance and better
              chances in their professional and private lives.
            </p>
          </div>
          <div className="bg-background-muted h-60 w-full rounded-4xl p-6 flex flex-col">
            <h3 className="text-3xl">What We Offer</h3>

            <p className="mt-auto">
              Although we are new NGO, all our members and board staff have huge
              experience in working with and for national and international
              stakeholders, organizations like UN, International Organization
              for Migration (IOM) and similar. In that manner we can provide you
              expertise in many fields.
            </p>
          </div>
        </div>
      </Container>
      <div className="min-h-screen"></div>
    </>
  );
}
