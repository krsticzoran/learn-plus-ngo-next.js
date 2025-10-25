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
    text: `Through our seminars, lessons, tailor-made courses, job shadowing, group mobilities and different types of non-formal education we provide our members and participants career guidance and better chances in their professional and private lives.`,
    bgClass: "bg-background-muted/50 sm:bg-white",
    textClass: "text-black/60",
  },
  {
    id: "expertise",
    title: "Expertise That Comes With Experience",
    text: `Although we are new NGO, all our members and board staff have huge experience in working with and for national and international stakeholders, organizations like UN, International Organization for Migration (IOM) and similar.`,
    bgClass: "bg-blue-muted text-white",
  },
  {
    id: "what-we-offer",
    title: "What We Offer",
    text: `We provide a diverse array of educational services, including personalized coaching, workshops, and seminars. Our goal is to help participants develop new skills, expand their knowledge, and enhance their career opportunities.`,
  },
  {
    id: "location",
    title: "location",
    text: `Our main office is located in Osijek, the center of Osijek-Baranya county, in the easternmost part of Croatia, very near three countries - Serbia, Bosnia and Herzegovina and Hungary.
`,
  },
];
