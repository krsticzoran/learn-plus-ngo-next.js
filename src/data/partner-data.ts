import partner1 from "@/assets/images/partners/partner1.png";
import partner2 from "@/assets/images/partners/partner2.png";
import partner3 from "@/assets/images/partners/partner3.png";
import partner4 from "@/assets/images/partners/partner4.jpg";
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
  {
    name: "BİLİM DİL KÜLTÜR DERNEĞİ, Dalaman-Türkiye",
    description:
      "Through implementing EU projects, they are cultivating international cooperation and inspiring young people for their engagement in fields of science, language and culture, just as their name of this NGO means in Turkish language.",
    phone: "+905077697055",
    email: "tecsmart@gmail.com",
    link: "https://www.facebook.com/groups/1981708168507047/?ref=share_group_link&mibextid=K35XfP&rdid=qQpHEYjIoKnAjLDw&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F1B12qgiwcq%2F%3Fmibextid%3DK35XfP#",
    image: partner3,
    alt: "BİLİM DİL KÜLTÜR DERNEĞİ - Erasmus projects",
  },
  {
    name: "Intertravel",
    description:
      "Intertravel provides specialized support to students and institutions for booking and managing flights within Erasmus+ and other mobility programs. They focus on flexible fares, date changes, group bookings, and fast customer support to ensure stress-free travel for students and staff.",
    phone: "+385913475555",
    email: "Info@the-intertravel.com",
    link: "https://www.the-intertravel.com/",
    image: partner4,
    alt: "Intertravel - Erasmus projects",
  },
];
