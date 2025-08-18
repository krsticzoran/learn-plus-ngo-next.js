import { options } from "@/data/services-data";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function AccordionServices() {
  return (
    <div className="mx-auto w-full">
      <Accordion type="single" collapsible>
        {options.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className={`bg-background-muted/50 hover:bg-background-muted rounded-3xl px-6 py-4 ${index === options.length - 1 ? "mb-0" : "mb-2.5"} border-none shadow-none`}
          >
            <AccordionTrigger className="font-ibm-plex-sans text-black-muted cursor-pointer border-none text-xl shadow-none hover:no-underline sm:text-2xl">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="font-inter text-black-muted sm:text-lg">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
