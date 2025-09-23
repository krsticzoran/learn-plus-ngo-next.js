import partner1 from "@/assets/images/partners/partner1.jpg";
import partner2 from "@/assets/images/partners/partner2.png";
import { StaticImageData } from "next/image";

type partner = {
  name: string;
  description: string;
  email: string;
  phone: string;
  image: StaticImageData;
  link: string;
  alt: string;
};

export const partnersData: partner[] = [
  {
    name: "BEE THE FUTURE, Cyprus",
    description:
      "Bee the Future, Cyprus, is an NGO active in the field of education, engaged in EU education programs and Erasmus+ internships, coordinating initiatives and opportunities for students from its base in Larnaca.",
    email: "beethefuturecyprus@gmail.com",
    phone: "+35795509707",
    image: partner1,
    link: "https://www.facebook.com/p/Bee-the-future-CY-61567715001706/",
    alt: "Bee The Future logo - NGO - Erasmus projects",
  },
  {
    name: "EUROPEAN PROJECT ORGANIZATION Kft, Budapest",
    description:
      "Our partner organization provides consultancy and organizational services in Erasmus projects, supporting teachers and students in EU member and candidate countries with job shadowing, group mobility, and internships.",
    email: "europeanprojectorganization@gmail.com",
    phone: "+36703665868",
    image: partner2,
    link: "https://epoproject.net/",
    alt: "European Project Organization logo - Erasmus projects",
  },
];
