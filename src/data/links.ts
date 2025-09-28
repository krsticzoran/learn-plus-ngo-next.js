import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react";
import { ComponentType } from "react";

type NavLink = {
  label: string;
  href: string;
};

export const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Erasmus+", href: "/erasmus" },
  { label: "Services", href: "/services" },
  { label: "Our Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

type SocialLink = {
  id: string;
  href: string;
  label: string;
  icon: ComponentType<{ size?: number; stroke?: number }>;
};

export const socialLinks: SocialLink[] = [
  {
    id: "facebook",
    href: "https://facebook.com",
    label: "Facebook",
    icon: IconBrandFacebook,
  },
  {
    id: "instagram",
    href: "https://instagram.com",
    label: "Instagram",
    icon: IconBrandInstagram,
  },
  {
    id: "youtube",
    href: "https://youtube.com",
    label: "YouTube",
    icon: IconBrandYoutube,
  },
  {
    id: "email",
    href: "mailto:info@learn-plus.org",
    label: "Email us",
    icon: IconMail,
  },
];
