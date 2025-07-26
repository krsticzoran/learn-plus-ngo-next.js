import { Container } from "@/components/layout/container";
import CtaButton from "@/components/ui/cta-btn";

export default function Home() {
  return (
    <>
      <Container
        as="main"
        className="relative flex justify-start items-center min-h-screen"
      >
        <div className="z-30 mt-[105px] flex flex-col">
          <h1 className="text-6xl uppercase leading-[1.3] ">
            Learn Plus & the Journey to <br /> a Galaxy of Knowledge
          </h1>

          <p className="mt-4 mb-8 text-[#CFCFF1] leading-[1.35] w-[36vw]">
            Learn Plus is a non-governmental organization with a core mission to
            promote lifelong learning and empower individuals through education,
            exploration, and continuous personal growth.
          </p>
          <CtaButton title="Uncover Our Purpose and Values" href="/" />
          <CtaButton title="Explore Our Membership Options" href="/" />
        </div>
      </Container>
      <div className="min-h-screen">
        <p className=" mt-20 text-center text-2xl">ja sam text</p>
      </div>
    </>
  );
}
