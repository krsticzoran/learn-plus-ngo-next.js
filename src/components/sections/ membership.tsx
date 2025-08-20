"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Container } from "@/components/layout/container";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { membershipData as tabs } from "@/data/membership-data";

import { useDebounce } from "@/hooks/useDebounce";

export default function Membership() {
  const firstTabRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if the screen width is at least 768px
    const mql = window.matchMedia("(min-width: 768px)");

    setIsDesktop(mql.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    mql.addEventListener("change", handleChange);

    return () => {
      mql.removeEventListener("change", handleChange);
    };
  }, []);

  const updateHeight = useCallback(() => {
    if (firstTabRef.current) {
      const currentHeight = firstTabRef.current.offsetHeight;
      setHeight((prevHeight) =>
        prevHeight !== currentHeight ? currentHeight : prevHeight,
      );
    }
  }, []);

  const debouncedUpdateHeight = useDebounce(updateHeight, 150);

  useEffect(() => {
    updateHeight();

    window.addEventListener("resize", debouncedUpdateHeight);

    return () => window.removeEventListener("resize", debouncedUpdateHeight);
  }, [debouncedUpdateHeight, updateHeight]);

  return (
    <Container
      aria-labelledby="membership-heading"
      as="section"
      className="my-2.5 rounded-4xl bg-white p-6"
      id="membership-section"
    >
      <h2 id="membership-heading" className="sr-only">
        Membership Information
      </h2>
      <Tabs
        orientation="vertical"
        defaultValue={tabs[0].id}
        className="flex w-full items-start justify-center gap-2.5 md:flex-row"
      >
        <TabsList className="bg-background-muted/50 grid h-auto w-full shrink-0 grid-cols-1 gap-1 rounded-3xl p-4 md:w-fit lg:w-1/3">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="data-[state=active]:bg-background-muted data-[state=active]:text-blue-muted hover:bg-blue-muted/20 cursor-pointer justify-start py-1.5 text-left text-base data-[state=active]:shadow-none lg:text-lg"
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex w-full items-center justify-center font-medium">
          {tabs.map((tab, index) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              ref={index === 0 ? firstTabRef : undefined}
              className="bg-background-muted/50 flex w-full flex-col items-start justify-start rounded-3xl p-4 font-medium sm:p-6 lg:text-lg"
              style={{
                height: isDesktop
                  ? index === 0
                    ? "auto"
                    : height
                      ? `${height}px`
                      : undefined
                  : "auto",
                overflow: "hidden",
                transition: "height 0.3s ease",
              }}
            >
              {tab.value.split("\n\n").map((paragraph, idx, arr) => (
                <p
                  key={idx}
                  className={
                    idx === arr.length - 1
                      ? "!text-black/60"
                      : "mb-4 !text-black/60"
                  }
                >
                  {paragraph.trim()}
                </p>
              ))}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </Container>
  );
}
