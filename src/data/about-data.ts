type AboutSection = {
  id: string;
  category?: string;
  title?: string;
  text: string;
  bgClass?: string;
  textClass?: string;
};

export const aboutSections: AboutSection[] = [
  {
    id: "who-we-are",
    category: "about us",
    title: "Find Out Who We Are",
    text: `Through our seminars, lessons, tailor-made courses, job shadowing activities, group mobilities and different types of non-formal education we provide our members and incoming participants career guidance and better chances in their professional and private lives. `,
    bgClass: "bg-background-muted/50 sm:bg-white",
    textClass: "text-black/60",
  },
  {
    id: "expertise",
    title: "Expertise That Comes With Experience",
    text: `Although we are a relatively new organization, our board staff and key persons have huge experience of working with and for national and international organizations, schools, educational and vocational centers and on different types of projects.`,
    bgClass: "bg-blue-muted text-white",
  },
  {
    id: "what-we-offer",
    title: "What We Offer",
    text: `We provide a diverse array of educational services, such as personal coaching, workshops and seminars as well as internships in educational organizations and companies in different locations. Our main goals are to help participants to develop new skills, expand their knowledge and to enhance their career opportunities.`,
  },
  {
    id: "location",
    title: "location",
    text: `Our main office is located in Osijek, the center of Osijek-Baranya county, in the easternmost part of Croatia that touches the borders of Hungary, Serbia and Bosnia and Herzegovina. Depending on your wishes, we can provide you our services also in Hungary, Cyprus, Türkiye and on the beautiful Caribbean island of Curaçao.
`,
  },
];
