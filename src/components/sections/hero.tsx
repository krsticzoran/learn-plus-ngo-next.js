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
      className="relative flex h-[calc(100vh-95px)] flex-col gap-[10px] pb-[10px] lg:h-[calc(100vh-110px)]"
    >
      <div className="flex w-full flex-1 items-center justify-start gap-[10px]">
        <div className="bg-background z-30 flex h-full w-2/3 flex-col rounded-4xl p-12">
          <h1
            id="hero-heading"
            className="mb-6 text-4xl leading-tight font-medium sm:text-6xl"
          >
            Empowering Growth Through Lifelong Learning
          </h1>

          <p className="mb-8 w-[75%] text-lg">
            Learn Plus is a non-governmental organization with a core mission to
            promote <span className="text-blue-muted">lifelong learning</span>{" "}
            and empower individuals through education, exploration, and
            continuous <span className="text-blue-muted">personal growth</span>.
          </p>
          <div className="flex gap-2">
            <CustomButton href="/"> Explore Programs</CustomButton>
            <CustomButton variant="secondary">Become a Member</CustomButton>
          </div>

          {/*Display key statistics like number of students, countries...*/}
          <KeyMetrics data={statsData} />
        </div>

        {/* Hero image with parallax effect */}
        <div className="bg-background relative h-full w-1/3 overflow-hidden rounded-4xl">
          <ParallaxImg
            src={HeroImage}
            alt="People attending educational training session"
          />
        </div>
      </div>
      <div
        aria-label="Upcoming and past Erasmus opportunities"
        className="bg-background flex min-h-[70px] w-full items-center justify-center overflow-hidden rounded-4xl lg:min-h-[80px]"
      >
        {/* Scrolling text component for displaying upcoming and past opportunities */}
        <ScrollingText />
      </div>
    </Container>
  );
}
