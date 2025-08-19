import { Container } from "@/components/layout/container";
import AccordionServices from "@/components/ui/accordion-services";
import { questions } from "@/data/services-data";
import ServicesImage from "@/assets/images/services.jpg";
import ParallaxImg from "@/components/ui/parallax-img";

export default function Services() {
  return (
    <Container as="main">
      <div className="flex flex-col gap-2.5 lg:flex-row">
        <div className="w-1/2 rounded-4xl bg-white p-6 sm:p-12">
          <div className="pb-10 lg:my-auto lg:pr-4 lg:pb-0">
            <h1 className="mb-6 text-3xl leading-9 font-medium">
              OUR SERVICES
            </h1>
            <ul className="flex flex-col text-lg">
              {questions.map((el) => (
                <li className="mt-2" key={el.id}>
                  <span className="text-blue-muted mr-2 text-2xl font-medium uppercase">
                    q
                  </span>
                  {el.text}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg">
              If your answer to any of these question is YES, then consider one
              of these options.
            </p>
          </div>
        </div>
        <div className="relative w-1/2 overflow-hidden rounded-4xl">
          <ParallaxImg src={ServicesImage} alt="Services Image" />
        </div>
      </div>
      <div className="my-2.5 rounded-4xl bg-white p-6">
        <AccordionServices />
      </div>
    </Container>
  );
}
