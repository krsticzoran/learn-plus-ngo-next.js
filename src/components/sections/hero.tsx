import ScrollingText from "@/components/ui/scrolling-text";
import CustomButton from "@/components/ui/custom-button";
import ParallaxImg from "@/components/ui/parallax-img";
import HeroImage from "@/assets/images/hero.jpg";
import { Container } from "@/components/layout/container";

export default function Hero() {
  return (
    <Container
      as="main"
      aria-labelledby="hero-heading"
      className="relative mt-[90px] lg:mt-[105px] gap-[10px] h-[calc(100vh-95px)] lg:h-[calc(100vh-110px)] flex flex-col pb-[10px]"
    >
      <div className="flex justify-start items-center flex-1 w-full gap-[10px]">
        <div className="z-30 flex flex-col w-2/3 rounded-4xl bg-background p-12 h-full">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-6xl font-medium mb-6 leading-tight"
          >
            Empowering Growth Through Lifelong Learning
          </h1>

          <p className="w-[75%] mb-8 text-lg">
            Learn Plus is a non-governmental organization with a core mission to
            promote <span className="text-blue-muted">lifelong learning</span>{" "}
            and empower individuals through education, exploration, and
            continuous <span className="text-blue-muted">personal growth</span>.
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
          <ParallaxImg
            src={HeroImage}
            alt="People attending educational training session"
          />
        </div>
      </div>
      <div
        aria-label="Upcoming and past Erasmus opportunities"
        className="w-full bg-background  rounded-4xl overflow-hidden flex items-center justify-center min-h-[70px] lg:min-h-[80px]"
      >
        <ScrollingText />
      </div>
    </Container>
  );
}
