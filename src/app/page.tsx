import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Membership from "@/components/sections/ membership";
import HomePastProjects from "@/components/sections/home-past-projects";




export default async function Home() {
 

  return (
    <>
      <Hero />
     <HomePastProjects />
      <About />
      <Membership />
    </>
  );
}
