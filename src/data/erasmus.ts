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
    end: "23/08/2025",
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
