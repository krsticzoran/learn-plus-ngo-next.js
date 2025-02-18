import Tabs from "@/components/layout/about/tabs";
import Introduction from "@/components/layout/about/introduction";
import Membership from "@/components/layout/about/membership";

export default function AboutUs() {
  return (
    <main>
      <Introduction />
      <Tabs />
      <Membership />
    </main>
  );
}
