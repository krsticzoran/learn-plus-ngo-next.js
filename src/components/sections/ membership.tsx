"use client";

import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/layout/container";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { membershipData as tabs } from "@/data/membership-data";

export default function Membership() {
  const firstTabRef = useRef<HTMLDivElement>(null);
  const [minHeight, setMinHeight] = useState<number | null>(null);

  useEffect(() => {
    if (firstTabRef.current) {
      setMinHeight(firstTabRef.current.offsetHeight);
    }
  }, []);

  return (
    <Container
      aria-labelledby="membership-heading"
      as="section"
      className="my-2.5 rounded-4xl bg-white p-8"
    >
      <h2 id="membership-heading" className="sr-only">
        Membership Information
      </h2>
      <Tabs
        orientation="vertical"
        defaultValue={tabs[0].value}
        className="flex w-full flex-row items-start justify-center gap-2.5"
      >
        <TabsList className="bg-background-muted grid h-auto w-1/3 shrink-0 grid-cols-1 gap-1 rounded-3xl p-4">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.name}
              value={tab.value}
              className="data-[state=active]:bg-background-muted data-[state=active]:text-blue-muted hover:bg-blue-muted/20! cursor-pointer justify-start py-1.5 text-left text-lg data-[state=active]:shadow-none"
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="text-muted-foreground flex w-full items-center justify-center font-medium">
          {tabs.map((tab, index) => (
            <TabsContent
              key={tab.name}
              value={tab.value}
              ref={index === 0 ? firstTabRef : undefined}
              className="bg-background-muted flex w-full flex-col items-start justify-start rounded-3xl p-4 text-lg"
              style={{ minHeight: minHeight ? `${minHeight}px` : undefined }}
            >
              {tab.value.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="mb-4">
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
