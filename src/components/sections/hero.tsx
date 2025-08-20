import ScrollingText from "@/components/ui/scrolling-text";
import CustomButton from "@/components/ui/custom-button";
import ParallaxImg from "@/components/ui/parallax-img";
import HeroImage from "@/assets/images/hero.jpg";
import { Container } from "@/components/layout/container";
import KeyMetrics from "@/components/ui/key-metrics";
import { statsData } from "@/data/stats-data";

export default function Hero() {
  return (
    <Container
      as="main"
      aria-labelledby="hero-heading"
      className="relative mb-2.5 flex flex-col gap-[10px] lg:h-[calc(100vh-110px)]"
    >
      <div className="flex h-full w-full flex-1 flex-col items-center justify-start gap-[10px] lg:min-h-[calc(100vh-210px)] lg:flex-row">
        <div className="bg-background z-30 flex h-full w-full flex-1 flex-col rounded-4xl p-6 sm:p-12 lg:w-2/3">
          <h1
            id="hero-heading"
            className="mb-4 text-2xl leading-tight font-medium sm:mb-6 sm:text-5xl xl:text-6xl"
          >
            Empowering Growth Through Lifelong Learning
          </h1>

          <p className="mb-6 sm:mb-8 sm:text-lg xl:w-[75%]">
            Learn Plus is a non-governmental organization with a core mission to
            promote <span className="text-blue-muted">lifelong learning</span>{" "}
            and empower individuals through education, exploration, and
            continuous <span className="text-blue-muted">personal growth</span>.
          </p>
          <div className="flex gap-2">
            <CustomButton href="/services"> Explore Programs</CustomButton>
            <CustomButton variant="secondary" href="/#membership-heading">
              Become a Member
            </CustomButton>
          </div>

          {/*Display key statistics like number of students, countries...*/}
          <KeyMetrics data={statsData} />
        </div>

        {/* Hero image with parallax effect */}
        <div className="bg-background relative h-full min-h-[500px] w-full overflow-hidden rounded-4xl lg:w-1/3">
          <ParallaxImg
            src={HeroImage}
            alt="People attending educational training session"
          />
        </div>
      </div>
      <div
        aria-label="Upcoming and past Erasmus opportunities"
        className="bg-background flex min-h-[70px] w-full items-center justify-center overflow-hidden rounded-3xl lg:min-h-[80px]"
      >
        {/* Scrolling text component for displaying upcoming and past opportunities */}
        <ScrollingText />
      </div>
    </Container>
  );
}
