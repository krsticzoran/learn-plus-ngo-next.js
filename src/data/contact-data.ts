import { IconPhone, IconMail, IconMapPin } from "@tabler/icons-react";

import { ComponentType } from "react";

type ContactItem = {
  type: "phone" | "email" | "address";
  value: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
};

export const contactData: ContactItem[] = [
  {
    type: "phone",
    value: "+385 99 247 66 44",
    href: "https://wa.me/+385992476644?text=Hello%2C%20I%20am%20reaching%20out%20regarding%20potential%20Erasmus%2B%20partnership%20opportunities.%20Let%E2%80%99s%20connect%20and%20explore%20possibilities%20for%20collaboration.",
    Icon: IconPhone,
  },
  {
    type: "email",
    value: "info@learn-plus.org",
    href: "mailto:info@learn-plus.org",
    Icon: IconMail,
  },
  {
    type: "address",
    value: "Josipa Jurja Strossmayera 65a, Osijek, Croatia",
    href: "https://www.google.com/maps/search/?api=1&query=Josipa+Jurja+Strossmayera+65a,+31000+Osijek",
    Icon: IconMapPin,
  },
];

type InfoSection = {
  id: string;
  title: string;
  text: string;
  bgColor: "bg-blue-muted" | "bg-black-muted";
};

export const aboutOsijekData: InfoSection[] = [
  {
    id: "find-us",
    title: "How to Find Us",
    text: "Osijek is located in eastern Croatia, right on the banks of the Drava River. The city is well connected by road and rail, and the nearest airport is in Osijek, just a short drive away. It can also be reached in under three hours from the airports in Zagreb, Belgrade, and Budapest.",
    bgColor: "bg-blue-muted",
  },
  {
    id: "about-osijek",
    title: " About Osijek",
    text: "Osijek is the fourth largest city in Croatia, with around 100,000 residents, serving as the economic, cultural, and educational center of the Slavonia region. Known for its rich history, green parks, and distinctive Central European architecture, the city offers a unique blend of tradition and modern life.",
    bgColor: "bg-black-muted",
  },
];
