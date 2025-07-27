import { Container } from "@/components/layout/container";
import CtaButton from "@/components/ui/cta-btn";

export default function Home() {
  return (
    <>
      <Container
        as="main"
        className="relative flex justify-start items-center  mt-[90px] lg:mt-[105px] gap-[10px] h-[calc(100vh-95px)] lg:h-[calc(100vh-110px)] "
      >
        <div className="z-30  flex flex-col w-2/3 rounded-3xl bg-background  h-full">
          <h1 className="text-6xl uppercase leading-[1.3] ">
            Learn Plus & the Journey to <br /> a Galaxy of Knowledge
          </h1>

          <p className="mt-4 mb-8  leading-[1.35] w-[36vw] ">
            Learn Plus is a non-governmental organization with a core mission to
            promote lifelong learning and empower individuals through education,
            exploration, and continuous personal growth.
          </p>
          <CtaButton title="Uncover Our Purpose and Values" href="/" />
          <CtaButton title="Explore Our Membership Options" href="/" />
        </div>
        <div className="bg-blue-muted h-full rounded-3xl w-1/3"> dfjdsf</div>
      </Container>
      <div className="min-h-screen">
        <p className=" mt-20 text-center text-2xl">ja sam text</p>
      </div>
    </>
  );
}
