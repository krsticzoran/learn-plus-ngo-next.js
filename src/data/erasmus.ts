import ancient1 from "@/assets/images/ancient-slavs/ancient1.webp";
import ancient2 from "@/assets/images/ancient-slavs/ancient2.webp";
import ancient3 from "@/assets/images/ancient-slavs/ancient3.webp";
import ancient4 from "@/assets/images/ancient-slavs/ancient4.webp";
import ancient5 from "@/assets/images/ancient-slavs/ancient5.webp";
import ancient6 from "@/assets/images/ancient-slavs/ancient6.webp";
import ancient7 from "@/assets/images/ancient-slavs/ancient7.webp";
import ancient8 from "@/assets/images/ancient-slavs/ancient8.webp";
import ancient9 from "@/assets/images/ancient-slavs/ancient9.webp";
import ancient10 from "@/assets/images/ancient-slavs/ancient10.webp";
import ancient11 from "@/assets/images/ancient-slavs/ancient11.webp";
import ancient12 from "@/assets/images/ancient-slavs/ancient12.webp";

import { StaticImageData } from "next/image";

type ActiveErasmus = {
  title: string;
  projectCode?: string;
  start: string;
  end: string;
  coordinator: string;
  partners: string[];
};

export const ongoingErasmusProjects: ActiveErasmus[] = [
  {
    title: "KA152: Sport can help you",
    projectCode: "2025-3-IT03-KA152-YOU-000289206",
    start: "01/05/2025",
    end: "30/11/2025",
    coordinator:
      "Centro Studi Tradizioni Popolari Gruppo Folk U Rafu Terra del sale, Petralia Soprana, Italy",
    partners: [
      "Asociatia Culturala Szarkalab Kulturalis Egyesulet, Cluj-Napoca, Romania",
      "Learn Plus, Osijek, Croatia",
    ],
  },
  {
    title: "KA153: Digital Education to Empower Critical Thinking",
    projectCode: "2025-1-DE-KA153-YOU-000297955",
    start: "01/06/2025",
    end: "31/05/2027",
    coordinator: "Giish e. V., Köln, Germany",
    partners: [
      "Bee the Future, Larnaca, Cyprus",
      "Bilim dil Kültur Derneği, Dalaman, Türkiye",
      "Citizen Association United Youth, Kočani, The Republic of North Macedonia",
      "Notprostduios, Associação para o desenvolvimento Cultural e Artístico, Paredes, Portugal",
      "Learn Plus, Osijek, Croatia",
    ],
  },
  {
    title: "KA210: Building Bridges With Holistic Well-Being",
    projectCode: "2024-2-PL01-KA210-SCH-000287851",
    start: "24/08/2025",
    end: "23/8/2026",
    coordinator:
      "II Liceum Ogólnokształcące im. J. Śniadeckiego, Kielce, Poland",
    partners: [
      "Šiauliu sporto gimnazija, Šiauliu, Lithuania",
      "15. Temmuz Şehitler Anadolu Lisesi, Kastamonu, Türkiye",
      "Learn Plus, Osijek, Croatia",
    ],
  },
  {
    title: "KA210: My Story, Your Story; Our Stories…",
    start: "01/09/2025",
    end: "31/12/2026",
    coordinator:
      "Erasmus Frankfurter Stadtschule Gymnasium, Heussenstamm, Germany",
    partners: [
      "Istituto di istruzione superiore “Giordano Bruno”, Budrio, Italy",
      "Gulveren Anadolu Lisesi, Antalya, Türkiye",
      "Learn Plus, Osijek, Croatia",
    ],
  },
];

type PastErasmus = {
  id: string;
  title: string;
  description: string;
  start: string;
  projectCode?: string;
  end: string;
  image: StaticImageData;
  text: string[];
  images?: StaticImageData[];
};

export const previousErasmusProjects: PastErasmus[] = [
  {
    id: "traditions-of-ancient-slavs-in-theater",
    title: "Traditions of Ancient Slavs in Theater",
    description:
      "Youth exchange with Stowarzyszenie Skaut on Ancient Slavs traditions through shadow theatre, held in Osijek with Erasmus+ support",
    start: "25/11/2024",
    image: ancient1,
    end: "01/12/2024",
    text: [
      `From 25/11 to 01/12/2024 our organization hosted our partner [Stowarzyszenie Skaut](https://www.skaut.lublin.pl/), a youth organization from Lublin, Poland. It was a youth exchange with topic **Traditions of Ancient Slavs in Theater** in which educators Elzbieta Nowak and Lidia Skubisz trained a group of 18 youngsters from Poland and Croatia a shadow theatre technique where participants used different tools such as lights, figures and other tools to a thin sheet from both sides.`,
      `This was one of their activities done under the scope of their Erasmus+ KA151-YOU project funded by Polish National Agency. All activities were realized in collaboration with [Osnovna škola Franje Krežme](https://os-fkrezme-os.skole.hr/) to which we donated all the equipment for some future shadow play performances.`,
    ],
    images: [
      ancient2,
      ancient3,
      ancient4,
      ancient5,
      ancient6,
      ancient7,
      ancient8,
      ancient9,
      ancient10,
      ancient11,
      ancient12,
    ],
  },
];
