import EarthAnimation from "@/components/ui/earth-animation";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen flex  justify-start items-center">
        <div className="w-1/2 z-50">
          <h1 className="text-[40px] uppercase leading-[1.3]">
            Learn Plus: Journey Through the Galaxy of Knowledge
          </h1>

          <p className="mt-4  text-center text-xl">
            Learn Plus is a non-governmental organization with a core mission —
            to promote lifelong learning and empower individuals through
            education, exploration, and continuous personal growth.
          </p>
        </div>
        <EarthAnimation />
      </div>
      <div className="min-h-screen">
        <p className=" mt-20 text-center text-2xl">ja sam text</p>
      </div>
    </>
  );
}
