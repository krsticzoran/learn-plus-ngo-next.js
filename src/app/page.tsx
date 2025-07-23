import EarthAnimation from "@/components/earth-animation";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen flex justify-center items-center ">
        <h1 className=" font-jetbrains  text-9xl uppercase leading-[1.3]">
          kruno evo ti ga naslov
        </h1>
        <EarthAnimation />
      </div>
      <div className="min-h-screen">
        <p className=" mt-20 text-center font-outfit text-2xl">ja sam text</p>
      </div>
    </>
  );
}
