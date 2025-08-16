import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ParallaxProviderWrapper from "@/providers/parallax-provider-wrapper";

import Template from "@/components/animations/template";
import PageFadeIn from "@/components/animations/page-fade-in";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Learn Plus",
  description:
    "Learn Plus engages in Erasmus+ projects, promoting knowledge exchange, cultural diversity, and meaningful lifelong learning opportunities for people of all ages.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${inter.variable} relative antialiased`}
      >
        <PageFadeIn>
          <Header />
          <Template>
            <ParallaxProviderWrapper>{children}</ParallaxProviderWrapper>
            <Footer />
          </Template>
        </PageFadeIn>
      </body>
    </html>
  );
}
