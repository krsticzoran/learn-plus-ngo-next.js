import { Container } from "@/components/layout/container";
import AccordionServices from "@/components/ui/accordion-services";
import { questions } from "@/data/services-data";
import ServicesImage from "@/assets/images/services.jpg";
import ParallaxImg from "@/components/ui/parallax-img";
import CustomButton from "@/components/ui/custom-button";

export default function Services() {
  return (
    <Container as="main" aria-labelledby="services-heading">
      <div className="flex flex-col gap-2.5 lg:flex-row">
        <div className="flex w-1/2 flex-col">
          <div className="mb-2.5 rounded-3xl bg-white px-6 py-6 sm:px-12">
            <h1
              className="text-2xl font-medium sm:text-4xl xl:text-5xl"
              id="services-heading"
            >
              OUR SERVICES
            </h1>
          </div>

          <div className="w-full">
            <ul className="flex flex-col text-lg">
              {questions.map((el) => (
                <li
                  className="mb-2.5 rounded-3xl bg-white px-6 py-6 sm:px-12"
                  key={el.id}
                >
                  <span className="text-blue-muted mr-2 text-2xl font-medium uppercase">
                    q
                  </span>
                  {el.text}
                </li>
              ))}
            </ul>
            <div className="rounded-4xl bg-white px-6 py-6 sm:px-12">
              <p className="text-lg">
                If your answer to any of these questions is YES, then consider
                one of the services below or contact us for more information.
              </p>
              <div className="mt-8 flex gap-2">
                <CustomButton href="/contact" variant="tertiary">
                  Send a Message
                </CustomButton>
                <CustomButton href="/erasmus" variant="secondary">
                  Upcoming Erasmus
                </CustomButton>
              </div>
            </div>
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
