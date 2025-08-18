import { Container } from "@/components/layout/container";
import AccordionServices from "@/components/ui/accordion-services";

export default function Services() {
  return (
    <Container as="main">
      <div className="my-2.5 rounded-4xl bg-white p-6">
        <AccordionServices />
      </div>
    </Container>
  );
}
