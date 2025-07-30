import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import HeroImg from "@/components/ui/hero-img";

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
              <Button className="py-6 px-10 bg-green-muted text-foreground cursor-pointer hover:bg-green-muted/70 rounded-full duration-300">
                Explore Programs
              </Button>
              <Button className="py-6 px-10 bg-background-muted hover:bg-background-muted/70 text-foreground cursor-pointer rounded-full duration-300">
                Become a Member
              </Button>
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
          <HeroImg />
        </div>
        <div className="w-full bg-background h-20 rounded-4xl"></div>
      </Container>
      <div className="min-h-screen">
        <p className=" mt-20 text-center text-2xl">ja sam text</p>
      </div>
    </>
  );
}
